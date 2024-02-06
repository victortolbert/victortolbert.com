<template>
  <div>
    <button
      id="options-menu"
      type="button"
      class="group w-full rounded-md px-3.5 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out focus:border-blue-300 active:bg-gray-50 focus:bg-gray-200 hover:bg-gray-50 active:text-gray-800 hover:text-gray-500 focus:outline-none"
      aria-haspopup="true"
      aria-expanded="true"
    >
      <div class="w-full flex items-center justify-between">
        <div class="min-w-0 flex items-center justify-between space-x-3">
          <img
            class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
            src="/assets/images/avatar.jpeg"
            alt=""
          >
          <div class="min-w-0 flex-1">
            <h2 class="truncate text-sm font-medium leading-5 text-gray-900">
              Victor Tolbert
            </h2>
            <p class="truncate text-sm leading-5 text-gray-500">
              @victortolbert
            </p>
          </div>
        </div>
        <!-- Heroicon name: selector -->
        <svg
          class="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </button>
  </div>
</template>
