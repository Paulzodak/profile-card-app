<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <CardTemplate></CardTemplate>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import CardTemplate from "./components/CardTemplate.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    CardTemplate,
  },
};
</script>

<style>
body {
  background-color: #19a1ad;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
