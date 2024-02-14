<script setup>
definePageMeta({
  layout: false,
})
</script>

<template>
  <section class="p-16">
    <UDashboardNavbar title="Home">
      <template #right>
        <div class="relative inline-flex">
          <UButton>Notifications</UButton>
        </div>
        <div class="relative inline-flex">
          <UButton>Menu</UButton>
        </div>
      </template>
    </UDashboardNavbar>

    <UDashboardToolbar>
      <template #left>
        Toolbar Left
      </template>
      <template #right>
        Toolbar Right
      </template>
    </UDashboardToolbar>

    <UDashboardPanel>
      <UDashboardPanelContent>
        <!-- Revenue -->
        <div class="h-96 rounded-lg ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900">
          <div class="flex flex-wrap items-center justify-between gap-2 px-4 py-4 sm:px-6 pb-0">
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">
                Revenue
              </p>
              <p class="text-3xl text-gray-900 dark:text-white font-semibold">
                $96,401
              </p>
            </div>
          </div>
          <div class="py-5" />
        </div>

        <!-- Grid -->
        <div class="grid lg:grid-cols-2 lg:items-start gap-8 mt-8">
          <div class="rounded-lg ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900">
            <UDashboardCard icon="i-ph-chart-bar-duotone">
              <template #title>
                Recent sales
              </template>
              <template #description>
                You made 128 sales this month.
              </template>
              Dashboard Card
              <template v-if="false" #footer>
                Footer
              </template>
            </UDashboardCard>
          </div>
          <div class="rounded-lg ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900">
            <UDashboardCard icon="i-ph-globe-duotone">
              <template #title>
                Top countries
              </template>
              <template #description>
                You made sales in 20 countries this month.
              </template>
              Dashboard Card
              <template v-if="false" #footer>
                Footer
              </template>
            </UDashboardCard>
          </div>
        </div>
      </UDashboardPanelContent>
    </UDashboardPanel>
  </section>
</template>
