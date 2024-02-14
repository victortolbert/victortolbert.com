<script setup>
import { statuses } from '~/data'

const description = 'Some random experiments'

useSeoMeta({
  title: 'UX Lab - Victor Tolbert',
  description,
})

definePageMeta({
  title: 'Elements',
  description: 'Elements are the basic building blocks of the design system. They are the smallest components that can be combined to create more complex components.',
  breadcrumb: {
    title: 'Elements',
    ariaLabel: 'Elements',
    hideCurrent: true,
  },
})

const components = ref([
  { name: 'Button', url: '/blueprints/button', category: 'Elements', status: 'Ready', version: '1.0.0' },
  { name: 'Navbar', url: '/blueprints/navbar', category: 'Patterns', status: 'Ready', version: '1.0.0' },
  { name: 'Index', url: '/components', category: 'Templates', status: 'Ready', version: '1.0.0' },
])
</script>

<template>
  <article class="grid gap-4">
    <!-- <AppHeader class="mb-12" title="UX Lab" :description="description" /> -->
    <section class="grid gap-4">
      <p>Your go-to open-source solution for crafting UI Design Systems. Empowering your team with organized tools, patterns, and best practices to lay the groundwork for seamless application development.</p>
    </section>

    <div class="py-4 grid gap-4">
      <section class="grid gap-4">
        <header class="border-b pb-4">
          <h3 class="font-medium">
            System Overview
          </h3>
        </header>
      </section>

      <section class="grid">
        <section>
          <LabStatusList />
        </section>
        <section class="mt-8 flow-root">
          <div class="overflow-x-auto">
            <div class="inline-block min-w-full py-2 align-middle">
              <table class="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
                <thead>
                  <tr class="bg-gray-200 dark:bg-gray-900">
                    <th scope="col" class="sticky top-0 z-10 text-left px-2 py-3.5 font-semibold dark:text-white text-sm w-2/12">
                      Status
                    </th>
                    <th scope="col" class="sticky top-0 z-10 text-left px-2 py-3.5 font-semibold dark:text-white text-sm w-8/12">
                      Component Name
                    </th>
                    <th scope="col" class="sticky top-0 z-10 text-left px-2 py-3.5 font-semibold dark:text-white text-sm w-2/12 hidden sm:table-cell">
                      Category
                    </th>
                    <th scope="col" class="sticky top-0 z-10 text-center px-2 py-3.5 font-semibold dark:text-white text-sm w-2/12 hidden sm:table-cell">
                      Release
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
                  <tr v-for="component in components" :key="`component-${component.name}`" class="text-sm">
                    <td class="relative whitespace-nowrap px-2 pl-6 py-2 text-sm text-left">
                      <UIcon
                        :name="statuses[component.status].icon"
                        :class="statuses[component.status].className"
                        class="text-lg"
                      />
                    </td>
                    <td class="whitespace-nowrap px-2 py-2 text-sm">
                      <NuxtLink :to="component.url" class="text-gray-700 hover:text-primary-600 font-medium dark:text-gray-100">
                        <pre>{{ component.name }}</pre>
                      </NuxtLink>
                    </td>
                    <td class="whitespace-nowrap px-2 py-2 text-sm hidden sm:table-cell">
                      <NuxtLink :to="`/lab/${component.category.toLowerCase()}`" class="text-gray-700 hover:text-primary-600 font-medium dark:text-gray-100">
                        {{ component.category }}
                      </NuxtLink>
                    </td>
                    <td class="whitespace-nowrap px-2 py-2 text-sm text-center hidden sm:table-cell">
                      {{ component.version }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </section>
    </div>

    <div v-if="false" class="mt-8 space-y-24">
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
