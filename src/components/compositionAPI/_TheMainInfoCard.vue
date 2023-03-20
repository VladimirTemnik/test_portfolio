<template>
  <v-card-title class="pt-10 text-h5 text-md-h3 text-white text-uppercase font-weight-black"
                v-bind="{
      firstName: props.firstName,
      lastName: props.lastName
    }"
  >{{props.firstName}} {{props.lastName}}</v-card-title>
  <v-card-text class="py-6 text-h5 text-white"
               v-bind="{
      position: props.position
    }"
  >{{props.position}}</v-card-text>
  <v-card-text class="py-0 text-white">
    <v-btn class="text-lowercase text-body-1 pl-0" v-bind="{
        variant:'text',
        email: props.email,
        href:`mailto:${props.email}`}">
      <v-icon class="mr-2">
        mdi-email-outline
      </v-icon>
      {{props.email}}
    </v-btn>
  </v-card-text>
  <v-card-text class="py-0 text-white">
    <v-btn class="pl-0 text-body-1" v-bind="{
        variant: 'text',
        phoneNumber: props.phoneNumber,
        href:`tel:${props.phoneNumber}`}">
      <v-icon class="mr-2">
        mdi-phone
      </v-icon>
      {{props.phoneNumber}}
    </v-btn>
  </v-card-text>
  <v-card-text class="py-0 text-body-1 text-white">
    <v-btn class="pl-0 text-body-1" v-bind="{
        variant: 'text',
        address: props.address}">
      <v-icon class="mr-2">
        mdi-home
      </v-icon>
      {{props.address}}
    </v-btn>
  </v-card-text>
  <v-card-text class="py-0 text-body-1 text-white">
    <v-btn class="pl-0 text-body-1" v-bind="{
        variant: 'text',
        birthday: props.birthday}">
      <v-icon class="mr-2">
        mdi-calendar-month
      </v-icon>
      {{props.birthday}}
    </v-btn>
  </v-card-text>
  <v-card-text class="py-0 text-body-1 text-white">
    <v-btn class="pl-0 text-body-1 text-capitalize" v-bind="{
        variant: 'text',
        gender: props.gender}">
      <v-icon class="mr-2">
        mdi-gender-male-female
      </v-icon>
      {{props.gender}}
    </v-btn>
  </v-card-text>
  <v-card-text class="py-0 text-body-1 text-white">
    <v-btn class="pl-0 text-body-1 text-capitalize" v-bind="{
        variant: 'text',
        relationship: props.relationship}">
      <v-icon class="mr-2">
        mdi-account-multiple
      </v-icon>
      {{props.relationship}}
    </v-btn>
  </v-card-text>
  <v-card-text class="py-0  text-white">
    <v-icon class="mr-2">
      mdi-github
    </v-icon>
    <v-btn class="text-capitalize pl-0 text-body-1" v-bind="{
        variant:'text',
        gitHub: props.gitHub ,
        href: props.gitHub,
        }">
      GitHub
    </v-btn>
  </v-card-text>
  <v-card-text class="pb-5 pt-0 text-white">
    <v-icon class="mr-2">
      mdi-linkedin
    </v-icon>
    <v-btn class="text-capitalize text-body-1 pl-0" v-bind="{
        variant:'text',
        linkedIn: props.linkedIn,
        href:props.linkedIn,
      }">
      LinkedIn
    </v-btn>
  </v-card-text>
</template>

<script setup>
const props = defineProps({
  firstName: String,
  lastName: String,
  position: String,
  email: String,
  phoneNumber: String,
  address: String,
  birthday: String,
  gender: String,
  relationship: String,
  gitHub: String,
  linkedIn: String
})
</script>