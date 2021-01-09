<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Open Chat</v-card-title>
          <v-card-text
            >Anyone can use this chat. All subscriptions are
            receved.</v-card-text
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
    <v-row>
      <v-col cols="6">
        <ChatList title="Input" :list="messages"></ChatList>
      </v-col>
      <v-col cols="6">
        <ChatList title="Subscriptions" :list="subscriptionMessages"></ChatList>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { API, graphqlOperation } from 'aws-amplify'
import { createOpenChat } from '@/graphql/mutations'
import { onCreateOpenChat } from '@/graphql/subscriptions'

import ChatList from '@/components/ChatList'

export default {
  components: { ChatList },
  data: function() {
    return {
      inputMessage: '',
      onCreateOpenChatSubscription: null,
      messages: [],
      subscriptionMessages: [],
    }
  },
  created: function() {
    this.onCreateOpenChatSubscription = API.graphql(
      graphqlOperation(onCreateOpenChat),
    ).subscribe({
      next: ({ provider, value }) => {
        console.log({ provider, value })
        this.subscriptionMessages.push(value.data.onCreateOpenChat)
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
        graphqlOperation(createOpenChat, {
          input: { message: this.inputMessage },
        }),
      )
      console.log(message)

      this.messages.push(message.data.createOpenChat)
      this.inputMessage = ''
    },
  },
}
</script>

<style></style>
