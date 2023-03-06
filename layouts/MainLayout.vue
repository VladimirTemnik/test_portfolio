<template>
  <v-layout>
    <v-main>
      <comp-the-navbar
      v-on:signIn="onLoginFormShow"
      ></comp-the-navbar>
      <v-dialog v-model="dialog">
        <comp-the-login-form
          v-on:successSubmit="onLoginFormHide"
        ></comp-the-login-form>
      </v-dialog>
      <router-view v-slot="{ Component }">
        <template v-if="Component">
          <suspense>
            <component v-bind:is="Component"></component>
            <template v-slot:fallback> loading </template>
          </suspense>
        </template>
      </router-view>
    </v-main>
  </v-layout>
</template>

<script>
import CompTheNavbar from '@/components/TheNavbar.vue'
import CompTheLoginForm from '@/components/LogIn/TheLoginForm.vue'
export default {
  components: {
    CompTheNavbar,
    CompTheLoginForm
  },
  data(){
    return {
      dialog: false
    }
  },
  methods: {
    onLoginFormShow(){
      this.dialog=true
    },
    onLoginFormHide(){
      this.dialog=false
    }
  }
}

</script>