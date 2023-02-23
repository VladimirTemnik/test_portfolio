<template>
    <v-card-title class="pt-10 text-h5  text-md-h3 text-white text-uppercase font-weight-black"
    v-bind="{
      firstName: firstName,
      lastName: lastName
    }"
    >{{firstName}} {{lastName}}</v-card-title>
    <v-card-text class="py-6 text-h5 text-white"
    v-bind="{
      position: position
    }"
    >{{position}}</v-card-text>
    <v-card-text class="py-0 text-white">
      <v-btn class="text-lowercase text-body-1 pl-0" v-bind="{
        variant:'text',
        email: email,
        href:`mailto:${email}`}">
        <v-icon class="mr-2">
          mdi-email-outline
        </v-icon>
        {{email}}
      </v-btn>
    </v-card-text>
    <v-card-text class="py-0 text-white">
      <v-btn class="pl-0 text-body-1" v-bind="{
        variant: 'text',
        phoneNumber: phoneNumber,
        href:`tel:${phoneNumber}`}">
        <v-icon class="mr-2">
          mdi-phone
        </v-icon>
        {{phoneNumber}}
      </v-btn>
    </v-card-text>
    <v-card-text class="py-0 text-body-1 text-white">
      <v-btn class="pl-0 text-body-1" v-bind="{
        variant: 'text',
        address: address}">
        <v-icon class="mr-2">
          mdi-home
        </v-icon>
        {{address}}
      </v-btn>
    </v-card-text>
    <v-card-text class="py-0 text-body-1 text-white">
      <v-btn class="pl-0 text-body-1" v-bind="{
        variant: 'text',
        birthday: birthday}">
        <v-icon class="mr-2">
          mdi-calendar-month
        </v-icon>
        {{birthday}}
      </v-btn>
    </v-card-text>
    <v-card-text class="py-0 text-body-1 text-white">
      <v-btn class="pl-0 text-body-1 text-capitalize" v-bind="{
        variant: 'text',
        gender:gender}">
        <v-icon class="mr-2">
          mdi-gender-male-female
        </v-icon>
        {{gender}}
      </v-btn>
    </v-card-text>
    <v-card-text class="py-0 text-body-1 text-white">
      <v-btn class="pl-0 text-body-1 text-capitalize" v-bind="{
        variant: 'text',
        relationship: relationship}">
        <v-icon class="mr-2">
          mdi-account-multiple
        </v-icon>
        {{relationship}}
      </v-btn>
    </v-card-text>
    <v-card-text class="py-0  text-white">
      <v-icon class="mr-2">
        mdi-github
      </v-icon>
      <v-btn class="text-capitalize pl-0 text-body-1" v-bind="{
        variant:'text',
        gitHub: gitHub ,
        href: gitHub,
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
        linkedIn: linkedIn,
        href:linkedIn,
      }">
        LinkedIn
      </v-btn>
    </v-card-text>
</template>

<script>
export default {
  props:['firstName', 'lastName', 'position', 'email', 'phoneNumber', 'address', 'birthday', 'gender', 'relationship', 'gitHub', 'linkedIn']
}
</script>