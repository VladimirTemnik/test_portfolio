<template>
  <v-container>
    <v-row>
      <v-col>
        <comp-the-login-form></comp-the-login-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapState} from "vuex";
import compTheLoginForm from '@/components/LogIn/TheLoginForm.vue'

export default {
  components: {
    compTheLoginForm,
  },
  computed: {
    ...mapState(["user"]),
  },
  methods:{
    ...mapActions(['getPortfolio'])
  }
}
</script>