<template lang="html">
  <el-menu theme="light" class="el-menu-demo" mode="horizontal">
    <router-link to="/"><el-menu-item class="menuku" index="1">DAYINS</el-menu-item></router-link>
    <router-link to="/"><el-menu-item class="menuku" index="2">Home</el-menu-item></router-link>
    <router-link to="/explore"><el-menu-item class="menuku" index="2">Explore</el-menu-item></router-link>
    <!-- <el-menu-item index="6">
    <el-input
      placeholder="Search"
      icon="search">
    </el-input>
    </el-menu-item> -->
    <el-menu-item @click="logout()"  class="menuku" style="float: right;" index="6">Logout</el-menu-item>
    <el-menu-item class="menuku" style="float: right;" index="6">Profile</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  methods:{
    logout() {
      window.localStorage.clear()
      window.location.reload()
    }
  }
}
</script>

<style lang="css" scoped>
  .el-menu {
    background-color: ghostwhite;
    color: red;
  }
  .menuku {
    color: red;
  }
</style>
