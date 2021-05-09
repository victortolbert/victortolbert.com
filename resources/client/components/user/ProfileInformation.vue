<template>
  <!-- Profile section -->
  <div class="py-6 px-4 sm:p-6 lg:pb-8">
    <div>
      <h2 class="text-lg leading-6 font-medium text-gray-900">Profile</h2>
      <p
        class="mt-1 text-sm text-gray-500"
      >This information will be displayed publicly so be careful what you share.</p>
    </div>

    <div class="mt-6 grid grid-cols-12 gap-6">
      <div class="col-span-12 sm:col-span-6">
        <label for="first_name" class="block text-sm font-medium text-gray-700">First name</label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          autocomplete="given-name"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        />
      </div>

      <div class="col-span-12 sm:col-span-6">
        <label for="last_name" class="block text-sm font-medium text-gray-700">Last name</label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          autocomplete="family-name"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        />
      </div>

      <div class="col-span-12">
        <label for="url" class="block text-sm font-medium text-gray-700">URL</label>
        <input
          type="text"
          name="url"
          id="url"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        />
      </div>

      <div class="col-span-12 sm:col-span-6">
        <label for="company" class="block text-sm font-medium text-gray-700">Company</label>
        <input
          type="text"
          name="company"
          id="company"
          autocomplete="organization"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        />
      </div>
    </div>
  </div>
</template>
