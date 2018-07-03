import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store'

import Login from '@/pages/login'
import List from '@/pages/List'
import NotFound from '@/pages/NotFound'
import Content from '@/pages/content'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'List',
    meta: {
      requireAuth: true
    },
    component: List
  },
  {
    path: '/content/:id',
    name: 'Content',
    meta: {
      requireAuth: true
    },
    component: Content
  },
  {
    path: '*',
    name: 'notfound',
    component: NotFound
  }
]

if (window.localStorage.getItem('token')) {
  store.commit('login', window.localStorage.getItem('token'))
}

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router
