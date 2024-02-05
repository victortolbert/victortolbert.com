<template>
  <div class="relative z-10 h-16 flex flex-shrink-0 border-b border-gray-200 bg-white lg:hidden">
    <MessageSidebarToggle />

    <div class="flex flex-1 justify-between px-4 lg:px-8 sm:px-6">
      <div class="flex flex-1">
        <MessageSearchForm />
      </div>

      <div class="flex items-center">
        <MessageProfileDropdown />
      </div>
    </div>
  </div>
</template>
