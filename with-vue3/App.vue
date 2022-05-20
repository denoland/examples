<template>
  <div id="app">
    <header class="header">
      <img
        class="logo"
        src="https://svgshare.com/i/SNz.svg"
        alt="logo"
        v-on:click="handelClick('home')"
      />
      <nav class="inner">
        <button v-on:click="handelClick('home')">Home</button>
        <button v-on:click="handelClick('vue')">About Vue</button>
        <button v-on:click="handelClick('deno')">About Deno</button>
        <button v-on:click="handelClick('travel')">Travel</button>
        <button v-on:click="handelClick('lighthouse')">Lighthouse</button>
        <a
          class="github"
          href="https://github.com/oslabs-beta/vno"
          target="_blank"
          ><button>Github</button>
        </a>
      </nav>
    </header>
    <body v-if="displayedComponent === 'home'">
      <Home />
    </body>
    <body v-else-if="displayedComponent === 'lighthouse'">
      <Lighthouse />
    </body>
    <body v-else-if="displayedComponent === 'travel'">
      <Travel />
    </body>
    <body v-else-if="displayedComponent === 'vue'">
      <VueJs />
    </body>
    <body v-else-if="displayedComponent === 'deno'">
      <Deno />
    </body>
    <body v-else>
      <h1>Welcome to Your vno Project</h1>
    </body>
  </div>
</template>

<script>
import _ from "https://cdn.skypack.dev/lodash";
// import Travel from './components/Travel';
// import Lighthouse from './components/Lighthouse';
// import Deno from './components/Deno';
// import VueJs from './components/VueJs';
// import Home from './components/Home';
const Home = "Home";
const Deno = "Deno";
const Travel = "Travel";
const VueJs = "VueJs";
const Lighthouse = "Lighthouse";


export default {
  name: 'app',
  data() {
    return {
      displayedComponent: 'home',
    };
  },
  methods: {
    handelClick: function (event) {
      this.displayedComponent = event;
      console.log(this.displayedComponent);
    },
  },
  components: {
    Home,
    Deno,

    Travel,
    Lighthouse,
    VueJs,
  },
};

</script>

<style>
body {
  background-color: #34495e;
}
.header {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #34495e;
  color: aliceblue;
  padding-bottom: 10px;
  padding-top: 20px;
  align-content: space-around;
}
.logo {
  padding: 20px;
}
.inner {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
button {
  color: #34495e;
  background-color: #57d3af;
  padding: 5px;
  text-size-adjust: auto;
  border-radius: 15px;
  margin: 10px;
}
</style>
