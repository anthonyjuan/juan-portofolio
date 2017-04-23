<template>
  <div id="app">
    <app-nav v-if="statusLogin"></app-nav>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
import AppNav from './components/AppNav'

export default {
  components: {
    AppNav
  },
  name: 'app',
  computed: {
    statusLogin() {
      return this.$store.getters.statusLogin
    }
  },
  mounted() {
    if(!this.statusLogin) {
      this.$router.push('/sitemap')
    }
    this.$store.dispatch('ifLogin')
    this.$store.dispatch('getPosts')
    this.$store.dispatch('getFollowingPosts')

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
