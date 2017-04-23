import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import SiteMap from '@/components/SiteMap'
import Explore from '@/components/Explore'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sitemap',
      name: 'SiteMap',
      component: SiteMap
    },
    {
      path: '/explore',
      name: 'Explore',
      component: Explore
    }
  ]
})
