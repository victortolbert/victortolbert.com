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
    label: 'Auto Animate',
    icon: 'i-heroicons-command-line',
    to: '/examples/auto-animate',
  },
  {
    label: 'Class API',
    icon: 'i-heroicons-command-line',
    to: '/examples/class-api',
  },
  // {
  //   label: 'Composition API',
  //   icon: 'i-heroicons-command-line',
  //   to: '/examples/composition-api',
  // },
  {
    label: 'Dynamic Forms',
    icon: 'i-heroicons-command-line',
    to: '/examples/dynamic-forms',
  },
  {
    label: 'Fetching',
    icon: 'i-heroicons-command-line',
    to: '/examples/fetching',
  },
  {
    label: 'Gmail Clone',
    icon: 'i-heroicons-command-line',
    to: '/examples/gmail-clone',
  },
  {
    label: 'GSAP',
    icon: 'i-heroicons-command-line',
    to: '/examples/gsap',
  },
  {
    label: 'Staggering Lists',
    icon: 'i-heroicons-command-line',
    to: '/examples/staggering-lists',
  },
  {
    label: 'Transition Component',
    icon: 'i-heroicons-command-line',
    to: '/examples/transition-component',
  },
  {
    label: 'Transition Group',
    icon: 'i-heroicons-command-line',
    to: '/examples/transition-group',
  },
  {
    label: 'V Auto Animate',
    icon: 'i-heroicons-command-line',
    to: '/examples/v-auto-animate',
  },
  {
    label: 'Vue Promised',
    icon: 'i-heroicons-command-line',
    to: '/examples/vue-promised',
  },
  {
    label: 'Vuelidate options',
    icon: 'i-heroicons-command-line',
    to: '/examples/vuelidate-options',
  },
  {
    label: 'VueUse Motion',
    icon: 'i-heroicons-command-line',
    to: '/examples/vueuse-motion',
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
