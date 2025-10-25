<template>
    <div>
      <h1>Dashboard</h1>
      <RouterLink :to="{ name: '/computadora/' }">Ir a Computadoras</RouterLink>
      <RouterLink :to="{ name: '/computadora/[id]', params: { id: 10 } }">Ver Computadora 10</RouterLink>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  h1 {
    font-weight: bold;
    color: #333;
  }
  </style>
  