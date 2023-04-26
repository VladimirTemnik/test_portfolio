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

<script setup>
import {ref} from 'vue'
import CompTheNavbar from '@/components/compositionAPI/_TheNavbar.vue'
import CompTheLoginForm from '@/components/compositionAPI/login/_TheLoginForm.vue'

const dialog = ref(false)

function onLoginFormShow(){
  dialog.value=true
}
function onLoginFormHide(){
  dialog.value=false
}

</script>