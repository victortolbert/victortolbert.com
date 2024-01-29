<script setup>
import { nanoid } from 'nanoid'
import { DateTime } from 'luxon'
import { faker } from '@faker-js/faker'

const bar = ref(null)

const chartData = {
  labels: ['January', 'February', 'March'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [40, 20, 12],
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
}

console.log('2022-01-25 12:00:00'.split(' ')[0])
console.log(nanoid())

onMounted(() => {
  console.log(bar.value)
})
</script>

<template>
  <div>
    <div class="grid grid-cols-12 gap-6">
      <!-- Left -->
      <div class="col-span-12 lg:col-span-3">
        <section>
          <header>
            <h2 class="flex items-center space-x-2">
              <UIcon name="i-ph-calendar-duotone" />
              <span>Calendar</span>
            </h2>
          </header>
        </section>

        <section class="mt-8">
          <div>
            <UInput
              icon="i-heroicons-magnifying-glass-20-solid"
              size="sm"
              color="white"
              :trailing="false"
              placeholder="Project or Claim"
            />
          </div>
        </section>

        <section class="mt-8">
          <header>
            <h2 class="flex items-center space-x-2">
              <span>Past Due</span>
            </h2>
          </header>
        </section>

        <section class="mt-8">
          <header>
            <h2 class="flex items-center space-x-2">
              <span>Today</span>
            </h2>
          </header>
        </section>

        <section class="mt-8">
          <header>
            <h2 class="flex items-center space-x-2">
              <span>Tomorrow</span>
            </h2>
          </header>
        </section>
      </div>

      <!-- Middle -->
      <div class="col-span-12 lg:col-span-9">
        <AnnouncementList />

        <Chart ref="bar" :chart-data="chartData" :chart-options="chartOptions" />
      </div>
    </div>
  </div>
</template>
