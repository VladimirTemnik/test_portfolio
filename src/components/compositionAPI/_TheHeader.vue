<template>
  <v-card
      class="bg-teal-lighten-2 rounded-lg">
    <v-row>
      <v-col
          cols="12"
          md="4"
          class="d-flex justify-center">
        <comp-the-main-avatar
            v-bind="{
            url: props.url
          }"></comp-the-main-avatar>
      </v-col>
      <v-col
          cols="12"
          md="8">
        <comp-the-main-info-card
            v-bind="{
          firstName: props.firstName,
          lastName: props.lastName,
          position: props.position,
          email: props.email,
          phoneNumber: props.phoneNumber,
          address: props.address,
          birthday: props.birthday,
          gender: props.gender,
          relationship: props.relationship,
          gitHub: props.gitHub,
          linkedIn: props.linkedIn
          }"
        ></comp-the-main-info-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import CompTheMainInfoCard from '@/components/optionalAPI/TheMainInfoCard.vue'
import CompTheMainAvatar from '@/components/optionalAPI/TheMainAvatar.vue'

const props = defineProps({
  url: String,
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