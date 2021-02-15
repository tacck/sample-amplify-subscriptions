<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Multi-room Close Chat</v-card-title>
          <v-card-text
            >Only authenticated users can use this chat. All subscriptions are
            received.
          </v-card-text>
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
      <v-tab
        v-for="(room, index) in rooms"
        :key="index"
        :href="'#' + room"
        @click="setSubscribeByRoomName(room)"
        >{{ room }}</v-tab
      >
    </v-tabs>
    <v-card flat>
      <v-tabs-items v-model="roomName">
        <v-tab-item v-for="(room, index) in rooms" :key="index" :value="room">
          <v-row class="pa-2">
            <v-col cols="6">
              <ChatList title="Input" :list="messages[room]"></ChatList>
            </v-col>
            <v-col cols="6">
              <ChatList
                title="Subscriptions"
                :list="subscriptionMessages[room]"
              ></ChatList>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { createCloseRoomChat } from '@/graphql/mutations'
import { onCreateCloseRoomChatByRoomName } from '@/graphql/subscriptions'

import ChatList from '@/components/ChatList'

export default {
  components: { ChatList },
  data: function() {
    return {
      user: null,
      roomName: null,
      inputMessage: '',
      rooms: ['room1', 'room2'],
      messages: {
        room1: [],
        room2: [],
      },
      subscriptionMessages: {
        room1: [],
        room2: [],
      },
      onCreateMultiRoomChatSubscriptions: {
        room1: null,
        room2: null,
      },
    }
  },
  created: async function() {
    this.user = await Auth.currentUserInfo()
    this.setSubscribeByRoomName('room1')
  },
  beforeDestroy: function() {
    this.clearSubscriptions()
  },
  methods: {
    sendMessage: async function() {
      const message = await API.graphql(
        graphqlOperation(createCloseRoomChat, {
          input: { message: this.inputMessage, roomName: this.roomName },
        }),
      )
      console.log(message)

      this.messages[this.roomName].push(message.data.createCloseRoomChat)
      this.inputMessage = ''
    },
    setSubscribeByRoomName(roomName) {
      this.clearSubscriptions()

      this.onCreateMultiRoomChatSubscriptions[roomName] = API.graphql(
        graphqlOperation(onCreateCloseRoomChatByRoomName, {
          roomName: roomName,
        }),
      ).subscribe({
        next: ({ provider, value }) => {
          console.log({ provider, value })
          this.subscriptionMessages[
            value.data.onCreateCloseRoomChatByRoomName.roomName
          ].push(value.data.onCreateCloseRoomChatByRoomName)
        },
      })
    },
    clearSubscriptions() {
      this.rooms.forEach(room => {
        if (this.onCreateMultiRoomChatSubscriptions[room]) {
          this.onCreateMultiRoomChatSubscriptions[room].unsubscribe()
        }
        this.onCreateMultiRoomChatSubscriptions[room] = null
      })
    },
  },
}
</script>

<style></style>
