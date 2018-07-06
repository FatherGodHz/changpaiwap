import axios from 'axios'
import store from '../store/store'
import router from '../router'

axios.defaults.timeout = 5000
axios.defaults.baseURL = 'https://www.wzchangpai.com/'
// axios.defaults.baseURL = 'https://apple.com/'
// 需要增加accessToken刷新
axios.interceptors.request.use(
  config => {
    if (store.state.access_token) {
      config.headers.Authorization = `Bearer ${store.state.access_token}`
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
