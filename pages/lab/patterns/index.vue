<script setup>
definePageMeta({
  title: 'Patterns',
  description: 'Patterns are the combination of patterns and components that are used to create a complete user interface. They are the larger components that are made up of smaller patterns.',
  breadcrumb: {
    title: 'Patterns',
    ariaLabel: 'Patterns',
    hideCurrent: true,
  },
})
const patterns = ref([
  { name: 'Calendar', url: '/lab/patterns/calendar', status: 'Ready', version: '1.0.0' },
  { name: 'Timeline', url: '/lab/patterns/timeline', status: 'Prototype', version: '1.0.0' },
])
const statuses = {
  'Ready': { icon: 'i-ph-check-square-duotone', className: 'text-green-500' },
  'Review': { icon: 'i-ph-minus-square-duotone', className: 'text-yellow-500' },
  'Prototype': { icon: 'i-ph-square-duotone', className: 'text-blue-500' },
  'Deprecated': { icon: 'i-ph-x-square-duotone', className: 'text-red-500' },
  'Not Applicable': { icon: 'i-ph-minus-duotone', className: 'text-gray-500' },
}

const statuses2 = ref([
  { name: 'Ready', icon: 'i-ph-check-square-duotone', className: 'text-green-500' },
  { name: 'Review', icon: 'i-ph-minus-square-duotone', className: 'text-yellow-500' },
  { name: 'Prototype', icon: 'i-ph-square-duotone', className: 'text-blue-500' },
  { name: 'Deprecated', icon: 'i-ph-x-square-duotone', className: 'text-red-500' },
  { name: 'Not Applicable', icon: 'i-ph-minus-duotone', className: 'text-gray-500' },
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
        <ul class="flex gap-2 flex-wrap whitespace-nowrap justify-between">
          <li v-for="(status, key) in statuses" :key="key" class="inline-flex gap-1">
            <UIcon :name="status.icon" :class="status.className" class="text-xl" />
            <span class="text-sm">{{ key }}</span>
          </li>
        </ul>
      </section>
      <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table class="table-fixed w-full divide-y divide-gray-700">
              <thead>
                <tr class="bg-gray-100 dark:bg-gray-900">
                  <th scope="col" class="text-left px-4 py-2 font-semibold dark:text-white text-sm w-8/12">
                    Pattern Name
                  </th>
                  <th scope="col" class="text-center px-4 py-2 font-medium  dark:text-white text-sm w-2/12 hidden">
                    Release
                  </th>
                  <th scope="col" class="text-center px-4 py-2 font-medium  dark:text-white text-sm w-2/12">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y dark:divide-gray-800">
                <tr v-for="pattern in patterns" :key="`pattern-${pattern.name}`" class="text-sm">
                  <td class="px-4 py-2">
                    <NuxtLink :to="pattern.url">
                      <pre>{{ pattern.name }}</pre>
                    </NuxtLink>
                  </td>
                  <td class="px-4 py-2 text-center hidden">
                    {{ pattern.version }}
                  </td>
                  <td class="px-4 py-2 text-center ">
                    <UIcon
                      :name="statuses[pattern.status].icon"
                      :class="statuses[pattern.status].className"
                      class="text-lg"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
