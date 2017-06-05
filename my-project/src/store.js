import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) 

export default new Vuex.Store({
  state: {      //状态数据,触发actions
    count: 1
  },
  mutations: {
    Count (state, platform) {
      state.count = platform    //改变state
    }
  },
  actions: {
    setCount ({commit}, platform) {
      commit('Count', platform)
    }
  },
  getters: {
    getCount: (state) => state.count    //对外提供state的值
  }
})