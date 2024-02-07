<script setup>
import { statuses } from '~/data'

definePageMeta({
  title: 'Templates',
  description: 'Templates are the combination of templates and components that are used to create a complete user interface. They are the larger components that are made up of smaller templates and templates.',
  breadcrumb: {
    title: 'Templates',
    ariaLabel: 'Templates',
    hideCurrent: true,
  },
})
const templates = ref([
  { name: 'Index', url: '/lab/templates', status: 'Ready', version: '1.0.1' },
  { name: 'NotFound', url: '/lab/templates', status: 'Ready', version: '1.0.1' },
])
</script>

<template>
  <div class="py-4 grid gap-4">
    <header class="border-b pb-4">
      <h3 class="font-medium">
        Overview
      </h3>
    </header>
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
                    Template Name
                  </th>
                  <th scope="col" class="sticky top-0 z-10 text-center px-2 py-3.5 font-semibold dark:text-white text-sm w-2/12 hidden sm:table-cell">
                    Release
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
                <tr v-for="template in templates" :key="`template-${template.name}`" class="text-sm">
                  <td class="relative whitespace-nowrap px-2 pl-6 py-2 text-sm text-left">
                    <UIcon
                      :name="statuses[template.status].icon"
                      :class="statuses[template.status].className"
                      class="text-lg"
                    />
                  </td>
                  <td class="whitespace-nowrap px-2 py-2 text-sm">
                    <NuxtLink :to="template.url" class="text-gray-700 hover:text-primary-600 font-medium dark:text-gray-100">
                      <pre>{{ template.name }}</pre>
                    </NuxtLink>
                  </td>
                  <td class="whitespace-nowrap px-2 py-2 text-sm text-center hidden sm:table-cell">
                    {{ template.version }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>
