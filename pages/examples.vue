<script setup>
// defineOgImage(
//   'https://og-image.vercel.app/**Nuxt**.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fnuxtjs.org%2Flogos%2Fnuxt-square.svg'
// )

defineOgImageComponent('NuxtSeo')
// <ul class="mt-1.5">
//   <li>
//     <NuxtLink to="/examples/accounts">
//       Accounts
//     </NuxtLink>
//   </li>
//   <li>
//     <NuxtLink to="/examples/swiper">
//       Swiper
//     </NuxtLink>
//   </li>
//   <li>
//     <NuxtLink to="/examples/slideover">
//       Slideover
//     </NuxtLink>
//   </li>
//   <li>
//     <NuxtLink to="/examples/vue-query">
//       Vue Query
//     </NuxtLink>
//   </li>
// </ul>

const links = [
  {
    label: 'Gmail Clone',
    icon: 'i-heroicons-command-line',
    to: '/examples/gmail-clone',
  },
  {
    label: 'Dynamic Forms',
    icon: 'i-heroicons-command-line',
    to: '/examples/forms/dynamic-forms',
  },
  {
    label: 'Vuelidate options',
    icon: 'i-heroicons-command-line',
    to: '/examples/forms/vuelidate-options',
  },
  {
    label: 'Fetching',
    icon: 'i-heroicons-command-line',
    to: '/examples/data-fetching/fetching',
  },
  {
    label: 'Vue Promised',
    icon: 'i-heroicons-command-line',
    to: '/examples/data-fetching/vue-promised',
  },
  {
    label: 'Auto Animate',
    icon: 'i-heroicons-command-line',
    to: '/examples/motion/auto-animate',
  },
  {
    label: 'V Auto Animate',
    icon: 'i-heroicons-command-line',
    to: '/examples/motion/v-auto-animate',
  },
  {
    label: 'GSAP',
    icon: 'i-heroicons-command-line',
    to: '/examples/motion/gsap',
  },
  {
    label: 'Staggering Lists',
    icon: 'i-heroicons-command-line',
    to: '/examples/motion/staggering-lists',
  },
  {
    label: 'Transition Component',
    icon: 'i-heroicons-command-line',
    to: '/examples/motion/transition-component',
  },
  {
    label: 'Transition Group',
    icon: 'i-heroicons-command-line',
    to: '/examples/motion/transition-group',
  },
  {
    label: 'VueUse Motion',
    icon: 'i-heroicons-command-line',
    to: '/examples/motion/vueuse-motion',
  },

]
</script>

<template>
  <article class="mt-8">
    <UContainer>
      <Breadcrumbs />
      <div class="grid grid-cols-12 gap-8">
        <aside class="col-span-3 border rounded dark:border-gray-800">
          <UVerticalNavigation :links="links" />
        </aside>

        <section class="col-span-9">
          <NuxtPage />
        </section>
      </div>
    </UContainer>
  </article>
</template>

<style>
/* a {
  @apply font-medium hover:underline text-blue-500;
} */
</style>
