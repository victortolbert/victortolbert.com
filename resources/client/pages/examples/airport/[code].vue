<template>
  <!-- <h1>Airport {{ $route.params.id }} Layout</h1>
  Airport {{ airport.code }} -->
  <RouterLink :to="`/examples/airport/${$route.params.code}`">
    Home
  </RouterLink>
  <RouterLink :to="`/examples/airport/${$route.params.code}/destinations`">
    Destinations
  </RouterLink>
  <RouterView />
</template>
