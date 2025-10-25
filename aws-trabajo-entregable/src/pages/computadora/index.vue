<template>
  <div>
    <h1>Computadoras</h1>
    <RouterLink :to="{ name: '/' }">Ir al Dashboard</RouterLink>

    <ul>
      <li v-for="pc in computadoras" :key="pc.id">
        {{ pc.id }} - {{ pc.marca }} {{ pc.modelo }} ({{ pc.estado }})
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';
import { ref } from 'vue';

const computadoras = ref([]);

(async () => {
  const { data, error } = await supabase.from('computadora').select();
  if (error) console.error(error);
  computadoras.value = data;
})();
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 6px 0;
}
</style>
