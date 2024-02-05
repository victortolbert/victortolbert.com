<template>
  <div>
    <div class="w-64 flex flex-col border-r border-gray-200 pb-4 pt-5">
      <NuxtLink to="/examples/messages" class="brand" data-testid="home-link">
        <LogoSalesLoft class="px-6" />
      </NuxtLink>

      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="h-0 flex flex-1 flex-col overflow-y-auto">
        <div class="relative mt-6 inline-block px-3 text-left">
          <MessageSidebarDropdownButton />
        </div>
        <MessageSidebarSearch />

        <nav class="mt-6 px-3">
          <MessageSidebarMenu />
        </nav>
      </div>
    </div>
  </div>
</template>
