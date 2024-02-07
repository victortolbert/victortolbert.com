<script setup lang="ts">
defineOgImageComponent('NuxtSeo')

// defineOgImageComponent('NuxtSeo', {
// résumé
//   title: 'Hello OG Image 👋',
//   description: 'Look what at me in dark mode',
//   theme: '#ff0000',
//   colorMode: 'dark',
// })

definePageMeta({
  // title: 'Resume',
  // breadcrumb: 'Resume',
  // breadcrumb: {
  //   icon: 'i-ph-house',
  //   ariaLabel: 'Home',
  // },
})

const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true,
  })
}
</script>

<template>
  <div>
    <UContainer>
      <Breadcrumbs />
      <UPage>
        <UPageBody :ui="{ prose: 'prose prose-primary dark:prose-pre:bg-red-500 dark:prose-invert max-w-none' }">
          <ContentRenderer v-if="page.body" :value="page" />
        </UPageBody>
      </UPage>
    </UContainer>
  </div>
</template>
