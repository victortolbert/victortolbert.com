<script setup>
definePageMeta({
  title: 'UX Lab',
  description: 'UX Lab',
  image: 'https://nuxtjs.org/nuxt-card.png',
  url: 'https://victortolbert/lab',
})
</script>

<template>
  <div>
    <header>
      <h1>Lab</h1>
      <ul>
        <li>
          <NuxtLink to="/lab/tokens">
            Design Tokens
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/lab/elements">
            Elements
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/lab/patterns">
            Patterns
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/lab/templates">
            Templates
          </NuxtLink>
        </li>
      </ul>
    </header>

    <NuxtPage />
  </div>
</template>
