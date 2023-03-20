<template>
  <v-container>
    <v-row v-if="Object.keys(user).length">
      <v-col>
          <v-row>
            <v-col>
              <comp-the-header
              v-bind="{
                url:user.avatar,
                firstName: user.firstName,
                lastName: user.lastName,
                position: user.position,
                email: user.email,
                phoneNumber: user.phoneNumber,
                address: user.address,
                birthday: user.birthday,
                gender: user.gender,
                relationship: user.relationship,
                gitHub: user.socialNW.github,
                linkedIn: user.socialNW.linkedIn
              }"
              ></comp-the-header>
            </v-col>
          </v-row>
          <v-row>
            <v-col
            cols="12"
            md="4"
            >
              <v-card
              class="bg-grey-darken-3 rounded-lg"
              height="100%">
                <comp-the-skills
                v-bind="{
                  skills: user.skills
                }"
                ></comp-the-skills>
                <comp-the-languages
                v-bind="{
                  languages: user.languages
                }"
                ></comp-the-languages>
                <comp-the-hobby
                v-bind="{
                  hobbies: user.hobbies
                }"
                ></comp-the-hobby>
              </v-card>
            </v-col>
            <v-col
            cols="12"
            md="8"
            >
              <comp-the-education
              v-bind="{
                education: user.education
              }"
              ></comp-the-education>
              <comp-the-experience
              v-bind="{
                experience: user.jobExperience
              }"
              ></comp-the-experience>
              <comp-the-achievements
              v-bind="{
                achievements: user.achievements
              }"
              ></comp-the-achievements>
              <comp-the-profile
              v-bind="{
                profile: user.profile
              }"
              ></comp-the-profile>
              <comp-the-courses
              v-bind="{
                courses: user.courses
              }"
              ></comp-the-courses>
            </v-col>
          </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapState} from "vuex";
import compTheCourses from '@/components/optionalAPI/TheCourses.vue'
import compTheProfile from '@/components/optionalAPI/TheProfile.vue'
import compTheAchievements from '@/components/optionalAPI/TheAchievements.vue'
import compTheHeader from '@/components/optionalAPI/TheHeader.vue'
import compTheSkills from '@/components/optionalAPI/TheSkills.vue'
import compTheLanguages from '@/components/optionalAPI/TheLanguages.vue'
import compTheHobby from '@/components/optionalAPI/TheHobby.vue'
import compTheEducation from '@/components/optionalAPI/TheEducation.vue'
import compTheExperience from '@/components/optionalAPI/TheExperience.vue'
import compTheLoginForm from '@/components/optionalAPI/LogIn/TheLoginForm.vue'
export default {
  components: {
    compTheLoginForm,
    compTheCourses,
    compTheProfile,
    compTheAchievements,
    compTheExperience,
    compTheEducation,
    compTheHobby,
    compTheLanguages,
    compTheSkills,
    compTheHeader,
  },
  computed: {
    ...mapState(["user"]),
  },
  methods:{
    ...mapActions(['getPortfolio'])
  },
  async mounted() {
    await this.getPortfolio()
  }
}
</script>