<script setup>
import { statuses } from '~/data'

definePageMeta({
  title: 'Elements',
  description: 'Elements are the basic building blocks of the design system. They are the smallest components that can be combined to create more complex components.',
  breadcrumb: {
    title: 'Elements',
    ariaLabel: 'Elements',
    hideCurrent: true,
  },
})
// - Input (Text, Date, Tel, etc..)
const elements = ref([
  { name: 'Button', url: '/elements', status: 'Ready', version: '1.0.0' },
  { name: 'Heading', url: '/elements', status: 'Ready', version: '1.0.0' },
  { name: 'Icon', url: '/elements', status: 'Ready', version: '1.0.0' },
  { name: 'Input', url: '/elements', status: 'Ready', version: '1.0.0' },
  { name: 'Paragraph', url: '/elements', status: 'Ready', version: '1.0.0' },
  { name: 'TextStyle', url: '/elements', status: 'Ready', version: '1.0.0' },
  { name: 'Textarea', url: '/elements', status: 'Ready', version: '1.0.0' },
  { name: 'Wrapper', url: '/elements', status: 'Ready', version: '1.0.0' },
])
</script>

<template>
  <div class="py-4 grid gap-4">
    <section class="grid gap-4">
      <header class="border-b pb-4">
        <h3 class="font-medium">
          Overview
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
                    Element Name
                  </th>
                  <th scope="col" class="sticky top-0 z-10 text-center px-2 py-3.5 font-semibold dark:text-white text-sm w-2/12 hidden sm:table-cell">
                    Release
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
                <tr v-for="element in elements" :key="`element-${element.name}`" class="text-sm">
                  <td class="relative whitespace-nowrap px-2 pl-6 py-2 text-sm text-left">
                    <UIcon
                      :name="statuses[element.status].icon"
                      :class="statuses[element.status].className"
                      class="text-lg"
                    />
                  </td>
                  <td class="whitespace-nowrap px-2 py-2 text-sm">
                    <NuxtLink :to="element.url" class="text-gray-700 hover:text-primary-600 font-medium dark:text-gray-100">
                      <pre>{{ element.name }}</pre>
                    </NuxtLink>
                  </td>
                  <td class="whitespace-nowrap px-2 py-2 text-sm text-center hidden sm:table-cell">
                    {{ element.version }}
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
