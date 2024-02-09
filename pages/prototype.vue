<script setup>
import { nanoid } from 'nanoid'

const bar = ref(null)

const chartData = {
  labels: ['January', 'February', 'March'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#737373',
      data: [40, 20, 12],
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
}
const timeline = [
  {
    id: 1,
    content: 'Applied to',
    target: 'Front End Developer',
    href: '#',
    date: 'Sep 20',
    datetime: '2020-09-20',
    icon: 'ph:user',
    iconBackground: 'bg-gray-400 dark:bg-gray-600',
  },
  {
    id: 2,
    content: 'Advanced to phone screening by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 22',
    datetime: '2020-09-22',
    icon: 'ph:thumbs-up-duotone',
    iconBackground: 'bg-blue-500 dark:bg-blue-400',
  },
  {
    id: 3,
    content: 'Completed phone screening with',
    target: 'Martha Gardner',
    href: '#',
    date: 'Sep 28',
    datetime: '2020-09-28',
    icon: 'ph:check',
    iconBackground: 'bg-green-500 dark:bg-green-400',
  },
  {
    id: 4,
    content: 'Advanced to interview by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 30',
    datetime: '2020-09-30',
    icon: 'ph:thumbs-up',
    iconBackground: 'bg-blue-500 dark:bg-blue-400',
  },
  {
    id: 5,
    content: 'Completed interview with',
    target: 'Katherine Snyder',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: 'ph:check',
    iconBackground: 'bg-green-500 dark:bg-green-400',
  },
]

console.log('2022-01-25 12:00:00'.split(' ')[0])
console.log(nanoid())

onMounted(() => {
  console.log(bar.value)
})
</script>

<template>
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
      <section>
        <Chart ref="bar" :chart-data="chartData" :chart-options="chartOptions" />
      </section>

      <section class="mt-8">
        <AnnouncementList />
      </section>

      <section class="mt-8">
        <div class="flow-root">
          <ul role="list" class="-mb-8">
            <li v-for="(event, eventIdx) in timeline" :key="event.id">
              <div class="relative pb-8">
                <!-- Vertical line -->
                <span
                  v-if="eventIdx !== timeline.length - 1"
                  class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-800"
                  aria-hidden="true"
                />

                <div class="relative flex space-x-3">
                  <div>
                    <span class="flex items-center justify-center w-8 h-8 rounded-full ring-8 ring-white dark:ring-gray-900" :class="[event.iconBackground]">
                      <!-- <component :is="event.icon" class="w-5 h-5 text-white" aria-hidden="true" /> -->
                      <!-- <UIcon :name="event.icon" class="w-5 h-5 text-white" aria-hidden="true" /> -->
                      <Icon :name="event.icon" class="w-5 h-5 text-white dark:text-gray-900" aria-hidden="true" />
                    </span>
                  </div>
                  <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p class="text-sm text-gray-500 dark:text-gray-400">
                        {{ event.content }} <a :href="event.href" class="font-medium text-gray-900 dark:text-gray-100">{{ event.target }}</a>
                      </p>
                    </div>
                    <div class="text-sm text-right text-gray-500 dark:text-gray-400 whitespace-nowrap">
                      <time :datetime="event.datetime">{{ event.date }}</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>
