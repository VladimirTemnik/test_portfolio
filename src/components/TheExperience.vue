<template>
  <v-card
      v-bind="{flat:true}">
    <v-card-title
        class="text-h6 text-uppercase bg-teal-lighten-2 rounded-lg"
        color="teal-lighten-2">
      Job history
    </v-card-title>
    <v-card v-for="item in experience">
      <v-card-title
          class="d-flex flex-row flex-wrap justify-space-between text-md-body">
        <p>{{item.position}}</p>
        <p>{{item.period}}</p>
      </v-card-title>
      <v-card-subtitle>
        {{item.company}},{{item.city}}
      </v-card-subtitle>
      <v-card-text>
        {{item.description}}
      </v-card-text>
    </v-card>
  </v-card>
</template>

<script>
export default {
  props:['experience'],
}
</script>