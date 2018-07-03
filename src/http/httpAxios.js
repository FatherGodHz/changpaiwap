import axios from 'axios'
import store from '../store/store'
import router from '../router'

axios.defaults.timeout = 5000
axios.defaults.baseURL = 'https://www.wzchangpai.com/'

axios.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers.Authorization = `Bearer ${store.state.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          store.commit('logout')
          router.currentRoute.path !== 'login' &&
          router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.path}
          })
          break
        case 500:
          router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.path}
          })
          break
      }
    }
    return Promise.reject(error.response.data)
  }
)

export default axios
