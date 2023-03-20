<template>
  <v-card
      v-bind="{flat:true}">
    <v-card-title
        class="text-h6 text-uppercase bg-teal-lighten-2 rounded-lg"
        color="teal-lighten-2">
      Education
    </v-card-title>
    <v-card v-for="item in education">
      <v-card-title
          class="d-flex flex-row justify-space-between ">
        <p>{{item.degree}}</p>
        <p>{{item.period}}</p>
      </v-card-title>
      <v-card-subtitle>
        {{item.university}},{{item.city}}
      </v-card-subtitle>
      <v-card-text>
        {{item.speciality}}
      </v-card-text>
    </v-card>

  </v-card>
</template>

<script setup>
const props= defineProps({
  education: []
})
</script>