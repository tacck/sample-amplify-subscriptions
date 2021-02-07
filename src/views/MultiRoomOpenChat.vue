<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Multi-room Open Chat</v-card-title>
          <v-card-text
            >Anyone can use this chat. All subscriptions are receved, and
            received messages are set in the message list for each
            room.</v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="inputMessage"
          label="New Message"
          outlined
          clearable
          append-outer-icon="mdi-send"
          @click:append-outer="sendMessage"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-tabs
      v-model="roomName"
      background-color="primary"
      center-active
      centered
      dark
    >
      <v-tab href="#room1">room1</v-tab>
      <v-tab href="#room2">room2</v-tab>
    </v-tabs>
    <v-card flat>
      <v-tabs-items v-model="roomName">
        <v-tab-item value="room1">
          <v-row class="pa-2">
            <v-col cols="6">
              <ChatList title="Input" :list="messages.room1"></ChatList>
            </v-col>
            <v-col cols="6">
              <ChatList
                title="Subscriptions"
                :list="subscriptionMessages.room1"
              ></ChatList>
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item value="room2">
          <v-row class="pa-2">
            <v-col cols="6">
              <ChatList title="Input" :list="messages.room2"></ChatList>
            </v-col>
            <v-col cols="6">
              <ChatList
                title="Subscriptions"
                :list="subscriptionMessages.room2"
              ></ChatList>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
import { API, graphqlOperation } from 'aws-amplify'
import { createRoomChat } from '@/graphql/mutations'
import { onCreateRoomChat } from '@/graphql/subscriptions'

import ChatList from '@/components/ChatList'

export default {
  components: { ChatList },
  data: function() {
    return {
      roomName: null,
      inputMessage: '',
      messages: {
        room1: [],
        room2: [],
      },
      subscriptionMessages: {
        room1: [],
        room2: [],
      },
      onCreateOpenChatSubscription: null,
    }
  },
  created: function() {
    this.onCreateOpenChatSubscription = API.graphql(
      graphqlOperation(onCreateRoomChat),
    ).subscribe({
      next: ({ provider, value }) => {
        console.log({ provider, value })
        this.subscriptionMessages[value.data.onCreateRoomChat.roomName].push(
          value.data.onCreateRoomChat,
        )
      },
    })
  },
  beforeDestroy: function() {
    if (this.onCreateOpenChatSubscription) {
      this.onCreateOpenChatSubscription.unsubscribe()
      this.onCreateOpenChatSubscription = null
    }
  },
  methods: {
    sendMessage: async function() {
      const message = await API.graphql(
        graphqlOperation(createRoomChat, {
          input: { message: this.inputMessage, roomName: this.roomName },
        }),
      )
      console.log(message)

      this.messages[this.roomName].push(message.data.createRoomChat)
      this.inputMessage = ''
    },
  },
}
</script>

<style></style>
