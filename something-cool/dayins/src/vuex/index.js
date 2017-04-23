import Vue from 'vue'
import Vuex from 'vuex'
import {state,mutations,actions,getters} from './mutation'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})