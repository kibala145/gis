import Vue from 'vue'
import Vuex from 'vuex'

import mapData from './modules/mapData'
import mapViewport from './modules/mapViewport'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mapData,
    mapViewport,
  },
  mutations,
  state
})
