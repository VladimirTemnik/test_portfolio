<template>
  <v-card
      v-bind="{flat:true}">
    <v-card-title
        class="text-h6 text-uppercase bg-teal-lighten-2 rounded-lg"
        color="teal-lighten-2">
      Profile
    </v-card-title>
    <v-card-text>
      {{user.profile}}
    </v-card-text>
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