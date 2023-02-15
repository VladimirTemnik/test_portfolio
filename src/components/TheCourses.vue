<template>
  <v-card
      v-bind="{flat:true}">
    <v-card-title
        class="text-h6 text-uppercase bg-teal-lighten-2 rounded-lg"
        color="teal-lighten-2">
      Courses
    </v-card-title>
    <v-card v-for="course in user.courses">
      <v-card-title
          class="d-flex flex-row justify-space-between">
        <p>{{course.source}} - {{course.program}}</p>
        <p>{{course.period}}</p>
      </v-card-title>
      <v-card-text>
        {{course.description}}
      </v-card-text>
    </v-card>
  </v-card>
</template>

<script>
import {mapState} from "vuex"

export default {
  components: {

  },
  data(){
    return {

    }
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {

  }
}
</script>