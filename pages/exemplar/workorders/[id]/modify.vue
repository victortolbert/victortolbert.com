<script setup>
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue'

definePageMeta({
  title: 'Edit Project',
  breadcrumb: 'Edit Project',
  layout: 'hancock',
})

const categories = ref({
  Details: [
    {
      id: 1,
      title: 'Does drinking coffee make you smarter?',
      date: '5h ago',
      commentCount: 5,
      shareCount: 2,
    },
    {
      id: 2,
      title: 'So you\'ve bought coffee... now what?',
      date: '2h ago',
      commentCount: 3,
      shareCount: 2,
    },
  ],
  Commments: [
    {
      id: 1,
      title: 'Does drinking coffee make you smarter?',
      date: '5h ago',
      commentCount: 5,
      shareCount: 2,
    },
    {
      id: 2,
      title: 'So you\'ve bought coffee... now what?',
      date: '2h ago',
      commentCount: 3,
      shareCount: 2,
    },
  ],
  History: [
    {
      id: 1,
      title: 'Is tech making coffee better or worse?',
      date: 'Jan 7',
      commentCount: 29,
      shareCount: 16,
    },
    {
      id: 2,
      title: 'The most innovative things happening in coffee',
      date: 'Mar 19',
      commentCount: 24,
      shareCount: 12,
    },
  ],
  ServiceTypes: [
    {
      id: 1,
      title: 'Ask Me Anything: 10 answers to your questions about coffee',
      date: '2d ago',
      commentCount: 9,
      shareCount: 5,
    },
    {
      id: 2,
      title: 'The worst advice we\'ve ever heard about coffee',
      date: '4d ago',
      commentCount: 1,
      shareCount: 2,
    },
  ],
  Communication: [
    {
      id: 1,
      title: 'Ask Me Anything: 10 answers to your questions about coffee',
      date: '2d ago',
      commentCount: 9,
      shareCount: 5,
    },
    {
      id: 2,
      title: 'The worst advice we\'ve ever heard about coffee',
      date: '4d ago',
      commentCount: 1,
      shareCount: 2,
    },
  ],
})

const selectedTab = ref(0)

function changeTab(index) {
  selectedTab.value = index
}
</script>

<template>
  <UArticle>
    <TabGroup :selected-index="selectedTab" @change="changeTab">
      <div class="sm:hidden">
        <label for="tabs" class="sr-only">Select a tab</label>
        <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->

        <div class="relative mt-1">
          <div class="relative">
            <select id="category" v-model="selectedTab" name="category" class="focus:ring-primary-500 form-select dark:focus:ring-primary-400 relative block w-full border-0 rounded-md bg-white px-2.5 py-1.5 pe-9 text-sm text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset disabled:cursor-not-allowed dark:bg-gray-900 dark:text-white disabled:opacity-75 focus:outline-none focus:ring-2 dark:ring-gray-700">
              <option v-for="(category, index) in Object.keys(categories)" :key="category" :value="index">
                {{ category }}
              </option>
            </select>
            <span class="pointer-events-none absolute end-0 inset-y-0 flex items-center pe-2.5"><span class="i-heroicons-chevron-down-20-solid h-5 w-5 flex-shrink-0 text-gray-400 dark:text-gray-500" aria-hidden="true" /></span>
          </div>
        </div>
      </div>

      <div class="hidden sm:block">
        <TabList class="border-b border-gray-400">
          <div class="flex gap-8 -mb-px">
            <Tab
              v-for="category in Object.keys(categories)"
              v-slot="{ selected }"
              :key="category"
              as="template"
            >
              <button
                class="whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium"
                :class="[
                  selected
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:border-gray-500 hover:text-gray-700',
                ]"
              >
                {{ category }}
              </button>
            </Tab>
          </div>
        </TabList>
      </div>

      <USection>
        <TabPanels>
          <TabPanel
            v-for="(posts, idx) in Object.values(categories)"
            :key="idx"
            class="rounded-xl bg-white p-3 ring-offset-2 ring-white ring-opacity-60 ring-offset-blue-400 focus:outline-none focus:ring-2"
          >
            <ul>
              <li
                v-for="post in posts"
                :key="post.id"
                class="relative rounded-md p-3 hover:bg-gray-100"
              >
                <h3 class="text-sm font-medium leading-5">
                  {{ post.title }}
                </h3>
                <ul
                  class="mt-1 flex text-xs font-normal leading-4 text-gray-500 space-x-1"
                >
                  <li>{{ post.date }}</li>
                  <li>&middot;</li>
                  <li>{{ post.commentCount }} comments</li>
                  <li>&middot;</li>
                  <li>{{ post.shareCount }} shares</li>
                </ul>
                <a
                  href="#"
                  class="absolute inset-0 rounded-md ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                />
              </li>
            </ul>
          </TabPanel>
        </TabPanels>
      </USection>
    </TabGroup>
  </UArticle>
</template>

<style>
.form-select {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='rgb(var(--color-gray-500) / %3calpha-value%3e)' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 0.5rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
    padding-right: 2.5rem;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
}
</style>
