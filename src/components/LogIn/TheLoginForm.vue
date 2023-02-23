<template>
  <v-card class="mx-auto px-6 py-8">
    <v-form
      v-model="form"
      v-on="onsubmit(submit)"
    >
      <v-card-title>
        Sign in
      </v-card-title>
      <v-label></v-label>

      <v-text-field
      v-model="loginData.email"
      v-bind="{
        rules:{
          email:true,
          required:true
        },
        label:'Enter your email',
        clearable:true,
    }">
      </v-text-field>
      <v-text-field
          v-model="loginData.password"
      v-bind="{
        type: 'password',
        rules:{
          min:8,
          max:14,
          required:true
        },
        label: 'Enter your password'
      }">
      </v-text-field>
      <div class=" flex justify-space-between">
        <v-btn
            v-bind="{
        type:'submit',
      }">
          Sign in
        </v-btn>
        <v-btn>
          reset
        </v-btn>
      </div>
    </v-form>

  </v-card>
</template>

<script>
import {mapState} from "vuex"
import {Field, Form, ErrorMessage, defineRule} from "vee-validate";
import {min, max, required, email} from "@vee-validate/rules";

defineRule('required', required);
defineRule('min', min);
defineRule('max', max);
defineRule('email', email);

export default {
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    submit(){
      console.log(this.loginData)
    }
  },
  data(){
    return {
      form: false,
      loginData: {
        email: "",
        password: ""
      }
    }
  },
}
</script>
