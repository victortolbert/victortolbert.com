<script setup>
</script>

<template>
  <div class="mt-6 flex flex-col lg:flex-row">
    <div class="flex-grow space-y-6">
      <div>
        <label for="username" class="block text-sm font-medium text-gray-700">
          Username
        </label>
        <div class="mt-1 flex rounded-md shadow-sm">
          <span
            class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm"
          >
            example.com/
          </span>
          <input
            id="username"
            type="text"
            name="username"
            autocomplete="username"
            class="focus:ring-primary-500 focus:border-primary-500 block w-full min-w-0 flex-grow rounded-none rounded-r-md border-gray-300 sm:text-sm"
            value="vtolbert"
          >
        </div>
      </div>

      <div>
        <UFormGroup name="about" label="About" help="Brief description for your profile. URLs are hyperlinked.">
          <UTextarea
            id="about"
          />
        </UFormGroup>
      </div>
    </div>

    <div class="mt-6 flex-grow lg:ml-6 lg:mt-0 lg:flex-shrink-0 lg:flex-grow-0">
      <p class="text-sm font-medium text-gray-700" aria-hidden="true">
        Photo
      </p>
      <div class="mt-1 lg:hidden">
        <div class="flex items-center">
          <div
            class="inline-block h-12 w-12 flex-shrink-0 overflow-hidden rounded-full"
            aria-hidden="true"
          >
            <NuxtImg
              class="h-full w-full rounded-full"
              src="/assets/images/people/victor-tolbert.jpeg"
              alt=""
            />
          </div>
          <div class="ml-5 rounded-md shadow-sm">
            <div
              class="focus-within:ring-primary-500 group relative flex items-center justify-center rounded-md border border-gray-300 px-3 py-2 focus-within:ring-2 focus-within:ring-offset-2 hover:bg-gray-50"
            >
              <label
                for="user_photo"
                class="pointer-events-none relative text-sm font-medium leading-4 text-gray-700"
              >
                <span>Change</span>
                <span class="sr-only"> user photo</span>
              </label>
              <input
                id="user_photo"
                name="user_photo"
                type="file"
                class="absolute h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
              >
            </div>
          </div>
        </div>
      </div>

      <div class="relative hidden overflow-hidden rounded-full lg:block">
        <NuxtImg
          class="relative h-40 w-40 rounded-full"
          src="/assets/images/people/victor-tolbert.jpeg"
          alt=""
        />
        <label
          for="user-photo"
          class="absolute inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-75 text-sm font-medium text-white opacity-0 focus-within:opacity-100 hover:opacity-100"
        >
          <span>Change</span>
          <span class="sr-only"> user photo</span>
          <input
            id="user-photo"
            type="file"
            name="user-photo"
            class="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
          >
        </label>
      </div>
    </div>
  </div>
</template>
