<script setup>
const { data: recipes } = await useFetch('https://api.victortolbert.com/recipes')

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
  </div>
</template>
