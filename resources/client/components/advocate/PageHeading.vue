<script setup lang="ts">
import { ref } from 'vue'
const open = ref(false)
const activeIndex = ref(0)
const selectedIndex = ref(0)
</script>

<template>
  <header class="bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between">
      <div class="flex-1 min-w-0">
        <nav class="flex" aria-label="Breadcrumb">
          <ol class="flex items-center space-x-4" role="list">
            <li>
              <div>
                <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-700">Jobs</a>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <svg
                  class="flex-shrink-0 h-5 w-5 text-gray-400"
                  x-description="Heroicon name: solid/chevron-right"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <a
                  href="#"
                  class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                >Engineering</a>
              </div>
            </li>
          </ol>
        </nav>
        <h1
          class="mt-2 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
        >Back End Developer</h1>
        <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-8">
          <div class="mt-2 flex items-center text-sm text-gray-500">
            <svg
              class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              x-description="Heroicon name: solid/briefcase"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
              <path
                d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
              />
            </svg>
            Full-time
          </div>
          <div class="mt-2 flex items-center text-sm text-gray-500">
            <svg
              class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              x-description="Heroicon name: solid/location-marker"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              />
            </svg>
            Remote
          </div>
          <div class="mt-2 flex items-center text-sm text-gray-500">
            <svg
              class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              x-description="Heroicon name: solid/currency-dollar"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
              />
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                clip-rule="evenodd"
              />
            </svg>
            $120k – $140k
          </div>
          <div class="mt-2 flex items-center text-sm text-gray-500">
            <svg
              class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              x-description="Heroicon name: solid/calendar"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              />
            </svg>
            Closing on January 9, 2020
          </div>
        </div>
      </div>
      <div class="mt-5 flex xl:mt-0 xl:ml-4">
        <span class="hidden sm:block">
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary-500"
          >
            <svg
              class="-ml-1 mr-2 h-5 w-5 text-gray-400"
              x-description="Heroicon name: solid/pencil"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
              />
            </svg>
            Edit
          </button>
        </span>

        <span class="hidden sm:block ml-3">
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary-500"
          >
            <svg
              class="-ml-1 mr-2 h-5 w-5 text-gray-400"
              x-description="Heroicon name: solid/link"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                clip-rule="evenodd"
              />
            </svg>
            View
          </button>
        </span>

        <span class="sm:ml-3 relative z-0">
          <!--
  Custom select controls like this require a considerable amount of JS to implement from scratch. We're planning
  to build some low-level libraries to make this easier with popular frameworks like React, Vue, and even Alpine.js
  in the near future, but in the mean time we recommend these reference guides when building your implementation:

  https://www.w3.org/TR/wai-aria-practices/#Listbox
  https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
          -->
          <div>
            <label id="listbox-label" class="sr-only">Change published status</label>
            <div class="relative">
              <div class="inline-flex shadow-sm rounded-md divide-x divide-primary-600">
                <div
                  class="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-primary-600"
                >
                  <div
                    class="relative inline-flex items-center bg-primary-500 py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white"
                  >
                    <svg
                      class="h-5 w-5"
                      x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <p x-text="selected.title" class="ml-2.5 text-sm font-medium">Published</p>
                  </div>
                  <button
                    type="button"
                    class="relative inline-flex items-center bg-primary-500 p-2 rounded-l-none rounded-r-md text-sm font-medium text-white hover:bg-primary-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary-500"
                    x-ref="button"
                    aria-haspopup="listbox"
                    :aria-expanded="open"
                    aria-labelledby="listbox-label"
                  >
                    <span class="sr-only">Change published status</span>
                    <svg
                      class="h-5 w-5 text-white"
                      x-description="Heroicon name: solid/chevron-down"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <ul
                v-show="open"
                x-transition:leave="transition ease-in duration-100"
                x-transition:leave-start="opacity-100"
                x-transition:leave-end="opacity-0"
                class="origin-top-right absolute left-0 mt-2 -mr-1 w-72 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none sm:left-auto sm:right-0"
                x-max="1"
                x-description="Select popover, show/hide based on select state."
                x-ref="listbox"
                tabindex="-1"
                role="listbox"
                aria-labelledby="listbox-label"
                style="display: none;"
              >
                <li
                  class="cursor-default select-none relative p-4 text-sm text-white bg-primary-500"
                  x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation."
                  id="listbox-option-0"
                  role="option"
                  :class="{ 'text-white bg-primary-500': activeIndex === 0, 'text-gray-900': !(activeIndex === 0) }"
                >
                  <div class="flex flex-col">
                    <div class="flex justify-between">
                      <p
                        x-state:on="Selected"
                        x-state:off="Not Selected"
                        class="font-semibold"
                        :class="{ 'font-semibold': selectedIndex === 0, 'font-normal': !(selectedIndex === 0) }"
                      >Published</p>
                      <span
                        x-description="Checkmark, only display for selected option."
                        x-state:on="Highlighted"
                        x-state:off="Not Highlighted"
                        class="text-white"
                        :class="{ 'text-white': activeIndex === 0, 'text-primary-500': !(activeIndex === 0) }"
                        v-show="selectedIndex === 0"
                      >
                        <svg
                          class="h-5 w-5"
                          x-description="Heroicon name: solid/check"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                    <p
                      x-state:on="Highlighted"
                      x-state:off="Not Highlighted"
                      class="mt-2 text-primary-200"
                      :class="{ 'text-primary-200': activeIndex === 0, 'text-gray-500': !(activeIndex === 0) }"
                    >This job posting can be viewed by anyone who has the link.</p>
                  </div>
                </li>

                <li
                  class="text-gray-900 cursor-default select-none relative p-4 text-sm"
                  x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation."
                  id="listbox-option-1"
                  role="option"
                  @mouseenter="activeIndex = 1"
                  @mouseleave="activeIndex = null"
                  :class="{ 'text-white bg-primary-500': activeIndex === 1, 'text-gray-900': !(activeIndex === 1) }"
                >
                  <div class="flex flex-col">
                    <div class="flex justify-between">
                      <p
                        x-state:on="Selected"
                        x-state:off="Not Selected"
                        class="font-normal"
                        :class="{ 'font-semibold': selectedIndex === 1, 'font-normal': !(selectedIndex === 1) }"
                      >Draft</p>
                      <span
                        x-description="Checkmark, only display for selected option."
                        class="text-primary-500"
                        :class="{ 'text-white': activeIndex === 1, 'text-primary-500': !(activeIndex === 1) }"
                        v-show="selectedIndex === 1"
                        style="display: none"
                      >
                        <svg
                          class="h-5 w-5"
                          x-description="Heroicon name: solid/check"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                    <p
                      class="text-gray-500 mt-2"
                      :class="{ 'text-primary-200': activeIndex === 1, 'text-gray-500': !(activeIndex === 1) }"
                    >This job posting will no longer be publicly accessible.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </span>

        <!-- Dropdown -->
        <span @keydown.escape.stop="open = false" class="ml-3 relative sm:hidden">
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            id="mobile-menu"
            @click="open = !open"
            aria-haspopup="true"
            :aria-expanded="open"
          >
            More
            <svg
              class="-mr-1 ml-2 h-5 w-5 text-gray-500"
              x-description="Heroicon name: solid/chevron-down"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <div
            x-description="Dropdown menu, show/hide based on menu state."
            v-show="open"
            x-transition:enter="transition ease-out duration-200"
            x-transition:enter-start="transform opacity-0 scale-95"
            x-transition:enter-end="transform opacity-100 scale-100"
            x-transition:leave="transition ease-in duration-75"
            x-transition:leave-start="transform opacity-100 scale-100"
            x-transition:leave-end="transform opacity-0 scale-95"
            class="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="mobile-menu"
            style="display: none;"
          >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >Edit</a>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >View</a>
          </div>
        </span>
      </div>
    </div>
  </header>
</template>
