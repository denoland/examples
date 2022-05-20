<template>
  <div id="travel">
    <h1>An example Vue Component borrowed from Sarah Drasner</h1>
    <div class="location-contain">
      <div class="locations" v-for="location in locations" :key="location.desc">
        <destinations :location="location">
          <h2>{{ location.name }}</h2>
        </destinations>
      </div>
    </div>
  </div>
</template>

<script>
import Destinations from './Destinations.vue';

export default {
  name: 'travel',
  components: {
    Destinations,
  },
  data() {
    return {
      locations: [
        {
          name: 'moscow',
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/moscow.svg',
          desc: `Moscow is the capital and most populous city of Russia, with 13.2 million residents within the city limits and 17.8 million within the urban area. Moscow has the status of a Russian federal city.`,
        },
        {
          name: 'paris',
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/paris1.svg',
          desc: `Paris is the capital and most populous city of France. By the 17th century, Paris was one of Europe's major centres of finance, commerce, fashion, science, and the arts, and it retains that position still today.`,
        },
        {
          name: 'rome',
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/rome.svg',
          desc: `Rome's history spans more than 2,500 years. While Roman mythology dates the founding of Rome at around 753 BC, the site has been inhabited for much longer, making it one of the oldest continuously occupied sites in Europe.`,
        },
        {
          name: 'barcelona',
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/paris2.svg',
          desc: `The founding of Barcelona is the subject of two different legends. The first attributes the founding of the city to the mythological Hercules. The second legend attributes the foundation of the city to the Carthaginian general, Hamilcar Barca, father of Hannibal, who supposedly named the city Barcino after his family in the 3rd century BC`,
        },
      ],
    };
  },
};
</script>

<style scoped>
body {
  width: 100vw;
  height: 100vh;
  font-family: 'NTR', sans-serif;
  background: #eee;
}

h1 {
  text-align: center;
}

.location-contain {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
}
</style>
