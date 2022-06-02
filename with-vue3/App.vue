<template>
  <div id="app">
    <header class="header">
      <nav class="inner">
        <button v-on:click="handleClick('home')">Home</button>
        <button v-on:click="handleClick('getting-started')">Getting Started</button>
      </nav>
    </header>
    <body v-if="displayedComponent === 'home'">
      <Home />
    </body>
    <body v-else-if="displayedComponent === 'getting-started'">
      <GettingStarted />
    </body>
    <body v-else>
      <h1>Deno x Vue3</h1>
    </body>
    <Footer />
  </div>
</template>

<script>
import _ from "https://cdn.skypack.dev/lodash";
// import HomePage from "./src/pages/HomePage.vue";
// import GettingStartedPage from "./src/pages/GettingStartedPage.vue";
// import Footer from "./src/components/Footer.vue";
// import NavBar from "./src/components/NavBar.vue";
const Home = "home";
const GettingStarted = "getting-started";
const Footer = "footer";
const NavBar = "navbar";

export default {
  name: 'app',
  data() {
    return {
      displayedComponent: 'home',
    };
  },
  methods: {
    handleClick: function (event) {
      this.displayedComponent = event;
    },
  },
  components: {
    Home,
    GettingStarted,
    Footer,
    NavBar
  },
};

</script>

<style>
</style>