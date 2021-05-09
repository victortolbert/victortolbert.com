<template>
  <div class="h-screen overflow-hidden bg-gray-100 flex flex-col">
    <InboxTopNavbar />

    <!-- Bottom section -->
    <div class="min-h-0 flex-1 flex overflow-hidden">
      <InboxSidebar />

      <!-- Main area -->
      <main class="min-w-0 flex-1 border-t border-gray-200 xl:flex">
        <section
          aria-labelledby="message-heading"
          class="min-w-0 flex-1 h-full flex flex-col overflow-hidden xl:order-last"
        >
          <!-- Top section -->
          <div class="flex-shrink-0 bg-white border-b border-gray-200">
            <InboxToolbar />
          </div>

          <div class="min-h-0 flex-1 overflow-y-auto">
            <div class="bg-white pt-5 pb-6 shadow">
              <div class="px-4 sm:flex sm:justify-between sm:items-baseline sm:px-6 lg:px-8">
                <div class="sm:w-0 sm:flex-1">
                  <h1
                    id="message-heading"
                    class="text-lg font-medium text-gray-900"
                  >Re: New pricing for existing customers</h1>
                  <p class="mt-1 text-sm text-gray-500 truncate">joearmstrong@example.com</p>
                </div>

                <div
                  class="mt-4 flex items-center justify-between sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start"
                >
                  <span
                    class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-cyan-100 text-cyan-800"
                  >Open</span>
                  <div class="ml-3 relative inline-block text-left">
                    <div>
                      <button
                        type="button"
                        class="-my-2 p-2 rounded-full bg-white flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        id="menu-4"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        <span class="sr-only">Open options</span>
                        <vti-IconSolid name="dots-vertical" />
                      </button>
                    </div>

                    <!--
                    Dropdown menu, show/hide based on menu state.

                    Entering: "transition ease-out duration-100"
                      From: "transform opacity-0 scale-95"
                      To: "transform opacity-100 scale-100"
                    Leaving: "transition ease-in duration-75"
                      From: "transform opacity-100 scale-100"
                      To: "transform opacity-0 scale-95"
                    -->
                    <div
                      class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-4"
                    >
                      <div class="py-1" role="none">
                        <button
                          type="button"
                          class="w-full flex justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          <span>Copy email address</span>
                        </button>
                        <a
                          href="#"
                          class="flex justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          <span>Previous conversations</span>
                        </a>
                        <a
                          href="#"
                          class="flex justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          <span>View original</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Thread section-->
            <ul class="py-4 space-y-2 sm:px-6 sm:space-y-4 lg:px-8">
              <li class="bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6">
                <div class="sm:flex sm:justify-between sm:items-baseline">
                  <h3 class="text-base font-medium">
                    <span class="text-gray-900">Joe Armstrong</span>
                    <span class="text-gray-600">wrote</span>
                  </h3>
                  <p class="mt-1 text-sm text-gray-600 whitespace-nowrap sm:mt-0 sm:ml-3">
                    <time datetime="2021-01-28T19:24">Yesterday at 7:24am</time>
                  </p>
                </div>
                <div class="mt-4 space-y-6 text-sm text-gray-800">
                  <p>Thanks so much! Can't wait to try it out.</p>
                </div>
              </li>

              <li class="bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6">
                <div class="sm:flex sm:justify-between sm:items-baseline">
                  <h3 class="text-base font-medium">
                    <span class="text-gray-900">Monica White</span>
                    <span class="text-gray-600">wrote</span>
                  </h3>
                  <p class="mt-1 text-sm text-gray-600 whitespace-nowrap sm:mt-0 sm:ml-3">
                    <time datetime="2021-01-27T16:35">Wednesday at 4:35pm</time>
                  </p>
                </div>
                <div class="mt-4 space-y-6 text-sm text-gray-800">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.</p>
                  <p>Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.</p>
                  <p>
                    <strong style="font-weight: 600;">Monica White</strong>
                    <br />Customer Service
                  </p>
                </div>
              </li>

              <li class="bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6">
                <div class="sm:flex sm:justify-between sm:items-baseline">
                  <h3 class="text-base font-medium">
                    <span class="text-gray-900">Joe Armstrong</span>
                    <span class="text-gray-600">wrote</span>
                  </h3>
                  <p class="mt-1 text-sm text-gray-600 whitespace-nowrap sm:mt-0 sm:ml-3">
                    <time datetime="2021-01-27T16:09">Wednesday at 4:09pm</time>
                  </p>
                </div>
                <div class="mt-4 space-y-6 text-sm text-gray-800">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.</p>
                  <p>Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.</p>
                  <p>– Joe</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <!-- Message list-->
        <InboxMessageList />
      </main>
    </div>
  </div>
</template>
