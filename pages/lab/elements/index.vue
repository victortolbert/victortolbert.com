<script setup>
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
  { name: 'Button', status: 'Ready', version: '1.0.1' },
  { name: 'Checkbox', status: 'Ready', version: '1.0.1' },
  { name: 'Dropdown', status: 'Ready', version: '1.0.1' },
  { name: 'Icon', status: 'Ready', version: '1.0.1' },
  { name: 'Input', status: 'Ready', version: '1.0.1' },
  { name: 'MediaObject', status: 'Ready', version: '1.0.1' },
  { name: 'Modal', status: 'Ready', version: '1.0.1' },
  { name: 'MultiSelect', status: 'Ready', version: '1.0.1' },
  { name: 'Radio', status: 'Ready', version: '1.0.1' },
  { name: 'RadioGroup', status: 'Ready', version: '1.0.1' },
  { name: 'Select', status: 'Ready', version: '1.0.1' },
])
const statuses = ref([
  { name: 'Ready', icon: 'i-ph-check-square-duotone', className: 'text-green-500' },
  { name: 'Review', icon: 'i-ph-minus-square-duotone', className: 'text-yellow-500' },
  { name: 'Prototype', icon: 'i-ph-square-duotone', className: 'text-blue-500' },
  { name: 'Deprecated', icon: 'i-ph-x-square-duotone', className: 'text-red-500' },
  { name: 'N/A', icon: 'i-ph-minus-duotone', className: 'text-gray-500' },
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
          <li v-for="status in statuses" :key="`status-${status.name}`" class="inline-flex gap-1">
            <UIcon :name="status.icon" :class="status.className" class="text-xl" />
            <span class="text-sm">{{ status.name }}</span>
          </li>
        </ul>
      </section>
      <table class="table-fixed border-b w-full">
        <thead>
          <tr class="bg-gray-100">
            <th class="text-left px-4 py-2 font-medium text-sm w-8/12">
              Element Name
            </th>
            <th class="text-center px-4 py-2 font-medium text-sm w-2/12 hidden">
              Release
            </th>
            <th class="text-center px-4 py-2 font-medium text-sm w-2/12">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="element in elements" :key="`element-${element.name}`" class="text-sm">
            <td class="px-4 py-2">
              <NuxtLink to="/examples/elements/button">
                <pre>{{ element.name }}</pre>
              </NuxtLink>
            </td>
            <td class="px-4 py-2 text-center hidden">
              1.0.0
            </td>
            <td class="px-4 py-2 text-center ">
              <UIcon name="i-ph-square-duotone" class="text-blue-500 text-lg" />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>
