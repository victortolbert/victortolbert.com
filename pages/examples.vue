<script setup>
// defineOgImage(
//   'https://og-image.vercel.app/**Nuxt**.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fnuxtjs.org%2Flogos%2Fnuxt-square.svg'
// )

defineOgImageComponent('NuxtSeo')
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <ul>
      <li>
        <NuxtLink to="/examples/accounts">
          Accounts
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/examples/swiper">
          Swiper
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/examples/slideover">
          Slideover
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/examples/vue-query">
          Vue Query
        </NuxtLink>
      </li>
    </ul>

    <NuxtPage />
  </div>
</template>

<style>
/* a {
  @apply font-medium hover:underline text-blue-500;
} */
</style>
