<template lang="html">
  <div class="signup">

    <el-row>
      <el-col :span="12" :offset="6">
        <h1>Sign up</h1>
        <div class="form">
          <el-form label-width="120px" class="demo-ruleForm">
            <el-form-item label="Name" prop="name">
              <el-input type="text" auto-complete="off" v-model="name"></el-input>
            </el-form-item>
            <el-form-item label="Email" prop="email">
              <el-input type="text" auto-complete="off" v-model="email"></el-input>
            </el-form-item>
            <el-form-item label="Username" prop="username">
              <el-input type="text" auto-complete="off" v-model="username"></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="pass">
              <el-input type="password" auto-complete="off" v-model="password"></el-input>
            </el-form-item>

            <el-button class="btn-login" type="primary" @click="signUp()" style="float:right;">Sign up</el-button>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return{
      username:'',
      password:'',
      email:'',
      name:''
    }
  },
  methods: {
    signUp() {
      let newUser = {
        username: this.username,
        password: this.password,
        email: this.email,
        name: this.name
      }
      this.$store.dispatch('signUp', newUser)
    }

  },
  computed: {
    statusLogin() {
      return this.$store.getters.statusLogin
    }
  },
  mounted() {
    if(this.statusLogin) {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="css">

</style>
