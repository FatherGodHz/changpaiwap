import Vue from 'vue'
import axios from './http/httpAxios'
import store from './store/store'
import router from './router'
import App from './App.vue'

Vue.prototype.axios = axios

new Vue({
  el: '#app',
  axios,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
