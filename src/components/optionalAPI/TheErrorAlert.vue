<template>
  <v-alert
    v-model="visibility"
    v-bind="{
      modelValue,
      location: 'bottom',
      position: 'fixed',
      type: item.type,
      closable: true
    }"
    v-on:update:modelValue="onClose"
  >
    {{item.message}}
  </v-alert>
</template>

<script>
export default {
  data(){
    return{
      timerId: null,
      visibility: true,

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
      default: 3000},
    id: {
      type: Number,
      required: true
    }
  },
  methods:{
    onClose(){
      console.log(this.visibility)
      this.$emit('close', this.id)
    }
  },
  mounted() {
    this.timerId =  setTimeout(()=>this.$emit('close', this.id), 3000)
  },
  unmounted() {
    clearTimeout(this.timerId)
  }
}
</script>