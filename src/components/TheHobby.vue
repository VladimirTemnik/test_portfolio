<template>
  <v-card
  v-bind="{flat:true}">
    <v-list>
      <v-list-subheader
          class="text-h6 text-uppercase font-weight-black"
          color="teal-lighten-2">
        Hobby
      </v-list-subheader>
      <v-list-item v-for="hobby in user.hobbies"
              class="text-black text-capitalize">
        <template v-slot:prepend>
          <v-icon
          color="teal-lighten-2">
            mdi-square
          </v-icon>
          {{hobby}}
        </template>
      </v-list-item>
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