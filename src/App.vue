<template>
  <navbar></navbar>
  <container>
    <router-view />
  </container>
  <footer-component></footer-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Navbar from "./components/Navbar.vue";
import Container from "./components/Container.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    navbar: Navbar,
    container: Container,
    footerComponent: Footer,
  },
});
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  background-color: #242524;
}

#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
