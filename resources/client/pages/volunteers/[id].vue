<template>
  <h1>Volunteer {{ $route.params.id }} Layout</h1>
  <RouterLink :to="`/volunteers/${$route.params.id}`">
    Home
  </RouterLink>
  <RouterLink :to="`/volunteers/${$route.params.id}/settings`">
    Settings
  </RouterLink>
  <RouterView />
</template>
