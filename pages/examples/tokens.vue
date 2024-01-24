<template>
  <article class="grid gap-4">
    <header class="py-2 px-8 bg-gray-200">
      <h2 class="font-semibold">
        Design Tokens
      </h2>
    </header>

    <section class="px-8 grid gap-4">
      <p>
        Design tokens are the atoms of the system as <NuxtLink target="_blank" to="https://www.lightningdesignsystem.com/design-tokens/">
          Salesforce
        </NuxtLink> describes them. In Vue Design System they are used instead of hard coded values to ensure a better consistency across any platform.
      </p>
    </section>

    <NuxtPage />
  </article>
</template>
