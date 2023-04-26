<template>
  <v-row
  class="d-flex justify-center">
    <v-col
        class="my-auto"
        v-bind="{
          cols:'8'
        }"
    >
      <v-card
          class="mx-auto px-6 py-8 mt-16"
      >
        <v-form
          ref="form"
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
            v-on:click="onReset"
            >
              Reset
            </v-btn>
          </div>
        </v-form>
        <v-btn
            v-bind="{
              variant: 'text',
              block: true,
              elevation: 2,
              color: 'deep-purple-darken-1'
            }"
            class="text-body-1 mt-4"
            v-on:click="onRegister"
        >
          Register new account
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {useRouter} from "vue-router"
import {mapActions} from "vuex"
import {Field, Form, ErrorMessage} from "vee-validate";

export default {
  components:{
    Field,
    Form,
    ErrorMessage
  },
  methods: {
    async onSubmit(event, data){
      event.preventDefault();
      await this.login(data)
      this.$emit('successSubmit')
      await this.$router.push('/')
    },
    onReset(){
      this.$refs.form.reset()
    },
    onRegister(){
      this.$router.push('/registration')
},
    ...mapActions(['login'])
  },
  data(){
    return {
      form: false,
      loginData: {
        email: "colsl@gmail.com",
        password: "1234qwer!"
      }
    }
  }
}
</script>
