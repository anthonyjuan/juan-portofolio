<template lang="html">
  <el-row :gutter="20">
    <el-col v-for="post in posts" :key="post._id" :xs="12" :sm="8" :md="6" :lg="4">
      <el-card :body-style="{ padding: '0px' }">
        <img :src="post.image" class="image">
        <div style="padding: 14px;">
          <span>{{post.caption}}</span>
          <div class="bottom clearfix">
            <time class="time">{{ post.createdAt }}</time>
            <el-button type="text" class="button">{{post.user.username}}</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>

</template>

<script>
export default {
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
</style>
