<template>

</template>

<script>
import {mapState} from "vuex"
import {Field, Form, ErrorMessage} from "vee-validate";

export default {
  computed: {
    ...mapState(["user"]),
  },
  methods: {

  }
}
</script>
