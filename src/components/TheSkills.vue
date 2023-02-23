<template>
<v-card
v-bind="{flat:true, color:'transparent'}"
>
  <v-list
      bg-color="transparent">
    <v-list-subheader
        class="text-h6 text-uppercase font-weight-black"
        color="teal-lighten-2">
      Skills
    </v-list-subheader>
    <v-list-item
        class="text-white text-capitalize"
        v-for="item in skills"
    >
      {{item}}
    </v-list-item>
  </v-list>
</v-card>
</template>

<script scoped>
export default {
  props: ['skills']
}
</script>