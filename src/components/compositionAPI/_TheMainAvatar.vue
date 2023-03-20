<template>
  <v-avatar v-bind="{size: 200}"
            class="mt-10 border ">
    <v-img v-bind="{
        src: props.url
      }">
    </v-img>
  </v-avatar>
</template>

<script setup>
const props =defineProps({
  url: String
})
</script>