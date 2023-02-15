<template>
    <v-avatar v-bind="{size: 200}"
              class="mt-10 border ">
      <v-img src="https://via.placeholder.com/150">
      </v-img>
    </v-avatar>
</template>

<script>
import {mapState} from "vuex";

export default {
  components: {

  },
  data(){
    return {

    }
  },
  computed: {
    ...mapState(["user"]),

  },
  methods: {

  }
}
</script>