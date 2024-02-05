<template>
  <div class="h-screen flex overflow-hidden bg-white">
    <MessageSidebar class="hidden lg:flex lg:flex-shrink-0" />
    <MessageSidebarOffCanvas class="lg:hidden" />

    <div class="w-0 flex flex-1 flex-col overflow-hidden">
      <MessageSearchHeader />

      <main class="relative z-0 flex-1 overflow-y-auto focus:outline-none" tabindex="0">
        <MessagePageHeader />

        <NuxtPage />
      </main>
    </div>
  </div>
</template>
