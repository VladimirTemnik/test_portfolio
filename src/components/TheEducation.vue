<template>
<v-card
v-bind="{flat:true}">
  <v-list>
    <v-list-subheader
        class="text-h6 text-uppercase bg-teal-lighten-2 rounded-lg font-weight-black "
    >
      Education
    </v-list-subheader>
    <v-list-item v-for="education in user.education">
      <v-list-item>
        <v-row>
          <v-col>
            <p class="font-weight-black">{{education.degree}}</p>
          </v-col>
          <v-col class="d-flex justify-end">
            <p class="font-weight-black">{{education.period}}</p>
          </v-col>
        </v-row>
      </v-list-item>
      <v-list-item>
        {{education.university}},{{education.city}}
      </v-list-item>
      <v-list-item>
        {{education.speciality}}
      </v-list-item>
    </v-list-item>
  </v-list>

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