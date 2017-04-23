<template lang="html">
  <el-menu theme="light" class="el-menu-demo" mode="horizontal">
    <router-link to="/home"><el-menu-item class="menuku" index="1">DAYINS</el-menu-item></router-link>
    <router-link to="/home"><el-menu-item class="menuku" index="2">Home</el-menu-item></router-link>
    <router-link to="/explore"><el-menu-item class="menuku" index="2">Explore</el-menu-item></router-link>
    <!-- <el-menu-item index="6">
    <el-input
      placeholder="Search"
      icon="search">
    </el-input>
    </el-menu-item> -->
    <el-menu-item @click="logout()"  class="menuku" style="float: right;" index="6">Logout</el-menu-item>
    <el-popover
      ref="popover4"
      placement="right"
      width="400"
      trigger="click">
      <el-row>
        <el-col :span="12">
          <div class="ava">
            <img :src="user.avatar" alt="avatar-user">
          </div>
        </el-col>
        <el-col :span="12">
          <p>{{user.username}}</p>
          <p>Following : {{user.following.length}}</p>
          <p>Followers : {{user.followers.length}}</p>
        </el-col>

      </el-row>
    </el-popover>
    <el-menu-item class="menuku" style="float: right;" index="6" v-popover:popover4>Profile</el-menu-item>

  </el-menu>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      user: {
        name: '',
        avatar: '',
        following: [],
        followers: []}
    }
  },
  methods:{
    logout() {
      window.localStorage.clear()
      window.location.reload()
    },
    getUser() {
      let self = this
      let id = window.localStorage.id
      axios.get(`http://localhost:3000/api/user/${id}`,
                {headers: {'token': window.localStorage.getItem('token')}})
           .then(function(res) {
             if(res.data.success){
               self.user = res.data.result
             }
           })
    }
  },
  mounted() {
    this.getUser()
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

  .ava img {
    width: 150px;
    border-radius: 100%;
  }
</style>
