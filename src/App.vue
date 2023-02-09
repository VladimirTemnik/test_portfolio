<template>
<v-app>
  <router-view>

  </router-view>
</v-app>

</template>

<script>
import { computed } from 'vue'
export default {
  components:{

  },
  data(){
    return {
      breakpoint: ""
      //xs < 768, sm >768,md >992, lg >1200, xl >1920
    }
  },
  provide(){
    return {
      size: computed(()=>this.breakpoint)
    }
  },
  mounted() {
    addEventListener("resize", ({currentTarget}) => {
      const {innerWidth} = currentTarget;
      if (innerWidth <= 768) {
        this.breakpoint = "xs"
      }
      if (innerWidth >=768 && innerWidth <= 992) {
        this.breakpoint = "sm"
      }
      if (innerWidth >= 992 && innerWidth <= 1200) {
        this.breakpoint = "md"
      }
      if (innerWidth >= 1200 && innerWidth <= 1920) {
        this.breakpoint = "lg"
      }
      if (innerWidth >= 1920) {
        this.breakpoint = "xl"
      }
    })
  }
}
</script>

<style scoped>
</style>