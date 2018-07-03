<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view"/>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import { ToastPlugin } from 'vux'

Vue.use(ToastPlugin)

export default {
  name: 'App',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  computed: mapState({
    title: state => state.title,
    token: state => state.token
  }),
  methods: {
    logout () {
      this.$store.commit('logout')
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  html, body {
    height: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }
</style>
