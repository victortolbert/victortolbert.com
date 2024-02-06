<script setup>
const route = useRoute()

// const { data } = useAsyncData(`/movies/${route.params.id}`, () => {
//   return $fetch(`http://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`);
// });

// const { data } = await useFetch(
//   `https://www.omdbapi.com/?apikey=285d5ebc&i=${route.params.id}`,
//   {
//     pick: ['Plot', 'Title', 'Poster'],
//     key: `/examples/movies/${route.params.id}`,
//     onResponse({ request, response }) {
//       if (response._data.Error === 'Incorrect IMDb ID.')
//         showError({ statusCode: 404, statusMessage: 'Page Not Found' })
//     },
//   },
// )

const { data, error } = await useFetch(`https://www.omdbapi.com/?apikey=285d5ebc&i=${route.params.id}`, {
  pick: ['Plot', 'Title', 'Poster', 'Error'],
  key: `/examples/movies/${route.params.id}`,
})

if (error.value) {
  // handle accordingly
}

if (data.value.Error === 'Incorrect IMDb ID.')
  showError({ statusCode: 404, statusMessage: 'Page Not Found' })

useHead({
  title: data.value.Title,
  meta: [
    { name: 'description', content: data.value.Plot },
    { property: 'og:description', content: data.value.Plot },
    { property: 'og:image', content: data.value.Poster },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
})
</script>

<template>
  <div>
    <pre>
        {{ data }}
    </pre>
  </div>
</template>
