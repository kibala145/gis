import Vue from 'vue'
import Vuex from 'vuex'

import layers from './modules/layers'
import mapViewport from './modules/mapViewport'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    layers,
    mapViewport,
  },
  mutations,
  state
})
