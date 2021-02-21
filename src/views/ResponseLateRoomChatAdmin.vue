<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Response Late Room Chat Admin</v-card-title>
          <v-card-text
            >Only authenticated users can post. Check newer posts and notify to
            all users.</v-card-text
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
import { API, graphqlOperation } from 'aws-amplify'
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql'
import { createResponseLateRoomChat, postResponses } from '@/graphql/mutations'
import { listResponseLateRoomChats } from '@/graphql/queries'
import { onPostResponses } from '@/graphql/subscriptions'

import ChatList from '@/components/ChatList'

export default {
  components: { ChatList },
  data: function() {
    return {
      // user: null,
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
      onPostResponses: {
        room1: null,
        room2: null,
      },
      intervalTime: 10000,
      interval: null,
    }
  },
  created: async function() {
    this.setSubscribeByRoomName('room1')
  },
  mounted: async function() {
    this.interval = setInterval(async () => {
      const getStartTime = new Date(Date.now() - this.intervalTime)
      const postedMessages = await API.graphql({
        query: listResponseLateRoomChats,
        variables: {
          filter: { createdAt: { ge: getStartTime.toISOString() } },
        },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })
      console.log('interval listResponseLateRoomChats', postedMessages)
      if (postedMessages.data.listResponseLateRoomChats.items.length > 0) {
        this.rooms.forEach(roomName => {
          const messages = postedMessages.data.listResponseLateRoomChats.items.filter(
            item => item.roomName === roomName,
          )
          if (messages && messages.length > 0) {
            this.postResponsesToAll(roomName, messages)
          }
        })
      }
    }, this.intervalTime)
  },
  beforeDestroy: function() {
    this.clearSubscriptions()
    if (this.interval) {
      clearInterval(this.interval)
      this.interval = null
    }
  },
  methods: {
    sendMessage: async function() {
      const message = await API.graphql(
        graphqlOperation(createResponseLateRoomChat, {
          input: { message: this.inputMessage, roomName: this.roomName },
        }),
      )
      console.log('sendMessage', message)

      this.messages[this.roomName].push(message.data.createResponseLateRoomChat)
      this.inputMessage = ''
    },
    postResponsesToAll: async function(roomName, messages) {
      const message = await API.graphql(
        graphqlOperation(postResponses, {
          input: {
            roomName: roomName,
            items: messages,
          },
        }),
      )
      console.log('postResponsesToAll', message)
    },
    setSubscribeByRoomName(roomName) {
      this.clearSubscriptions()

      this.onPostResponses[roomName] = API.graphql({
        query: onPostResponses,
        variables: {
          roomName: roomName,
        },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      }).subscribe({
        next: ({ provider, value }) => {
          console.log('onPostResponses', { provider, value })
          value.data.onPostResponses.items.map(item => {
            this.subscriptionMessages[item.roomName].push(item)
          })
        },
      })
    },
    clearSubscriptions() {
      this.rooms.forEach(room => {
        if (this.onPostResponses[room]) {
          this.onPostResponses[room].unsubscribe()
        }
        this.onPostResponses[room] = null
      })
    },
  },
}
</script>

<style></style>
