<template>
<v-app>
  <div>
    <router-view>

    </router-view>
    <template
    v-if="notifications.length">
      <template
      v-for="(item, index) in notifications"
      v-bind:key="index"
      >
<!--        <v-alert
        v-bind="{
          modelValue: !!item,
          type:item.type,
        }">
          {{item.message}}
        </v-alert>-->

<!--        <comp-the-error-alert
        v-bind="{
          item: item,
          modelValue: !!item,
        /*id: index*/
        }"

        }/>-->
      </template>
    </template>
  </div>
</v-app>

</template>

<script>
import CompTheErrorAlert from "@/components/TheErrorAlert.vue";
import {mapState} from "vuex";
export default {
  components:{
    CompTheErrorAlert
  },
  computed:{
    ...mapState(['notifications'])
  },
  methods:{
    onClose(){
      console.log('AAAAAAAAAAAA')
    }
  }
}
</script>