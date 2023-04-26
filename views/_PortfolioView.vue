<template>
  <v-container>
    <v-row v-if="Object.keys(store.user).length">
      <v-col>
        <v-row>
          <v-col>
            <comp-the-header
                v-bind="{
                url:store.user.avatar,
                firstName: store.user.firstName,
                lastName: store.user.lastName,
                position: store.user.position,
                email: store.user.email,
                phoneNumber: store.user.phoneNumber,
                address: store.user.address,
                birthday: store.user.birthday,
                gender: store.user.gender,
                relationship: store.user.relationship,
                gitHub: store.user.socialNW.github,
                linkedIn: store.user.socialNW.linkedIn
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
                  skills: store.user.skills
                }"
              ></comp-the-skills>
              <comp-the-languages
                  v-bind="{
                  languages: store.user.languages
                }"
              ></comp-the-languages>
              <comp-the-hobby
                  v-bind="{
                  hobbies: store.user.hobbies
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
                education: store.user.education
              }"
            ></comp-the-education>
            <comp-the-experience
                v-bind="{
                experience: store.user.jobExperience
              }"
            ></comp-the-experience>
            <comp-the-achievements
                v-bind="{
                achievements: store.user.achievements
              }"
            ></comp-the-achievements>
            <comp-the-profile
                v-bind="{
                profile: store.user.profile
              }"
            ></comp-the-profile>
            <comp-the-courses
                v-bind="{
                courses: store.user.courses
              }"
            ></comp-the-courses>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import CompTheCourses from '@/components/compositionAPI/_TheCourses.vue'
import CompTheProfile from '@/components/compositionAPI/_TheProfile.vue'
import CompTheAchievements from '@/components/compositionAPI/_TheAchievements.vue'
import CompTheHeader from '@/components/compositionAPI/_TheHeader.vue'
import CompTheSkills from '@/components/compositionAPI/_TheSkills.vue'
import CompTheLanguages from '@/components/compositionAPI/_TheLanguages.vue'
import CompTheHobby from '@/components/compositionAPI/_TheHeader.vue'
import CompTheEducation from '@/components/compositionAPI/_TheEducation.vue'
import CompTheExperience from '@/components/compositionAPI/_TheExperience.vue'
import {useStore} from '@/store/store'
import {onMounted} from "vue";


const store = useStore()
onMounted (()=>{
   store.getPortfolio()
})

</script>