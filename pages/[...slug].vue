<script setup lang="ts">
defineOgImageComponent('NuxtSeo')

// defineOgImageComponent('NuxtSeo', {
// résumé
//   title: 'Hello OG Image 👋',
//   description: 'Look what at me in dark mode',
//   theme: '#ff0000',
//   colorMode: 'dark',
// })

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
  <UContainer>
    <UPage>
      <UPageBody prose>
        <ContentRenderer v-if="page.body" :value="page" />
      </UPageBody>
    </UPage>
  </UContainer>
</template>
