<template>
  <article class="grid gap-4">
    <header class="py-2 px-8 bg-gray-200">
      <h2 class="font-semibold">
        Templates
      </h2>
    </header>

    <section class="px-8 grid gap-4">
      <p>
        Templates exist to document the layout and structure of a section. These are not called “pages” for a reason. While they can be pages, that’s not their only functionality. Templates consist of <NuxtLink to="/examples/tokens">
          design tokens
        </NuxtLink>,<NuxtLink to="/examples/elements">
          elements
        </NuxtLink>, and <NuxtLink to="/examples/patterns">
          patterns
        </NuxtLink>.
      </p>
    </section>

    <NuxtPage />
  </article>
</template>
