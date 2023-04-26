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
import {ref, defineProps, defineEmits} from 'vue'

const timerId = ref(null)
const visibility = ref(true)
const emit = defineEmits( ['close'])
const props = defineProps({
  item: {
    type: Object,
    default : {
      type: "error",
      message : "text text text"
    }
  },
  modelValue: {
    type: Boolean,
    default: true
  },
  duration: {
    type: Number,
    default: 3000
  },
  id: {
    type: Number,
    required: true
  }
})
const onClose = function () {
  emit('close', props.id)

}

</script>