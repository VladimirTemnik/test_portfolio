<template>
  <v-card
      v-bind="{flat:true,color:'transparent'}">
    <v-list
        bg-color="transparent">
      <v-list-subheader
          class="text-h6 text-uppercase font-weight-black"
          color="teal-lighten-2">
        Languages
      </v-list-subheader>
      <v-list-item
          class="text-white text-capitalize "
          v-for="item in props.languages"
      >
        {{item.language}}
        <br>
        <v-progress-linear
            v-bind="{modelValue:`${item.score * 20}`, color:'teal-lighten-2'}">
        </v-progress-linear>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
const props = defineProps({
  languages: []
})
</script>