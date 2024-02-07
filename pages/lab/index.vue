<script setup>
const description = 'Some random experiments'

useSeoMeta({
  title: 'UX Lab - Victor Tolbert',
  description,
})
</script>

<template>
  <article>
    <p>Your go-to open-source solution for crafting UI Design Systems. Empowering your team with organized tools, patterns, and best practices to lay the groundwork for seamless application development.</p>
    <!-- <AppHeader class="mb-12" title="UX Lab" :description="description" /> -->
    <div class="mt-8 space-y-24">
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
