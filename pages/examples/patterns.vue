<template>
  <article class="p-4 grid gap-4">
    <header class="py-2 px-8 bg-gray-200">
      <h2 class="font-semibold">
        Patterns
      </h2>
    </header>

    <section class="px-8 grid gap-4">
      <p>
        Patterns are UI Patterns that fall on the more complex side of the spectrum. Date pickers, data tables, and visualizations are good examples. Patterns utilize both <NuxtLink to="/examples/elements">
          elements
        </NuxtLink> and <NuxtLink to="/examples/tokens">
          design tokens
        </NuxtLink>.
      </p>
    </section>

    <section class="px-8 grid gap-4">
      <header class="border-b pb-4">
        <h3 class="font-medium">
          Overview
        </h3>
      </header>

      <ul class="flex items-center gap-4">
        <li class="inline-flex items-center">
          <UIcon name="i-ph-check-square-duotone" class="text-green-500" /> Ready
        </li>
        <li class="inline-flex items-center">
          <UIcon name="i-ph-minus-square-duotone" class="text-yellow-500" /> Under Review
        </li>
        <li class="inline-flex items-center">
          <UIcon name="i-ph-square-duotone" class="text-blue-500" /> Prototype
        </li>
        <li class="inline-flex items-center">
          <UIcon name="i-ph-x-square-duotone" class="text-red-500" /> Deprecated
        </li>
        <li class="inline-flex items-center">
          <UIcon name="i-ph-minus-duotone" class="text-neutral-500" /> Not applicable
        </li>
      </ul>
    </section>

    <section>
      <table class="table-fixed w-full">
        <thead>
          <tr class="bg-gray-100">
            <th class="text-left px-4 py-2 font-medium text-sm w-8/12">
              Pattern Name
            </th>
            <th class="text-center px-4 py-2 font-medium text-sm w-2/12">
              Release
            </th>
            <th class="text-center px-4 py-2 font-medium text-sm w-2/12">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-2">
              Navbar
            </td>
            <td class="px-4 py-2 text-center">
              1.0.0
            </td>
            <td class="px-4 py-2 text-center ">
              <UIcon name="i-ph-check-square-duotone" class="text-green-500" />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </article>
</template>
