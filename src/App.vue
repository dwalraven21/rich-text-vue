<template>
  <div id="app">
    <FAQs/>
  </div>
</template>

<script>
import FAQs from './components/FAQs.vue'

export default {
  name: 'App',
  components: {
    FAQs
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
