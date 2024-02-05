<script setup>
const query = ref('batman')
const movies = ref([])

async function search() {
  const { Search } = await $fetch(
    `https://www.omdbapi.com/?apikey=285d5ebc&s=${query.value}`,
  )
  movies.value = Search
}
search()
</script>

<template>
  <div>
    <form @submit.prevent="search">
      <input v-model="query" type="text">
      <button>Search</button>
    </form>

    <ul style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none">
      <li v-for="movie in movies" :key="movie.imdbID">
        <NuxtLink :to="{ name: 'examples-movies-id', params: { id: movie.imdbID } }">
          <img :src="movie.Poster" :alt="movie.title" width="100">
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
