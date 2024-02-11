<script setup>
defineProps({
  plantId: {
    type: Number,
    default: null,
  },
})

const isFavorite = ref(false)
</script>

<template>
  <nav class="navbar">
    <NuxtLink to="/" class="brand">
      <PlantLogo />
      <span class="brand-text">Catopia!</span>
    </NuxtLink>
  </nav>
</template>

<style>
.navbar {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  color: var(--ds-color-white);
  background-color: var(--ds-color-black);
  height: 4.5rem;
}
.brand {
  display: flex;
  align-items: center;
  color: var(----ds-color-white);
}

.brand-text {
  font-size: 1.3125rem;
  font-weight: 900;
  margin-left: 0.5rem;
}
</style>
