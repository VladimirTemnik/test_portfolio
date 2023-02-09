<template>

  <v-card
  class="bg-teal-lighten-2 rounded-lg">
    <v-row>
      <v-col
      cols="4"
      class="d-flex justify-center">
        <v-avatar
        size="170"
        class="mt-10 border">
          <v-img src="https://via.placeholder.com/150">
          </v-img>
        </v-avatar>
      </v-col>
      <v-col
      cols="8">
        <v-card-title class="pt-10 text-h3 text-white text-uppercase">{{user.firstName}} {{user.lastName}}</v-card-title>
        <v-card-text class="py-6 text-h5 text-white">{{user.position}}</v-card-text>
        <v-card-text class="py-0 text-white">
          <v-btn class="text-lowercase text-body-1 pl-0" v-bind="{variant:'text', href:`mailto:${user.email}`}">
            <v-icon class="mr-2">
              mdi-email-outline
            </v-icon>
            {{user.email}}
          </v-btn>
        </v-card-text>
        <v-card-text class="py-0 text-white">
          <v-btn class="pl-0 text-body-1" v-bind="{variant: 'text', href:`tel:${user.phoneNumber}`}">
            <v-icon class="mr-2">
              mdi-phone
            </v-icon>
            {{user.phoneNumber}}
          </v-btn>
        </v-card-text>
        <v-card-text class="py-0 text-body-1 text-white">
          <v-btn class="pl-0 text-body-1" v-bind="{variant: 'text'}">
            <v-icon class="mr-2">
              mdi-home
            </v-icon>
            {{user.address}}
          </v-btn>
        </v-card-text>
        <v-card-text class="py-0 text-body-1 text-white">
          <v-btn class="pl-0 text-body-1" v-bind="{variant: 'text'}">
            <v-icon class="mr-2">
              mdi-calendar-month
            </v-icon>
            {{user.birthday}}
          </v-btn>
        </v-card-text>
        <v-card-text class="py-0 text-body-1 text-white">
          <v-btn class="pl-0 text-body-1 text-capitalize" v-bind="{variant: 'text'}">
            <v-icon class="mr-2">
              mdi-gender-male-female
            </v-icon>
            {{user.gender}}
          </v-btn>
        </v-card-text>
        <v-card-text class="py-0 text-body-1 text-white">
          <v-btn class="pl-0 text-body-1 text-capitalize" v-bind="{variant: 'text'}">
            <v-icon class="mr-2">
              mdi-account-multiple
            </v-icon>
            {{user.relationship}}
          </v-btn>
        </v-card-text>
        <v-card-text class="py-0  text-white">
          <v-icon class="mr-2">
            mdi-github
          </v-icon>
          <v-btn class="text-capitalize pl-0 text-body-1" v-bind="{variant:'text', href:user.socialNW.github}">
            GitHub
          </v-btn>
        </v-card-text>
        <v-card-text class="pb-5 pt-0 text-white">
          <v-icon class="mr-2">
            mdi-linkedin
          </v-icon>
          <v-btn class="text-capitalize text-body-1 pl-0" v-bind:href="user.socialNW.linkedIn" variant="text">
            LinkedIn
          </v-btn>
        </v-card-text>
      </v-col>
    </v-row>
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

<style scoped>
#first{
  background-color: #9DB1CC;
}
#second{
  background-color: green;
}

</style>