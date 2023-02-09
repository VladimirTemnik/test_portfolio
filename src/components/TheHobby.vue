<template>
  <v-card
  v-bind="{flat:true}">
    <v-list-subheader
        class="text-h6 text-uppercase"
        color="teal-lighten-2">

    </v-list-subheader>
    <v-list v-for="item in items"
    class="text-black text-capitalize">

    </v-list>

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