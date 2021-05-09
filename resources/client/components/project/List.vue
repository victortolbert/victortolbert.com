<template>
  <div class="sm:hidden">
    <div class="px-4 sm:px-6">
      <h2 class="text-xs font-medium tracking-wide text-gray-500 uppercase">Projects</h2>
    </div>
    <ul class="mt-3 border-t border-gray-200 divide-y divide-gray-100">
      <li>
        <a href="#" class="flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
          <div class="flex items-center space-x-3 truncate">
            <div class="w-2.5 h-2.5 flex-shrink-0 rounded-full bg-pink-600"></div>
            <p class="text-sm font-medium leading-6 truncate">
              GraphQL API
              <span class="font-normal text-gray-500 truncate">in Engineering</span>
            </p>
          </div>
          <!-- Heroicon name: chevron-right -->
          <svg
            class="w-5 h-5 ml-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </li>
      <!-- More project rows... -->
    </ul>
  </div>

  <div class="hidden sm:block">
    <div class="inline-block min-w-full align-middle border-b border-gray-200">
      <table class="min-w-full">
        <thead>
          <tr class="border-t border-gray-200">
            <th
              class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
            >
              <span class="lg:pl-2">Project</span>
            </th>
            <th
              class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
            >Members</th>
            <th
              class="hidden px-6 py-3 text-xs font-medium leading-4 tracking-wider text-right text-gray-500 uppercase border-b border-gray-200 md:table-cell bg-gray-50"
            >Last updated</th>
            <th
              class="py-3 pr-6 text-xs font-medium leading-4 tracking-wider text-right text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
            ></th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-100">
          <tr class="group hover:bg-primary-50 hover:shadow">
            <td
              class="w-full px-6 py-3 text-sm font-medium leading-5 text-gray-900 whitespace-no-wrap max-w-0"
            >
              <div class="flex items-center space-x-3 lg:pl-2">
                <div class="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-pink-600"></div>
                <a href="#" class="truncate hover:text-gray-600">
                  <span>
                    GraphQL API
                    <span class="font-normal text-gray-500">in Engineering</span>
                  </span>
                </a>
              </div>
            </td>
            <td class="px-6 py-3 text-sm font-medium leading-5 text-gray-500">
              <div class="flex items-center space-x-2">
                <div class="flex flex-shrink-0 -space-x-1">
                  <img
                    class="w-6 h-6 text-white rounded-full max-w-none shadow-solid"
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                    alt
                  />
                  <img
                    class="w-6 h-6 text-white rounded-full max-w-none shadow-solid"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                    alt
                  />
                  <img
                    class="w-6 h-6 text-white rounded-full max-w-none shadow-solid"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                    alt
                  />
                  <img
                    class="w-6 h-6 text-white rounded-full max-w-none shadow-solid"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                    alt
                  />
                </div>
                <span class="flex-shrink-0 text-xs font-medium leading-5">+8</span>
              </div>
            </td>
            <td
              class="hidden px-6 py-3 text-sm leading-5 text-right text-gray-500 whitespace-no-wrap md:table-cell"
            >March 17, 2020</td>
            <td class="pr-6">
              <div class="relative flex items-center justify-end">
                <button
                  id="project-options-menu-0"
                  aria-has-popup="true"
                  type="button"
                  class="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition duration-150 ease-in-out bg-transparent rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100"
                >
                  <!-- Heroicon name: dots-vertical -->
                  <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                    />
                  </svg>
                </button>
                <!--
                      Dropdown panel, show/hide based on dropdown state.

                      Entering: "transition ease-out duration-100"
                        From: "transform opacity-0 scale-95"
                        To: "transform opacity-100 scale-100"
                      Leaving: "transition ease-in duration-75"
                        From: "transform opacity-100 scale-100"
                        To: "transform opacity-0 scale-95"
                -->
                <div
                  class="absolute top-0 hidden w-48 mx-3 mt-1 origin-top-right rounded-md shadow-lg right-7"
                >
                  <div
                    class="z-10 bg-white rounded-md shadow-xs"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="project-options-menu-0"
                  >
                    <div class="py-1">
                      <a
                        href="#"
                        class="flex items-center px-4 py-2 text-sm leading-5 text-gray-700 group hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                        role="menuitem"
                      >
                        <!-- Heroicon name: pencil-alt -->
                        <svg
                          class="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"
                          />
                        </svg> Edit
                      </a>
                      <a
                        href="#"
                        class="flex items-center px-4 py-2 text-sm leading-5 text-gray-700 group hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                        role="menuitem"
                      >
                        <!-- Heroicon name: duplicate -->
                        <svg
                          class="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"
                          />
                          <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
                        </svg> Duplicate
                      </a>
                      <a
                        href="#"
                        class="flex items-center px-4 py-2 text-sm leading-5 text-gray-700 group hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                        role="menuitem"
                      >
                        <!-- Heroicon name: user-add -->
                        <svg
                          class="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
                          />
                        </svg> Share
                      </a>
                    </div>
                    <div class="border-t border-gray-100"></div>
                    <div class="py-1">
                      <a
                        href="#"
                        class="flex items-center px-4 py-2 text-sm leading-5 text-gray-700 group hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                        role="menuitem"
                      >
                        <!-- Heroicon name: trash -->
                        <svg
                          class="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clip-rule="evenodd"
                          />
                        </svg> Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <!-- More project rows... -->
        </tbody>
      </table>
    </div>
  </div>
</template>
