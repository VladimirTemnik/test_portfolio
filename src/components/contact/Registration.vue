<template>
  <div>
    <Form>
      <div>
        <label for="name">Name</label>
        <br>
        <Field name="name" :rules="validateName" placeholder="Enter your name"/>
        <ErrorMessage name="name" as="div" v-slot="{message}">
          {{message}}
        </ErrorMessage>
      </div>
      <br>
      <div>
        <label for="email">Email</label>
        <br>
        <Field name="email" :rules="validateEmail" placeholder="Enter your email"/>
        <ErrorMessage name="email" as="div" v-slot="{message}">
          {{message}}
        </ErrorMessage>
      </div>
      <br>
      <div>
        <label for="password">Password</label>
        <br>
        <Field name="password" :rules="validatePassword" placeholder="Enter your password"/>
        <ErrorMessage name="password" as="div" v-slot="{message}">
          {{message}}
        </ErrorMessage>
      </div>
      <br>
      <div>
        <Field name="passwordConfirmation" :rules="checkPasswords" placeholder="Repeat your password"/>
        <ErrorMessage name="passwordConfirmation" as="div" v-slot="{message}">
          {{message}}
        </ErrorMessage>
      </div>

      <hr>
      <button @click="submitForm">
        Submit
      </button>

    </Form>
  </div>

</template>

<script>
import {Form, Field, ErrorMessage} from 'vee-validate'

export default {
  components:{
    Field,
    Form,
    ErrorMessage
  },
  data(){
    return {
      name:''
    }
  },
  methods:{
    validateName(value) {
      if (value && value.trim()){
        return true
      }
      return 'The name is required'
    },
    validateEmail(){

    },
    validatePassword(){

    },
    checkPasswords(){

    },
    submitForm() {

    }
  }

}
</script>

<style scoped>


</style>