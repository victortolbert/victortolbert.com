<script setup>
const description = 'Some random experiments with UI I do in my free time.'
useSeoMeta({
  title: 'Lab | Victor Tolbert',
  description,
})
</script>

<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Lab" :description="description" />
    <div class="space-y-24">
      <ContentList v-slot="{ list }" path="/lab">
        <ContentQuery
          v-for="item in list"
          :key="item._path"
          v-slot="{ data }"
          :path="item._path"
          find="one"
        >
          <ContentRenderer>
            <ContentRendererMarkdown :value="data" />
          </ContentRenderer>
        </ContentQuery>
      </ContentList>
    </div>
  </main>
</template>
