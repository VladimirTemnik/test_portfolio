<template>

<!--  <template v-if="md">
    <v-card class="bg-teal-lighten-2 rounded-lg"
    >
      <v-row>
        <v-row>
          <v-col
          class="d-flex justify-center">
            <comp-the-main-avatar></comp-the-main-avatar>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{md}}
            <comp-the-main-info-card></comp-the-main-info-card>
          </v-col>
        </v-row>
      </v-row>
    </v-card>
  </template>

  <template v-else>
    <v-card
    class="bg-teal-lighten-2 rounded-lg">
      <v-row>
        <v-col
            cols="4"
            class="d-flex justify-center">
          <comp-the-main-avatar></comp-the-main-avatar>
        </v-col>
        <v-col
            cols="8">
          <comp-the-main-info-card></comp-the-main-info-card>
        </v-col>
      </v-row>
    </v-card>
  </template>-->


    <v-card
        class="bg-teal-lighten-2 rounded-lg">
      <v-row>
        <v-col
            cols="12"
            md="4"
            class="d-flex justify-center">
          <comp-the-main-avatar></comp-the-main-avatar>
        </v-col>
        <v-col
        cols="12"
        md="8">

          <comp-the-main-info-card></comp-the-main-info-card>
        </v-col>
      </v-row>
    </v-card>


</template>

<script>
import {useDisplay} from "vuetify";
import {mapState} from "vuex"
import compTheMainInfoCard from '@/components/TheMainInfoCard.vue'
import compTheMainAvatar from '@/components/TheMainAvatar.vue'


export default {
  components: {
    compTheMainAvatar,
    compTheMainInfoCard,
  },
  data(){
    return {

    }
  },
  computed: {
    ...mapState(["user"]),
    md() {
      const {md} = useDisplay();
      console.log(md)
      return md.value;
    }
  },
  methods: {

  }
}
</script>

<style scoped>


</style>