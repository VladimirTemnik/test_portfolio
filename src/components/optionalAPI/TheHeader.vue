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
            url: url
          }"></comp-the-main-avatar>
        </v-col>
        <v-col
        cols="12"
        md="8">
          <comp-the-main-info-card
          v-bind="{
          firstName: firstName,
          lastName: lastName,
          position: position,
          email: email,
          phoneNumber: phoneNumber,
          address: address,
          birthday: birthday,
          gender: gender,
          relationship: relationship,
          gitHub: gitHub,
          linkedIn: linkedIn
          }"
          ></comp-the-main-info-card>
        </v-col>
      </v-row>
    </v-card>
</template>

<script>
import compTheMainInfoCard from '@/components/optionalAPI/TheMainInfoCard.vue'
import compTheMainAvatar from '@/components/optionalAPI/TheMainAvatar.vue'


export default {
  props:['url', 'firstName', 'lastName', 'position', 'email', 'phoneNumber', 'address', 'birthday', 'gender', 'relationship', 'gitHub', 'linkedIn'],
  components: {
    compTheMainAvatar,
    compTheMainInfoCard,
  },
}
</script>
