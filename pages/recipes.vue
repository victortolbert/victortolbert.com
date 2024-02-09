<script setup>
import { useQuery } from '@tanstack/vue-query'

const { data: recipes } = await useFetch('https://api.victortolbert.com/recipes')

async function fetcher() {
  return await fetch('https://api.victortolbert.com/recipes').then(response =>
    response.json(),
  )
}

const { data, suspense } = useQuery({ queryKey: ['test'], queryFn: fetcher })

await suspense()

// function addRecipe(recipe) {
//   recipes.value.push(recipe)
// }

// function filterDifficulty(difficulty) {
//   const difficulties = {
//     easy: 'Easy',
//     medium: 'Medium',
//     hard: 'Hard',
//   }
//   return difficulties[difficulty]
// }
</script>

<template>
  <div>
    <h1>Recipes</h1>
    <pre>{{ recipes }}</pre>
    <div>{{ data }}</div>
  </div>
</template>
