<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Container>123abc</Container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Container from "./components/container";

@Component({
  components: {
    Container
  }
})
export default class App extends Vue {}
</script>

<style>
/* 引入全局样式 */
@import url("./styles/common.scss");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
