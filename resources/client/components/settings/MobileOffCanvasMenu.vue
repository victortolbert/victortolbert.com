<template>
  <div class="lg:hidden">
    <div class="fixed inset-0 flex z-40">
      <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
      <div class="fixed inset-0" aria-hidden="true">
        <div class="absolute inset-0 bg-blue-gray-600 opacity-75" />
      </div>
      <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
      <div tabindex="0" class="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
        <div class="absolute top-0 right-0 -mr-12 pt-4">
          <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Close sidebar</span>
            <VIconOutlined name="x" class="text-white" />
          </button>
        </div>
        <div class="pt-5 pb-4">
          <div class="flex-shrink-0 flex items-center px-4">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=blue&shade=600" alt="Workflow">
          </div>
          <nav aria-label="Sidebar" class="mt-5">
            <div class="px-2 space-y-1">
              <a href="#" class="group p-2 rounded-md flex items-center text-base font-medium text-blue-gray-600 hover:bg-blue-gray-50 hover:text-blue-gray-900">
                <VIconOutlined name="home" class="mr-4 text-blue-gray-400 group-hover:text-blue-gray-500" />
                Home
              </a>

              <a href="#" class="group p-2 rounded-md flex items-center text-base font-medium text-blue-gray-600 hover:bg-blue-gray-50 hover:text-blue-gray-900">
                <VIconOutlined name="fire" class="mr-4 text-blue-gray-400 group-hover:text-blue-gray-500" />
                Trending
              </a>

              <a href="#" class="group p-2 rounded-md flex items-center text-base font-medium text-blue-gray-600 hover:bg-blue-gray-50 hover:text-blue-gray-900">
                <VIconOutlined name="bookmark-alt" class="mr-4 text-blue-gray-400 group-hover:text-blue-gray-500" />
                Bookmarks
              </a>

              <a href="#" class="group p-2 rounded-md flex items-center text-base font-medium text-blue-gray-600 hover:bg-blue-gray-50 hover:text-blue-gray-900">
                <VIconOutlined name="inbox" class="mr-4 text-blue-gray-400 group-hover:text-blue-gray-500" />
                Messages
              </a>

              <a href="#" class="group p-2 rounded-md flex items-center text-base font-medium text-blue-gray-600 hover:bg-blue-gray-50 hover:text-blue-gray-900">
                <VIconOutlined name="user" class="mr-4 text-blue-gray-400 group-hover:text-blue-gray-500" />
                Profile
              </a>
            </div>
          </nav>
        </div>

        <div class="flex-shrink-0 flex border-t border-blue-gray-200 p-4">
          <a href="#" class="flex-shrink-0 group block">
            <div class="flex items-center">
              <div>
                <img class="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80" alt="">
              </div>
              <div class="ml-3">
                <p class="text-base font-medium text-blue-gray-700 group-hover:text-blue-gray-900">
                  Lisa Marie
                </p>
                <p class="text-sm font-medium text-blue-gray-500 group-hover:text-blue-gray-700">
                  Account Settings
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="flex-shrink-0 w-14" aria-hidden="true">
        <!-- Force sidebar to shrink to fit close icon -->
      </div>
    </div>
  </div>
</template>
