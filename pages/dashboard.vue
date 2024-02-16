<script setup lang="ts">
import { VisAxis, VisLine, VisXYContainer } from '@unovis/vue'
import type { DashboardSidebarLink } from '@nuxt/ui-pro/types/index.d.ts'

type DataRecord = { x: number, y: number }

definePageMeta({
  layout: false,
})

const data = ref<DataRecord[]>([
  { x: 0, y: 0 },
  { x: 1, y: 2 },
  { x: 2, y: 1 },
])

const links: DashboardSidebarLink[] = [
  {
    icon: 'i-ph-house-duotone',
    label: 'Home',
    to: '/',
  },
  {
    icon: 'i-ph-flask-duotone',
    label: 'Lab',
    to: '/lab',
  },
]
</script>

<template>
  <div class="fixed inset-0 flex overflow-hidden">
    <UDashboardPanel title="Sidebar">
      <UDashboardNavbar title="App" />
      <UDashboardSidebar>
        <UDashboardSearchButton />
      </UDashboardSidebar>
      <div class="flex-1 px-4 flex flex-col gap-y-2 overflow-y-auto">
        <!-- <UDashboardSidebarLinks :links="links" /> -->
      </div>
    </UDashboardPanel>

    <div class="flex flex-1 w-full min-w-0">
      <UDashboardPanel>
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
            <div class="py-5">
              <VisXYContainer>
                <VisLine :data="data" :x="d => d.x" :y="d => d.y" />
                <VisAxis type="x" />
                <VisAxis type="y" />
              </VisXYContainer>
            </div>
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
    </div>
  </div>
</template>
