<template>
  <fieldset>
    <div
      class="space-y-2 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:px-6 sm:py-5"
    >
      <div>
        <legend class="text-sm font-medium text-gray-900">Privacy</legend>
      </div>
      <div class="space-y-5 sm:col-span-2">
        <div class="space-y-5 sm:mt-0">
          <div class="relative flex items-start">
            <div class="absolute flex items-center h-5">
              <input
                id="public_access"
                name="privacy"
                aria-describedby="public_access_description"
                type="radio"
                class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300"
                checked
              />
            </div>
            <div class="pl-7 text-sm">
              <label for="public_access" class="font-medium text-gray-900">Public access</label>
              <p
                id="public_access_description"
                class="text-gray-500"
              >Everyone with the link will see this project</p>
            </div>
          </div>
          <div class="relative flex items-start">
            <div class="absolute flex items-center h-5">
              <input
                id="restricted_access"
                name="privacy"
                aria-describedby="restricted_access_description"
                type="radio"
                class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300"
              />
            </div>
            <div class="pl-7 text-sm">
              <label
                for="restricted_access"
                class="font-medium text-gray-900"
              >Private to Project Members</label>
              <p
                id="restricted_access_description"
                class="text-gray-500"
              >Only members of this project would be able to access</p>
            </div>
          </div>
          <div class="relative flex items-start">
            <div class="absolute flex items-center h-5">
              <input
                id="private_access"
                name="privacy"
                aria-describedby="private_access_description"
                type="radio"
                class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300"
              />
            </div>
            <div class="pl-7 text-sm">
              <label for="private_access" class="font-medium text-gray-900">Private to you</label>
              <p
                id="private_access_description"
                class="text-gray-500"
              >You are the only one able to access this project</p>
            </div>
          </div>
        </div>
        <hr class="border-gray-200" />
        <div
          class="flex flex-col space-between space-y-4 sm:flex-row sm:items-center sm:space-between sm:space-y-0"
        >
          <div class="flex-1">
            <a
              href="#"
              class="group flex items-center text-sm text-primary-600 hover:text-primary-900 font-medium space-x-2.5"
            >
              <svg
                class="h-5 w-5 text-primary-500 group-hover:text-primary-900"
                x-description="Heroicon name: solid/link"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Copy link</span>
            </a>
          </div>
          <div>
            <a
              href="#"
              class="group flex items-center text-sm text-gray-500 hover:text-gray-900 space-x-2.5"
            >
              <svg
                class="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                x-description="Heroicon name: solid/question-mark-circle"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Learn more about sharing</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </fieldset>
</template>
