<template>
  <div id="app">
    <router-view v-title="metaTitle" />
  </div>
</template>

<script>
// import FAQs from './components/FAQs.vue'

export default {
  name: 'App',
  data() {
        return {
            metaTitle:
              "How to add Rich Text to Your Vue App",
        }
    },
    methods: {
        setTitle() {
            this.metaTitle = this.$route.meta.title
        }
    },
    watch: {
        $route: "setTitle"
    },
    mounted() {
        this.setTitle()
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
