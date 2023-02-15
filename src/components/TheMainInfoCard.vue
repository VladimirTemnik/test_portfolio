<template>
    <v-card-title class="pt-10 text-h5 text-md-body-2 text-md-h3 text-white text-uppercase font-weight-black">{{user.firstName}} {{user.lastName}}</v-card-title>
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