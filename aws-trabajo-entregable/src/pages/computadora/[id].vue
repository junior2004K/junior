<template>
    <div>
      <h1>Computadora número {{ route.params.id }}</h1>
      <RouterLink :to="{ name: '/' }">Ir al Dashboard</RouterLink>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  </script>
  
  <style scoped>

  </style>
  