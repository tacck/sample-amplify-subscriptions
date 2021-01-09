<template>
  <v-card outlined class="pa-2">
    <v-row>
      <v-col cols="12"
        ><v-card flat
          ><v-card-title>{{ title }}</v-card-title></v-card
        ></v-col
      >
      <v-col cols="12" v-for="(item, index) in computedList" :key="index"
        ><v-card
          ><v-card-text>{{ item.message }}</v-card-text></v-card
        ></v-col
      >
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
      require: true,
    },
  },
  computed: {
    computedList: function() {
      return this.list
    },
  },
}
</script>

<style></style>
