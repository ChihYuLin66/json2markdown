<template>
  <img alt="Vue logo" src="./assets/logo.png" style="width:100px;">
  <Json />
  <Markdown />
  <Table />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import Json from "./components/Json.vue";
import Markdown from "./components/Markdown.vue";
import Table from "./components/Table.vue";

export default {
  name: 'App',
  components: {
    Json,
    Markdown,
    Table
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
