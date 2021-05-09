<template>
  <div class="flex items-center">
    <h1 class="flex-1 text-lg font-medium">Projects</h1>
    <div
      x-data="{ open: false }"
      @keydown.escape.stop="open = false"
      @click.away="open = false"
      class="relative"
    >
      <button
        type="button"
        class="w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        id="sort-menu"
        @click="open = !open"
        aria-haspopup="true"
        x-bind:aria-expanded="open"
      >
        <vti-IconSolid name="sort-ascending" class="mr-3 text-gray-400" />Sort
        <vti-IconSolid name="chevron-down" class="ml-2.5 -mr-1.5 text-gray-400" />
      </button>
      <div
        x-show="open"
        x-description="Dropdown menu, show/hide based on menu state."
        class="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="sort-menu"
        style="display: none;"
      >
        <div class="py-1" role="none">
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >Name</a>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >Date modified</a>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >Date created</a>
        </div>
      </div>
    </div>
  </div>
</template>
