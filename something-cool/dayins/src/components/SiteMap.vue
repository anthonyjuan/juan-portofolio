<template lang="html">
  <el-dialog
    custom-class="dialog-login"
    title="Welcome to Day-Ins"
    v-model="dialogFormVisible"
    :show-close="false"
    size="tiny">

  <el-form >
    <el-form-item label="Username" :label-width="formLabelWidth">
      <el-input placeholder="Username" auto-complete="off" v-model="username"></el-input>
    </el-form-item>
    <el-form-item label="Password" :label-width="formLabelWidth">
      <el-input placeholder="Password" type="password" auto-complete="off" v-model="password"></el-input>
    </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="login()">Log in</el-button>
    <el-button @click="signup()">or sign up</el-button>
  </span>
</el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: true,
      formLabelWidth: '80px',
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      let user = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('signIn', user)
    },
    signup() {
      this.$router.push('/signup')
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

<style lang="css" scoped>
</style>
