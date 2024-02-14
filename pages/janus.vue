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
const showWelcomeMat = ref(false)
</script>

<template>
  <article>
    <SldsWelcomeMat v-if="showWelcomeMat" />
    <NuxtPage />
  </article>
</template>
