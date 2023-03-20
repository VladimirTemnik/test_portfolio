<template>
  <v-card
      v-bind="{flat:true}">
    <v-card-title
        class="text-h6 text-uppercase bg-teal-lighten-2 rounded-lg "
        color="teal-lighten-2">
      Profile
    </v-card-title>
    <v-card-text v-bind="{profile: profile}">
      {{profile}}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props:['profile'],

}
</script>