<template>
  <v-container>
    <v-row>
      <v-col>
        <comp-portfolio></comp-portfolio>
        <comp-the-skills></comp-the-skills>
        <comp-the-languages></comp-the-languages>
        <comp-the-hobby></comp-the-hobby>
        <comp-the-education></comp-the-education>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import compPortfolio from '@/components/Portfolio.vue'
import compTheSkills from '@/components/TheSkills.vue'
import compTheLanguages from '@/components/TheLanguages.vue'
import compTheHobby from '@/components/TheHobby.vue'
import compTheEducation from '@/components/TheEducation.vue'
export default {
  components: {
    compTheEducation,
    compTheHobby,
    compTheLanguages,
    compTheSkills,
    compPortfolio,
  }
}
</script>