<template>
<v-card
v-bind="{flat:true}">
  <v-list>
    <v-list-subheader
        class="text-h6 text-uppercase font-weight-black"
        color="teal-lighten-2">
      Skills
    </v-list-subheader>
    <v-list-item
        class="text-black text-capitalize"
        v-for="skill in user.skills"
    >
      {{skill}}
    </v-list-item>
  </v-list>
</v-card>
</template>

<script scoped>
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