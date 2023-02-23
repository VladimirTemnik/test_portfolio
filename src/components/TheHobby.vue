<template>
  <v-card
  v-bind="{flat:true,color:'transparent'}"
  class="">
    <v-list
    bg-color="transparent">
      <v-list-subheader
          class="text-h6 text-uppercase font-weight-black"
          color="teal-lighten-2">
        Hobby
      </v-list-subheader>
      <v-list-item v-for="item in hobbies"
              class="text-white text-capitalize">
        <template v-slot:prepend>
          <v-icon
          color="teal-lighten-2">
            mdi-square
          </v-icon>
          {{item}}
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>


<script>
import {mapState} from "vuex"

export default {
  props:['hobbies'],
}
</script>