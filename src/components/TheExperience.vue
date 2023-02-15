<template>
  <v-card
      v-bind="{flat:true}">
    <v-card-title
        class="text-h6 text-uppercase bg-teal-lighten-2 rounded-lg"
        color="teal-lighten-2">
      Job history
    </v-card-title>
    <v-card v-for="job in user.jobExperience">
      <v-card-title
          class="d-flex flex-row flex-wrap justify-space-between">
        <p>{{job.position}}</p>
        <p>{{job.period}}</p>
      </v-card-title>
      <v-card-subtitle>
        {{job.company}},{{job.city}}
      </v-card-subtitle>
      <v-card-text>
        {{job.description}}
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