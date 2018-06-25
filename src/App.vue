<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  data () {
    return {}
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

<style>
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
