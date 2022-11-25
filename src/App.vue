<template>
  <el-container id="mainPage">
    <el-main>
      <comp-registration>

      </comp-registration>
    </el-main>
  </el-container>
</template>

<script>
import { computed } from 'vue'
import compRegistration from './components/registration/Registration.vue'

export default {
  components:{
    compRegistration,
  },
  data(){
    return {
      sizes: ""
      //xs < 768, sm >768,md >992, lg >1200, xl >1920
    }
  },
  provide(){
    return {
      sizes: computed(()=>this.sizes)
    }
  },

  mounted() {
    addEventListener("resize", ({currentTarget}) => {
      const {innerWidth} = currentTarget;
      if (innerWidth<=768) {
        this.sizes = "sm"
      }
      if (innerWidth>=992) {
        this.sizes = "md"

      }
        /*case 1200: {
          this.sizes = "lg"
          break
        }
        case 1920: {
          this.sizes = "xl"
          break
        }
        default: {
          this.sizes = "xs"
        }*/

    })
  }
}

</script>

<style scoped>

</style>
