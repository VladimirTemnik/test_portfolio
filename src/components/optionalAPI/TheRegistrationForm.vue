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
        >
          <v-card-title class="text-center text-h6 text-uppercase bg-teal-lighten-2 rounded-lg">
            Registration form
          </v-card-title>
          <v-label></v-label>

          <Field
              class="text-body-1 rounded-lg border-1"
              v-model="registrationData.email"
              v-slot="props"
              v-bind="{
                rules: 'required|email',
                name: 'email'}">
            <v-text-field
                v-model="registrationData.email"
                class="rounded-lg"
                v-bind="{
                  type:'email',
                  label:'Enter your email',
                  errorMessages: props.errors,
                }"
            >
            </v-text-field>
          </Field>

          <Field
              v-model="registrationData.password"
              v-slot="props"
              v-bind="{
                name: 'password',
                rules: 'required|min:8|max:14',
            }"
          >
            <v-text-field
                v-model="registrationData.password"
                class="rounded-lg "
                v-bind="{
                  type: 'password',
                  name:'password',
                  label:'Enter your password',
                  errorMessages: props.errors,
              }"
            >
            </v-text-field>
          </Field>

          <div class="d-flex justify-space-between">
            <v-btn
                class="text-h6 rounded-md bg-teal-lighten-2 "
                v-bind="{
                  type:'submit',
                }"
            >
              Register account
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
      onReset(){
        this.$refs.form.reset()
      },
    },
    data(){
      return {
        form: false,
        registrationData: {
          email: "",
          password: ""
        }
      }
    }
  }

</script>