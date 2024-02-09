<script setup>
import { nanoid } from 'nanoid'

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
    <div class="flex flex-col overflow-hidden">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h2 class="text-base font-semibold leading-6 dark:text-white">
            Announcements
          </h2>
          <p class="mt-2 text-sm dark:text-gray-300">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button type="button" class="block px-3 py-2 text-sm font-semibold text-center text-white rounded-md bg-primary-500 hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500">
            Add announcement
          </button>
        </div>
      </div>

      <div class="flow-root mt-8">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table class="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
              <thead class="bg-gray-50 dark:bg-gray-950">
                <tr>
                  <th
                    scope="col"
                    class="pl-4 pr-3 py-3.5 text-sm font-semibold text-left text-gray-900 dark:text-white"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-sm font-semibold text-left text-gray-900 dark:text-white"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-sm font-semibold text-left text-gray-900 dark:text-white"
                  >
                    Publish Date
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-sm font-semibold text-left text-gray-900 dark:text-white"
                  >
                    Full Name
                  </th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
                <!-- bg-white border-b dark:bg-gray-800 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600 -->
                <tr
                  v-for="announcement in announcements"
                  :key="announcement.Id"
                >
                  <td
                    class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white sm:pl-0"
                  >
                    {{ announcement.Title }}
                  </td>
                  <td
                    class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-300"
                  >
                    {{ announcement.Description }}
                  </td>
                  <td
                    class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-300"
                  >
                    {{ announcement.PublishDate }}
                  </td>
                  <td
                    class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-300"
                  >
                    {{ announcement.FullName }}
                  </td>
                  <td class="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-0">
                    <a
                      href="#"
                      class="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300"
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
