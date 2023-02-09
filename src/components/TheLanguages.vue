<template>
<v-card
v-bind="{flat:true}">
  <v-list-subheader
      class="text-h6 text-uppercase"
      color="teal-lighten-2">
    Languages
  </v-list-subheader>
  <v-list-item
      class="text-black text-capitalize"
      v-for="(lang, i) in user.languages"
  >
    {{lang.language}}
    <br>
    <v-progress-linear
    v-bind="{modelValue:`${lang.score * 20}`, color:'teal-lighten-2'}">

    </v-progress-linear>
  </v-list-item>
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