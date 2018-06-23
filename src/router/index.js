import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/pages/login'
import List from '@/pages/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
