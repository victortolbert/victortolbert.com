<script setup>
const description = 'Some random experiments'

useSeoMeta({
  title: 'UX Lab - Victor Tolbert',
  description,
})
</script>

<template>
  <article>
    <!-- <AppHeader class="mb-12" title="UX Lab" :description="description" /> -->
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
  </article>
</template>
