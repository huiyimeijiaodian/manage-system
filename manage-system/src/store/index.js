import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
// import tagsView from './modules/tagsView'
import userAuth from './modules/userAuth'
// import appConfigNode from './modules/appConfigNode'
import getters from './getters'

Vue.use(Vuex)

let store = new Vuex.Store({
  modules: {
    app,
  //   tagsView,
    userAuth,
  //   appConfigNode
  },
  getters
})

export default store