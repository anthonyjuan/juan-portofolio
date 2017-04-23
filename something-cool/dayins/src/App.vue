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
    this.$store.dispatch('ifLogin')
    if(this.statusLogin) {
      this.$store.dispatch('getPosts')
      this.$router.push('/explore')
    } else {
      this.$router.push('/sitemap')
    }
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
