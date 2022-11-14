<script>
import { store } from '../store.js';

export default {
  data() {
    return {
      store
    }
  }
}
</script>


<template>
  Name: {{ store.dinosaur.name }}
  <br />
  Description: {{ store.dinosaur.description }}
</template>