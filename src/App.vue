<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <button @click="changeMsg">点击改变msg</button>
    <p> 我是App.vue中的p， gettersMsg 的值是----- {{gettersMsg}}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  computed: {...mapGetters(['gettersMsg'])},
  methods: {...mapActions(['changeMsg'])}
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
