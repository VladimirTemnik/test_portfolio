<template>
  <v-row
      class="d-flex justify-center">
    <v-col
        class="my-auto"
        v-bind="{
    cols:'8'
  }">
      <v-card
          class="mx-auto px-6 py-8 mt-16"
      >
        <v-form
            v-model="form"
            v-on="{
      submit:(event)=>onSubmit(event, loginData)
    }"
        >
          <v-card-title class="text-center text-h6 text-uppercase bg-teal-lighten-2 rounded-lg">
            Sign in
          </v-card-title>
          <v-label></v-label>

          <Field
              class="text-body-1 rounded-lg border-1"
              v-model="loginData.email"
              v-slot="props"
              v-bind="{
        rules: 'required|email',
        name: 'email'}">
            <v-text-field
                v-model="loginData.email"
                class="rounded-lg"
                v-bind="{
        type:'email',
        label:'Enter your email',
        errorMessages: props.errors,
      }">
            </v-text-field>
          </Field>

          <Field
              v-model="loginData.password"
              v-slot="props"
              v-bind="{
        name: 'password',
        rules: 'required|min:8|max:14',
    }">
            <v-text-field
                v-model="loginData.password"
                class="rounded-lg "
                v-bind="{
          type: 'password',
          name:'password',
          label:'Enter your password',
          errorMessages: props.errors,
      }">
            </v-text-field>
          </Field>

          <div class="d-flex justify-space-between">
            <v-btn
                class="text-h6 rounded-md bg-teal-lighten-2 "
                v-bind="{
      type:'submit',
      }">
              Sign in
            </v-btn>
            <v-btn
                class="text-h6 rounded-md bg-grey-darken-1"
            >
              Reset
            </v-btn>
          </div>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import {Field, Form, ErrorMessage} from "vee-validate";
import {useStore} from '@/store/store'
import {useRouter} from "vue-router"
import {ref, defineEmits} from 'vue'

const store = useStore()
const form  =ref(false)
const router = useRouter()
const emit = defineEmits(['successSubmit'])

const loginData = {
  email: "cocacola@gmail.com",
  password: '1234qwer'
}
const onSubmit = async function(event, data) {
  event.preventDefault();
  console.log(this.$router);
  await store.login(data);
  emit("successSubmit")
  await router.push('/')
}

</script>