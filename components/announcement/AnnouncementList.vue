<script setup>
import { nanoid } from 'nanoid'
import { DateTime } from 'luxon'
import { faker } from '@faker-js/faker'

const announcements = ref([
  {
    Id: 1,
    Title: 'Covid Protocol',
    FullName: 'Victor Tolbert',
    Description: 'Here is an announcement for you to see!',
    PublishDate: '2022-01-25 12:00:00',
  },
  {
    Id: 2,
    Title: '2022 Observed Holidays',
    FullName: 'Victor Tolbert',
    Description: 'Here is an updated list of the company\'s observed holidays',
    PublishDate: '2022-01-25 12:00:00',
  },
  {
    Id: 3,
    Title: 'Discount for Oil Changes available at Example Company',
    FullName: 'Victor Tolbert',
    Description: 'Show your credentials and save 50% on oil changes and others auto services.',
    PublishDate: '2022-01-25 12:00:00',
  },
])

// const someObject = reactive({
//   foo: 'Foo',
//   bar: 'Bar',
// })

// const choices = ref([
//   'Front',
//   'Back',
//   'Left',
//   'Right',
// ])

// const label = 'Directionality North'

// const alert = ref(false)
// const countdown = ref(10)

console.log('2022-01-25 12:00:00'.split(' ')[0])
console.log(nanoid())
</script>

<template>
  <section>
    <header class="p-6">
      <h2 class="flex items-center space-x-2">
        <!-- <i class="text-gray-400 fad fa-megaphone fa-lg" /> -->
        <UIcon name="i-ph-bell-duotone" />
        <span> Announcements</span>
      </h2>
    </header>
    <div class="flex flex-col overflow-hidden">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Publish Date
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Full Name
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="announcement in announcements"
                  :key="announcement.Id"
                  class="bg-white border-b dark:bg-gray-800 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600"
                >
                  <td
                    class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowraps dark:text-white"
                  >
                    {{ announcement.Title }}
                  </td>
                  <td
                    class="px-6 py-4 text-sm text-gray-500 whitespace-nowraps dark:text-gray-400"
                  >
                    {{ announcement.Description }}
                  </td>
                  <td
                    class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
                  >
                    {{ announcement.PublishDate }}
                  </td>
                  <td
                    class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
                  >
                    {{ announcement.FullName }}
                  </td>
                  <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a
                      href="#"
                      class="text-primary-600 hover:text-primary-900 dark:text-primary-500 dark:hover:underline"
                    >Edit</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
