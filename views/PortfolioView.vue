<template>
  <v-container>
    <v-row>
      <v-col>
        <v-row>
          <v-col>
            <comp-portfolio></comp-portfolio>
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
              <comp-the-skills></comp-the-skills>
              <comp-the-languages></comp-the-languages>
              <comp-the-hobby></comp-the-hobby>
            </v-card>
          </v-col>
          <v-col
          cols="12"
           md="8"
          >
            <comp-the-education></comp-the-education>
            <comp-the-experience></comp-the-experience>
            <comp-the-achievements></comp-the-achievements>
            <comp-the-profile></comp-the-profile>
            <comp-the-courses></comp-the-courses>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import compTheCourses from '@/components/TheCourses.vue'
import compTheProfile from '@/components/TheProfile.vue'
import compTheAchievements from '@/components/TheAchievements.vue'
import compPortfolio from '@/components/Portfolio.vue'
import compTheSkills from '@/components/TheSkills.vue'
import compTheLanguages from '@/components/TheLanguages.vue'
import compTheHobby from '@/components/TheHobby.vue'
import compTheEducation from '@/components/TheEducation.vue'
import compTheExperience from '@/components/TheExperience.vue'
export default {
  components: {
    compTheCourses,
    compTheProfile,
    compTheAchievements,
    compTheExperience,
    compTheEducation,
    compTheHobby,
    compTheLanguages,
    compTheSkills,
    compPortfolio,
  }
}
</script>