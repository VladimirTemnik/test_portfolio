<template>
  <v-card
      v-bind="{flat:true}">
    <v-card-title
        class="text-h6 text-uppercase bg-teal-lighten-2 rounded-lg"
        color="teal-lighten-2">
      Courses
    </v-card-title>
    <v-card v-for="item in courses">
      <v-card-title
          class="d-flex flex-row flex-wrap justify-space-between">
        <p>{{item.source}}</p>
        <p>{{item.period}}</p>
      </v-card-title>
      <v-card-subtitle>
        <p>{{item.program}}</p>
      </v-card-subtitle>
      <v-card-text>
        {{item.description}}
      </v-card-text>
    </v-card>
  </v-card>
</template>

<script>

export default {
  props:['courses'],
}
</script>