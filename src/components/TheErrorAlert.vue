<template>
  <v-alert
    v-bind="{
      modelValue,
      location: 'bottom',
      position: 'fixed',
      type: item.type
    }"
  }>
    {{item.message}}
  </v-alert>
</template>

<script>
export default {
  data(){
    return{
      timerId: null
    }
  },
  props:{
    item: {
      type: Object,
      default: {
        type: "error",
        message: 'text text text '
      }
    },
    modelValue: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 3000}
  },
  mounted() {

  },
}
</script>