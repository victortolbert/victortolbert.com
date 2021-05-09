<template>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <div class="px-4 sm:px-0">
      <h2 class="text-lg font-medium text-gray-900">Candidates</h2>

      <!-- Tabs -->
      <div class="sm:hidden">
        <label for="tabs" class="sr-only">Select a tab</label>
        <select
          id="tabs"
          name="tabs"
          class="mt-4 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
        >
          <option>Applied</option>

          <option>Phone Screening</option>

          <option selected>Interview</option>

          <option>Offer</option>

          <option>Disqualified</option>
        </select>
      </div>
      <div class="hidden sm:block">
        <div class="border-b border-gray-200">
          <nav class="mt-2 -mb-px flex space-x-8" aria-label="Tabs">
            <!-- Current: "border-primary-500 text-primary-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200" -->

            <a
              href="#"
              class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            >
              Applied
              <!-- Current: "bg-primary-100 text-primary-600", Default: "bg-gray-100 text-gray-900" -->
              <span
                class="bg-gray-100 text-gray-900 hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
              >2</span>
            </a>

            <a
              href="#"
              class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            >
              Phone Screening
              <!-- Current: "bg-primary-100 text-primary-600", Default: "bg-gray-100 text-gray-900" -->
              <span
                class="bg-gray-100 text-gray-900 hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
              >4</span>
            </a>

            <a
              href="#"
              class="border-primary-500 text-primary-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            >
              Interview
              <!-- Current: "bg-primary-100 text-primary-600", Default: "bg-gray-100 text-gray-900" -->
              <span
                class="bg-primary-100 text-primary-600 hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
              >6</span>
            </a>

            <a
              href="#"
              class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            >Offer</a>

            <a
              href="#"
              class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            >Disqualified</a>
          </nav>
        </div>
      </div>
    </div>

    <!-- Stacked list -->
    <ul
      class="mt-5 border-t border-gray-200 divide-y divide-gray-200 sm:mt-0 sm:border-t-0"
      role="list"
    >
      <li>
        <a href="#" class="group block">
          <div class="flex items-center py-5 px-4 sm:py-6 sm:px-0">
            <div class="min-w-0 flex-1 flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="h-12 w-12 rounded-full group-hover:opacity-75"
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&amp;ixqx=iXNbLPGHnb&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt
                />
              </div>
              <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <p class="text-sm font-medium text-primary-600 truncate">Emily Selman</p>
                  <p class="mt-2 flex items-center text-sm text-gray-500">
                    <svg
                      class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      x-description="Heroicon name: solid/mail"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                      />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span class="truncate">emilyselman@example.com</span>
                  </p>
                </div>
                <div class="hidden md:block">
                  <div>
                    <p class="text-sm text-gray-900">
                      Applied on
                      <!-- space -->
                      <time datetime="2020-01-07">January 7, 2020</time>
                    </p>
                    <p class="mt-2 flex items-center text-sm text-gray-500">
                      <svg
                        class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                        x-description="Heroicon name: solid/check-circle"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Completed phone screening
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <svg
                class="h-5 w-5 text-gray-400 group-hover:text-gray-700"
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
            </div>
          </div>
        </a>
      </li>

      <li>
        <a href="#" class="group block">
          <div class="flex items-center py-5 px-4 sm:py-6 sm:px-0">
            <div class="min-w-0 flex-1 flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="h-12 w-12 rounded-full group-hover:opacity-75"
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixqx=iXNbLPGHnb&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt
                />
              </div>
              <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <p class="text-sm font-medium text-primary-600 truncate">Michael Foster</p>
                  <p class="mt-2 flex items-center text-sm text-gray-500">
                    <svg
                      class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      x-description="Heroicon name: solid/mail"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                      />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span class="truncate">michaelfoster@example.com</span>
                  </p>
                </div>
                <div class="hidden md:block">
                  <div>
                    <p class="text-sm text-gray-900">
                      Applied on
                      <!-- space -->
                      <time datetime="2020-01-07">January 7, 2020</time>
                    </p>
                    <p class="mt-2 flex items-center text-sm text-gray-500">
                      <svg
                        class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                        x-description="Heroicon name: solid/check-circle"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Completed phone screening
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <svg
                class="h-5 w-5 text-gray-400 group-hover:text-gray-700"
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
            </div>
          </div>
        </a>
      </li>

      <li>
        <a href="#" class="group block">
          <div class="flex items-center py-5 px-4 sm:py-6 sm:px-0">
            <div class="min-w-0 flex-1 flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="h-12 w-12 rounded-full group-hover:opacity-75"
                  src="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&amp;ixqx=iXNbLPGHnb&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt
                />
              </div>
              <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <p class="text-sm font-medium text-primary-600 truncate">Emma Dorsey</p>
                  <p class="mt-2 flex items-center text-sm text-gray-500">
                    <svg
                      class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      x-description="Heroicon name: solid/mail"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                      />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span class="truncate">emmadorsey@example.com</span>
                  </p>
                </div>
                <div class="hidden md:block">
                  <div>
                    <p class="text-sm text-gray-900">
                      Applied on
                      <!-- space -->
                      <time datetime="2020-01-07">January 7, 2020</time>
                    </p>
                    <p class="mt-2 flex items-center text-sm text-gray-500">
                      <svg
                        class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                        x-description="Heroicon name: solid/check-circle"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Completed phone screening
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <svg
                class="h-5 w-5 text-gray-400 group-hover:text-gray-700"
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
            </div>
          </div>
        </a>
      </li>

      <li>
        <a href="#" class="group block">
          <div class="flex items-center py-5 px-4 sm:py-6 sm:px-0">
            <div class="min-w-0 flex-1 flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="h-12 w-12 rounded-full group-hover:opacity-75"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&amp;ixqx=iXNbLPGHnb&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt
                />
              </div>
              <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <p class="text-sm font-medium text-primary-600 truncate">Anna Roberts</p>
                  <p class="mt-2 flex items-center text-sm text-gray-500">
                    <svg
                      class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      x-description="Heroicon name: solid/mail"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                      />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span class="truncate">annaroberts@example.com</span>
                  </p>
                </div>
                <div class="hidden md:block">
                  <div>
                    <p class="text-sm text-gray-900">
                      Applied on
                      <!-- space -->
                      <time datetime="2020-01-07">January 7, 2020</time>
                    </p>
                    <p class="mt-2 flex items-center text-sm text-gray-500">
                      <svg
                        class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                        x-description="Heroicon name: solid/check-circle"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Completed phone screening
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <svg
                class="h-5 w-5 text-gray-400 group-hover:text-gray-700"
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
            </div>
          </div>
        </a>
      </li>

      <li>
        <a href="#" class="group block">
          <div class="flex items-center py-5 px-4 sm:py-6 sm:px-0">
            <div class="min-w-0 flex-1 flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="h-12 w-12 rounded-full group-hover:opacity-75"
                  src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixqx=iXNbLPGHnb&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt
                />
              </div>
              <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <p class="text-sm font-medium text-primary-600 truncate">Leonard Krasner</p>
                  <p class="mt-2 flex items-center text-sm text-gray-500">
                    <svg
                      class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      x-description="Heroicon name: solid/mail"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                      />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span class="truncate">leonardkrasner@example.com</span>
                  </p>
                </div>
                <div class="hidden md:block">
                  <div>
                    <p class="text-sm text-gray-900">
                      Applied on
                      <!-- space -->
                      <time datetime="2020-01-07">January 7, 2020</time>
                    </p>
                    <p class="mt-2 flex items-center text-sm text-gray-500">
                      <svg
                        class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                        x-description="Heroicon name: solid/check-circle"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Completed phone screening
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <svg
                class="h-5 w-5 text-gray-400 group-hover:text-gray-700"
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
            </div>
          </div>
        </a>
      </li>

      <li>
        <a href="#" class="group block">
          <div class="flex items-center py-5 px-4 sm:py-6 sm:px-0">
            <div class="min-w-0 flex-1 flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="h-12 w-12 rounded-full group-hover:opacity-75"
                  src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixqx=iXNbLPGHnb&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt
                />
              </div>
              <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <p class="text-sm font-medium text-primary-600 truncate">Floyd Miles</p>
                  <p class="mt-2 flex items-center text-sm text-gray-500">
                    <svg
                      class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      x-description="Heroicon name: solid/mail"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                      />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span class="truncate">floydmiles@example.com</span>
                  </p>
                </div>
                <div class="hidden md:block">
                  <div>
                    <p class="text-sm text-gray-900">
                      Applied on
                      <!-- space -->
                      <time datetime="2020-01-07">January 7, 2020</time>
                    </p>
                    <p class="mt-2 flex items-center text-sm text-gray-500">
                      <svg
                        class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                        x-description="Heroicon name: solid/check-circle"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Completed phone screening
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <svg
                class="h-5 w-5 text-gray-400 group-hover:text-gray-700"
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
            </div>
          </div>
        </a>
      </li>

      <li>
        <a href="#" class="group block">
          <div class="flex items-center py-5 px-4 sm:py-6 sm:px-0">
            <div class="min-w-0 flex-1 flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="h-12 w-12 rounded-full group-hover:opacity-75"
                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixqx=iXNbLPGHnb&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt
                />
              </div>
              <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <p class="text-sm font-medium text-primary-600 truncate">Benjamin Russel</p>
                  <p class="mt-2 flex items-center text-sm text-gray-500">
                    <svg
                      class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      x-description="Heroicon name: solid/mail"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                      />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span class="truncate">benjaminrussel@example.com</span>
                  </p>
                </div>
                <div class="hidden md:block">
                  <div>
                    <p class="text-sm text-gray-900">
                      Applied on
                      <!-- space -->
                      <time datetime="2020-01-07">January 7, 2020</time>
                    </p>
                    <p class="mt-2 flex items-center text-sm text-gray-500">
                      <svg
                        class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                        x-description="Heroicon name: solid/check-circle"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Completed phone screening
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <svg
                class="h-5 w-5 text-gray-400 group-hover:text-gray-700"
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
            </div>
          </div>
        </a>
      </li>

      <li>
        <a href="#" class="group block">
          <div class="flex items-center py-5 px-4 sm:py-6 sm:px-0">
            <div class="min-w-0 flex-1 flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="h-12 w-12 rounded-full group-hover:opacity-75"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixqx=iXNbLPGHnb&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt
                />
              </div>
              <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <p class="text-sm font-medium text-primary-600 truncate">Courtney Henry</p>
                  <p class="mt-2 flex items-center text-sm text-gray-500">
                    <svg
                      class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      x-description="Heroicon name: solid/mail"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                      />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span class="truncate">courtneyhenry@example.com</span>
                  </p>
                </div>
                <div class="hidden md:block">
                  <div>
                    <p class="text-sm text-gray-900">
                      Applied on
                      <!-- space -->
                      <time datetime="2020-01-07">January 7, 2020</time>
                    </p>
                    <p class="mt-2 flex items-center text-sm text-gray-500">
                      <svg
                        class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                        x-description="Heroicon name: solid/check-circle"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Completed phone screening
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <svg
                class="h-5 w-5 text-gray-400 group-hover:text-gray-700"
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
            </div>
          </div>
        </a>
      </li>

      <li>
        <a href="#" class="group block">
          <div class="flex items-center py-5 px-4 sm:py-6 sm:px-0">
            <div class="min-w-0 flex-1 flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="h-12 w-12 rounded-full group-hover:opacity-75"
                  src="https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&amp;ixqx=iXNbLPGHnb&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt
                />
              </div>
              <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <p class="text-sm font-medium text-primary-600 truncate">Lawrence Hunter</p>
                  <p class="mt-2 flex items-center text-sm text-gray-500">
                    <svg
                      class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      x-description="Heroicon name: solid/mail"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                      />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span class="truncate">lawrencehunter@example.com</span>
                  </p>
                </div>
                <div class="hidden md:block">
                  <div>
                    <p class="text-sm text-gray-900">
                      Applied on
                      <!-- space -->
                      <time datetime="2020-01-07">January 7, 2020</time>
                    </p>
                    <p class="mt-2 flex items-center text-sm text-gray-500">
                      <svg
                        class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                        x-description="Heroicon name: solid/check-circle"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Completed phone screening
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <svg
                class="h-5 w-5 text-gray-400 group-hover:text-gray-700"
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
            </div>
          </div>
        </a>
      </li>

      <li>
        <a href="#" class="group block">
          <div class="flex items-center py-5 px-4 sm:py-6 sm:px-0">
            <div class="min-w-0 flex-1 flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="h-12 w-12 rounded-full group-hover:opacity-75"
                  src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&amp;ixqx=iXNbLPGHnb&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt
                />
              </div>
              <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <p class="text-sm font-medium text-primary-600 truncate">Alicia Bell</p>
                  <p class="mt-2 flex items-center text-sm text-gray-500">
                    <svg
                      class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      x-description="Heroicon name: solid/mail"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                      />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span class="truncate">aliciabell@example.com</span>
                  </p>
                </div>
                <div class="hidden md:block">
                  <div>
                    <p class="text-sm text-gray-900">
                      Applied on
                      <!-- space -->
                      <time datetime="2020-01-07">January 7, 2020</time>
                    </p>
                    <p class="mt-2 flex items-center text-sm text-gray-500">
                      <svg
                        class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                        x-description="Heroicon name: solid/check-circle"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Completed phone screening
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <svg
                class="h-5 w-5 text-gray-400 group-hover:text-gray-700"
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
            </div>
          </div>
        </a>
      </li>
    </ul>

    <!-- Pagination -->
    <nav
      class="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0"
      aria-label="Pagination"
    >
      <div class="-mt-px w-0 flex-1 flex">
        <a
          href="#"
          class="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-200"
        >
          <svg
            class="mr-3 h-5 w-5 text-gray-400"
            x-description="Heroicon name: solid/arrow-narrow-left"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
          Previous
        </a>
      </div>
      <div class="hidden md:-mt-px md:flex">
        <a
          href="#"
          class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
        >1</a>
        <!-- Current: "border-primary-500 text-primary-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200" -->
        <a
          href="#"
          class="border-primary-500 text-primary-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
          aria-current="page"
        >2</a>
        <a
          href="#"
          class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
        >3</a>
        <a
          href="#"
          class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
        >4</a>
        <a
          href="#"
          class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
        >5</a>
        <a
          href="#"
          class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
        >6</a>
      </div>
      <div class="-mt-px w-0 flex-1 flex justify-end">
        <a
          href="#"
          class="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-200"
        >
          Next
          <svg
            class="ml-3 h-5 w-5 text-gray-400"
            x-description="Heroicon name: solid/arrow-narrow-right"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </nav>
  </div>
</template>
