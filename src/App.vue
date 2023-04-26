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
            <comp-the-error-alert
            v-on:close="onClose"
            v-bind="{
              item: item,
              modelValue: !!item,
              id: index
            }"/>
        </template>
    </template>
  </div>
</v-app>
</template>

<script>
import CompTheErrorAlert from "@/components/optionalAPI/TheErrorAlert.vue";
import {mapActions, mapState} from "vuex";
export default {
  components:{
    CompTheErrorAlert
  },
  computed:{
    ...mapState(['notifications']),
  },
  methods:{
    async onClose(id){
      await this.removeNotification(id)
    },
    ...mapActions(['removeNotification'])
  }
}
</script>