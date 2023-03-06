<template>
  <v-toolbar
      class="d-flex justify-space-around"
  >
    <v-spacer></v-spacer>
    <v-btn
        class="text-h6 rounded-md bg-teal-lighten-2 mr-10"
        v-on:click="$emit('signIn')"
        v-bind="{
        prependIcon: 'mdi-login',
        variant: 'elevated',
        type:'btn',
        }">
      Sign in
    </v-btn>
    <v-btn
        class="text-h6 rounded-md bg-grey-darken-3 mr-10"
        v-on:click="logOut()"
        v-bind="{
        prependIcon: 'mdi-logout',
        variant: 'elevated',
        type:'btn',
        }">
      Log out
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  methods:{
    async logOut(){
      await this.logout()
      await this.$router.push('/login')
    }
  }
}
</script>