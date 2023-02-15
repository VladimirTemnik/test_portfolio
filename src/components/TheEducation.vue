<template>
<v-card
v-bind="{flat:true}">
  <v-card-title
      class="text-h6 text-uppercase bg-teal-lighten-2 rounded-lg"
      color="teal-lighten-2">
      Education
  </v-card-title>
  <v-card v-for="education in user.education">
    <v-card-title
      class="d-flex flex-row justify-space-between text-md-body-2">
      <p>{{education.degree}}</p>
      <p>{{education.period}}</p>
    </v-card-title>
    <v-card-subtitle>
      {{education.university}},{{education.city}}
    </v-card-subtitle>
    <v-card-text>
      {{education.speciality}}
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