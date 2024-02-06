<template>
  <div :class="{ hidden: $store.state.menuOpen === false }">
    <div class="fixed inset-0 z-40 flex">
      <div class="fixed inset-0">
        <div class="absolute inset-0 bg-gray-600 opacity-75" />
      </div>

      <div class="relative max-w-xs w-full flex flex-1 flex-col bg-white pb-4 pt-5">
        <MessageSidebarCloseButton />

        <LogoSalesLoft class="px-4" />

        <div class="mt-5 h-0 flex-1 overflow-y-auto">
          <nav class="px-2">
            <MessageSidebarMenu />
          </nav>
        </div>
      </div>

      <div class="w-14 flex-shrink-0">
        <!-- Dummy element to force sidebar to shrink to fit close icon -->
      </div>
    </div>
  </div>
</template>
