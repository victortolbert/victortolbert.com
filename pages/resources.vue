<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

async function fetcher() {
  return await fetch('https://api.victortolbert.com/resources').then(response =>
    response.json(),
  )
}

const { data, suspense } = useQuery({ queryKey: ['test'], queryFn: fetcher })

await suspense()
</script>

<template>
  <div>
    <section class="max-w-2xl">
      <article class="prose prose-neutral md:prose-lg lg:prose-xl dark:prose-invert prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600 max-w-none">
        <!-- {{ markdown }} -->
        <h1>Resume</h1>
      </article>
    </section>

    <figure class="w-full mx-auto mb-16" style="position: relative; height: 800px">
      <iframe
        class="object-cover w-full aspect-document rounded-xl bg-gray-50"
        src="/assets/docs/secrets-of-the-javascript-ninja.pdf"
        width="100%"
        height="100%"
      />
    </figure>
    <figure class="w-full mx-auto mb-16" style="position: relative; height: 800px">
      <iframe
        class="object-cover w-full aspect-document rounded-xl bg-gray-50"
        src="/assets/docs/refactoring-ui.pdf"
        width="100%"
        height="100%"
      />
    </figure>
    <figure class="w-full mx-auto mb-16" style="position: relative; height: 800px">
      <iframe
        class="object-cover w-full aspect-document rounded-xl bg-gray-50"
        src="/assets/docs/laravel-tips.pdf"
        width="100%"
        height="100%"
      />
    </figure>
    <figure class="w-full mx-auto mb-16" style="position: relative; height: 800px">
      <iframe
        class="object-cover w-full aspect-document rounded-xl bg-gray-50"
        src="/assets/docs/laravel-queues-in-action.pdf"
        width="100%"
        height="100%"
      />
    </figure>
    <figure class="w-full mx-auto mb-16" style="position: relative; height: 800px">
      <iframe
        class="object-cover w-full aspect-document rounded-xl bg-gray-50"
        src="/assets/cheatsheets/vue-essentials.pdf"
        width="100%"
        height="100%"
      />
    </figure>
    <figure class="w-full mx-auto mb-16" style="position: relative; height: 800px">
      <iframe
        class="object-cover w-full aspect-document rounded-xl bg-gray-50"
        src="/assets/cheatsheets/vue-router.pdf"
        width="100%"
        height="100%"
      />
    </figure>
    <figure class="w-full mx-auto mb-16" style="position: relative; height: 800px">
      <iframe
        class="object-cover w-full aspect-document rounded-xl bg-gray-50"
        src="/assets/cheatsheets/vue-3-migration-changes.pdf"
        width="100%"
        height="100%"
      />
    </figure>
    <figure class="w-full mx-auto mb-16" style="position: relative; height: 800px">
      <iframe
        class="object-cover w-full aspect-document rounded-xl bg-gray-50"
        src="/assets/cheatsheets/vue-3-composition-api.pdf"
        width="100%"
        height="100%"
      />
    </figure>
    <figure class="w-full mx-auto mb-16" style="position: relative; height: 800px">
      <iframe
        class="object-cover w-full aspect-document rounded-xl bg-gray-50"
        src="/assets/cheatsheets/pinia.pdf"
        width="100%"
        height="100%"
      />
    </figure>
    <figure class="w-full mx-auto mb-16" style="position: relative; height: 800px">
      <iframe
        class="object-cover w-full aspect-document rounded-xl bg-gray-50"
        src="/assets/cheatsheets/typescript-interfaces.pdf"
        width="100%"
        height="100%"
      />
    </figure>
    <figure class="w-full mx-auto mb-16" style="position: relative; height: 800px">
      <iframe
        class="object-cover w-full aspect-document rounded-xl bg-gray-50"
        src="/assets/cheatsheets/typescript-types.pdf"
        width="100%"
        height="100%"
      />
    </figure>
    <figure class="w-full mx-auto mb-16" style="position: relative; height: 800px">
      <iframe
        class="object-cover w-full aspect-document rounded-xl bg-gray-50"
        src="/assets/cheatsheets/typography-cheatsheet.pdf"
        width="100%"
        height="100%"
      />
    </figure>
    <figure class="w-full mx-auto mb-16" style="position: relative; height: 800px">
      <iframe
        class="object-cover w-full aspect-document rounded-xl bg-gray-50"
        src="/assets/cheatsheets/typescript-classes.pdf"
        width="100%"
        height="100%"
      />
    </figure>
    <figure class="w-full mx-auto mb-16" style="position: relative; height: 800px">
      <iframe
        class="object-cover w-full aspect-document rounded-xl bg-gray-50"
        src="/assets/cheatsheets/typescript-control-flow-analysis.pdf"
        width="100%"
        height="100%"
      />
    </figure>
    <figure class="w-full mx-auto mb-16" style="position: relative; height: 800px">
      <iframe
        class="object-cover w-full aspect-document rounded-xl bg-gray-50"
        src="/assets/docs/salesforce-ux-designer-certification-prep-guide.pdf"
        width="100%"
        height="100%"
      />
    </figure>
    <figure class="w-full mx-auto mb-16" style="position: relative; height: 800px">
      <iframe
        class="object-cover w-full aspect-document rounded-xl bg-gray-50"
        src="/assets/docs/experience-cloud-sites-with-lwr.pdf"
        width="100%"
        height="100%"
      />
    </figure>

    <figure class="w-full mx-auto mb-16" style="position: relative; height: 800px">
      <iframe
        class="object-cover w-full aspect-document rounded-xl bg-gray-50"
        src="/assets/docs/refactoring-second-edition.pdf"
        width="100%"
        height="100%"
      />
    </figure>

    <figure class="w-full mx-auto mb-16" style="position: relative; height: 800px">
      <iframe
        class="object-cover w-full aspect-document rounded-xl bg-gray-50"
        src="/assets/docs/refactoring-to-collections.pdf"
        width="100%"
        height="100%"
      />
    </figure>

    <figure class="w-full mx-auto mb-16" style="position: relative; height: 800px">
      <iframe
        class="object-cover w-full aspect-document rounded-xl bg-gray-50"
        src="/assets/docs/99-bottles-of-oop-js.pdf"
        width="100%"
        height="100%"
      />
    </figure>

    <figure class="w-full mx-auto mb-16" style="position: relative; height: 800px">
      <iframe
        class="object-cover w-full aspect-document rounded-xl bg-gray-50"
        src="/assets/docs/product-management-training-day-1.pdf"
        width="100%"
        height="100%"
      />
    </figure>

    <div>{{ data }}</div>
  </div>
</template>
