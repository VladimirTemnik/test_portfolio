<template>
  <v-container>
    <v-row>
      <v-col>
        <comp-portfolio></comp-portfolio>
        <comp-the-skills></comp-the-skills>
        <comp-the-languages></comp-the-languages>
        <comp-the-hobby></comp-the-hobby>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import compPortfolio from '@/components/Portfolio.vue'
import compTheSkills from '@/components/TheSkills.vue'
import compTheLanguages from '@/components/TheLanguages.vue'
import compTheHobby from '@/components/TheHobby.vue'
export default {
  components: {
    compTheHobby,
    compTheLanguages,
    compTheSkills,
    compPortfolio,
  }
}
</script>