<template>
  <article class="grid gap-8">
    <section>
      <h2 class="font-semibold">
        Playground
      </h2>
      <ul class="list-disc list-inside mt-4">
        <li>
          <NuxtLink to="/examples/api-party/json-placeholder">
            JSON Placeholder
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/examples/api-party/pet-store">
            Pet Store (OpenAPI)
          </NuxtLink>
        </li>
      </ul>
    </section>
    <section>
      <h2>Server Routes (Nitro)</h2>
      <ul class="list-disc list-inside mt-4">
        <li>
          <NuxtLink to="/api/_jsonPlaceholder" target="_blank">
            JSON Placeholder (Server)
          </NuxtLink>
        </li>
      </ul>
    </section>
  </article>
</template>
