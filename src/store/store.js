import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    access_token: null,
    access_token_expired_at: null,
    title: ''
  },
  mutations: {
    'login': (state, data) => {
      localStorage.access_token = state.access_token = data.access_token
      localStorage.access_token_expired_at = state.access_token_expired_at = new Date().getTime() + data.expires_in * 1000
    },
    'logout': (state) => {
      localStorage.removeItem('access_token')
      localStorage.removeItem('access_token_expired_at')
      state.access_token = null
    },
    'title': (state, data) => {
      state.title = data
    }
  }
})
