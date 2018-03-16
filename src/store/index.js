/**
 * Created by HP on 2018/3/14.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
