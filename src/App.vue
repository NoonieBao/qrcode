<template>
  <div id="app">
    <Qr />
  </div>
</template>

<script>
import Qr from './components/Qr.vue'

export default {
  name: 'App',
  components: {
    Qr
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
