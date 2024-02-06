<script setup>
definePageMeta({
  title: 'UX Lab',
  description: 'The UX Lab is a collection of resources to help you design and build beautiful, accessible, and consistent experiences for your users.',
})
</script>

<template>
  <article class="min-h-screen mx-auto max-w-3xl">
    <Breadcrumbs />
    <AppHeader class="mt-1.5 mb-8" title="UX Lab" :description="description" />

    <div class="mt-4 flex gap-8 items-start">
      <NuxtPage />

      <nav>
        <ul class="whitespace-nowrap">
          <li>
            <NuxtLink to="/lab/principles">
              Design Principles
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/lab/voice-and-tone">
              Voice & Tone
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/lab/tokens">
              Design Tokens
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/lab/elements">
              Elementsmessag
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/lab/patterns">
              Patterns
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/lab/templates">
              Templates
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/lab/downloads">
              Downloads
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </article>
</template>
