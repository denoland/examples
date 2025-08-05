<script setup lang="ts">
const { data: dinosaurs } = await useFetch("/api/dinosaurs");
</script>

<template>
  <main>
    <h1 class="text-2xl font-bold mb-4">Welcome to the Dinosaur app</h1>
    <p class="mb-4">Click on a dinosaur below to learn more.</p>
      
        <NuxtLink v-for="dinosaur in dinosaurs" :key="dinosaur.name"
          :to="'/' + dinosaur.name.toLowerCase()"
          class="btn-primary"
        >
          {{ dinosaur.name }}
        </NuxtLink>
      
  </main>
</template>
