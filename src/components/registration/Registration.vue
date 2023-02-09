<template>
  <el-row>
    <el-col :span="12" :offset="6">
      <h2>Sigh up</h2>
      <h3>{{user}}</h3>
    </el-col>
  </el-row>
  <el-row justify="center">
    <el-col :xs="24" :sm="18" :md="12" :lg="8" :xl="6" >
      <el-form :model="formData" label-width="180px" ref="form"  :rules="rules" status-icon size="large" :label-position="size === 'xs' ? 'top' : 'left'">

        <el-form-item label="Name" prop="name">
          <el-input v-model="formData.name" placeholder="Enter your name"></el-input>
        </el-form-item>

        <el-form-item label="Last name" prop="lastName">
          <el-input v-model="formData.lastName" placeholder="Enter your last name"></el-input>
        </el-form-item>

        <el-form-item label="Email" prop="email">
          <el-input v-model="formData.email" placeholder="Enter your email"></el-input>
        </el-form-item>

        <el-form-item label="Password" prop="password" >
          <el-input v-model="formData.password" type="password" show-password placeholder="Enter your password" ></el-input>
        </el-form-item>

        <el-form-item label="Repeat your password" prop="confirmation" >
          <el-input v-model="formData.confirmation" type="password" show-password placeholder="Enter your password" ></el-input>
        </el-form-item>

        <el-row justify="space-between">
          <el-col :span="6" >
            <el-button type="success"  @click="onsubmit()" >
              Submit
            </el-button>
          </el-col>
          <el-col :span="6" >
            <el-button type="warning" @click="resetForm()" >
              Reset
            </el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import rules from '../../rules/rules.js'
import {mapState} from "vuex"

export default {
  inject : ["size"],
  mounted() {
    console.log(this.$store)
  },
  components: {
  },
  data() {
    return {
      formData: {
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmation: ''
      },
      isValid: ""
      /*
            password:yup.string().required('The password is required').matches(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/, 'The password must contain at least 6 characters, 1 uppercase , 1 lowercase, 1 number and 1 special characters '),
          }*/
    }
  },
  computed: {
    ...mapState(["user"]),
    rules() {
      return rules;
    }
  },
  methods: {
    async onsubmit() {
      await this.$refs.form.validate((valid, fields) => {
            console.log(this.$refs.form)
            if (valid) {
              console.log("submit");
              this.$refs.form.resetFields()
            } else {
              console.log("error submit", fields)
            }
          }
      )
    },
    resetForm() {
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
  padding-bottom: 3vh;
}
</style>