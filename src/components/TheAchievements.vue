<template>
  <v-card
      v-bind="{flat:true}">
    <v-card-title
        class="text-h6 text-uppercase bg-teal-lighten-2 rounded-lg"
        color="teal-lighten-2">
      Achievements
    </v-card-title>
    <v-card v-for="item in achievements">
      <v-card-title
      class="">
        {{ item.company }}
      </v-card-title>
      <v-card-text>
        {{item.achievement}}
      </v-card-text>
    </v-card>
  </v-card>
</template>

<script>
export default {
  props:['achievements'],
}
</script>