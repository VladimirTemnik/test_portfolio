<template>
    <v-avatar v-bind="{size: 200}"
              class="mt-10 border ">
      <v-img v-bind="{
        src: url
      }">
      </v-img>
    </v-avatar>
</template>

<script>
export default {
  props:['url']
}
</script>