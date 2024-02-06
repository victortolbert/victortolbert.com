<script setup>
definePageMeta({
  layout: 'salesforce',
  title: 'Salesforce',
  description: 'The Salesforce Lightning Design System (SLDS) is a UI framework for building high-performance applications on the Salesforce platform.',
  breadcrumb: {
    title: 'Salesforce',
    ariaLabel: 'Salesforce',
    hideCurrent: true,
  },
})
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
    },
    {
      rel: 'stylesheet',
      href: '/assets/styles/salesforce-lightning-design-system.css',
    },
  ],
})
</script>

<template>
  <article>
    <NuxtPage />
  </article>
</template>
