<script setup>
const pokemons = ref([
  'bulbasaur',
  'charmander',
  'squirtle',
  'caterpie',
  'butterfree',
  'pikachu',
  'ninetales',
  'zubat',
])
</script>

<template>
  <article>
    <h2 class="flex justify-center gap-2 items-center">
      v-for key without state
      <UButton size="xl" @click="shuffleArray(pokemons)">
        Shuffle
      </UButton>
    </h2>
    <ul v-auto-animate class="grid grid-cols-4 gap-4 mt-3">
      <li v-for="(pokemon, index) in pokemons" :key="index">
        <PokemonCard :slug="pokemon" />
      </li>
    </ul>
  </article>
</template>
