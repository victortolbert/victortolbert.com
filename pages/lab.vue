<script setup>
definePageMeta({
  title: 'UX Lab',
  description: 'The UX Lab is a collection of resources to help you design and build beautiful, accessible, and consistent experiences for your users.',
})
</script>

<template>
  <article class="min-h-screen mx-auto max-w-3xl">
    <!-- <AppHeader class="mt-1.5 mb-8" title="UX Lab" :description="description" /> -->
    <LogoLab class="h-6 w-auto" />

    <div class="mt-8 grid sm:flex gap-8 items-start">
      <NuxtPage />

      <nav class="order-1">
        <ul class="whitespace-nowrap">
          <li>
            <NuxtLink to="/lab">
              Getting Started
            </NuxtLink>
          </li>
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
              Elements
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
