<template>
  <div class="hidden lg:flex lg:flex-shrink-0">
    <div class="flex flex-col w-20">
      <div class="flex flex-col h-0 flex-1 overflow-y-auto bg-blue-600">
        <div class="flex-1 flex flex-col">
          <div class="flex-shrink-0 bg-blue-700 py-4 flex items-center justify-center">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="Workflow">
          </div>

          <nav aria-label="Sidebar" class="py-6 flex flex-col items-center space-y-3">
            <a href="#" class="flex items-center p-4 rounded-lg text-blue-200 hover:bg-blue-700">
              <VIconOutlined name="home" />
              <span class="sr-only">Home</span>
            </a>

            <a href="#" class="flex items-center p-4 rounded-lg text-blue-200 hover:bg-blue-700">
              <VIconOutlined name="fire" />
              <span class="sr-only">Trending</span>
            </a>

            <a href="#" class="flex items-center p-4 rounded-lg text-blue-200 hover:bg-blue-700">
                <VIconOutlined name="bookmark-alt" />
              <span class="sr-only">Bookmarks</span>
            </a>

            <a href="#" class="flex items-center p-4 rounded-lg text-blue-200 hover:bg-blue-700">
              <VIconOutlined name="inbox"/>
              <span class="sr-only">Messages</span>
            </a>

            <a href="#" class="flex items-center p-4 rounded-lg text-blue-200 hover:bg-blue-700">
                <VIconOutlined name="user" />
              <span class="sr-only">Profile</span>
            </a>
          </nav>
        </div>

        <div class="flex-shrink-0 flex pb-5">
          <a href="#" class="flex-shrink-0 w-full">
            <img class="block mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80" alt="">
            <div class="sr-only">
              <p>
                Lisa Marie
              </p>
              <p>
                Account settings
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
