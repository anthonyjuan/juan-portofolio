<template lang="html">
  <el-row :gutter="20">
    <el-col v-for="post in posts" :key="post._id" :xs="12" :sm="8" :md="6" :lg="4">
      <el-card :body-style="{ padding: '0px' }">
        <img :src="post.image" class="image">
        <div style="padding: 14px;">
          <span>{{post.caption}}</span>
          <div class="bottom clearfix">
            <time class="time">{{ post.createdAt }}</time>
            <el-dialog title="Detail User" v-model="dialogTableVisible">
              <el-row>
                <el-col :span="12">
                  <div class="ava">
                    <img :src="userDialog.avatar" alt="avatar-user">
                  </div>
                </el-col>
                <el-col :span="12">
                  <p>{{userDialog.username}}</p>
                  <p>Following : {{userDialog.following.length}}</p>
                  <p>Followers : {{userDialog.followers.length}}</p>
                  <el-button class="button" @click="followUser(userDialog.id)">Follow</el-button>
                </el-col>

              </el-row>
            </el-dialog>
            <el-button type="text" class="button" @click="showProfile(post.user)">{{post.user.username}}</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>

</template>

<script>
export default {
  data() {
    return{
      dialogTableVisible: false,
      userDialog: {
        name: '',
        avatar: '',
        following: [],
        followers: []
      }
    }
  },
  methods: {
    showProfile(user) {
      this.userDialog = user
      this.dialogTableVisible = true
    },
    followUser(targetid){
      this.$store.dispatch('followUser',targetid)
    }
  },
  mounted() {
    if(this.statusLogin) {
      this.$store.dispatch('getPosts')
    } else {
      this.$router.push('/sitemap');
    }

  },
  computed: {
    posts() {
      return this.$store.getters.posts
    },
    statusLogin() {
      return this.$store.getters.statusLogin
    }
  }
}
</script>

<style lang="css" scoped>
 .image {
   width: 200px;
 }

 .ava img {
   width: 150px;
   border-radius: 100%;
 }
</style>
