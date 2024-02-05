<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <article class="overflow-hidden rounded-lg">
    <header class="px-4 py-3">
      <div class="border-b border-gray-200 px-4 py-4 sm:px-6">
        <div
          class="flex flex-wrap items-center justify-between -ml-4 -mt-2 sm:flex-nowrap"
        >
          <div class="ml-4">
            <h3 class="flex items-center text-xl leading-6">
              <span>{{ title }}</span>
            </h3>
          </div>
          <div class="ml-4 mt-2 flex-shrink-0" />
        </div>
      </div>
    </header>
    <div class="px-4 sm:px-6">
      <div class="mb-8 px-4 sm:px-6">
        <nav aria-label="Progress">
          <ol class="overflow-hidden">
            <li class="relative pb-10">
              <!-- Complete Step -->
              <div
                class="bg-primary-600 absolute left-4 top-4 mt-0.5 h-full w-0.5 -ml-px"
                aria-hidden="true"
              />
              <a href="#" class="group relative flex items-start">
                <span class="h-9 flex items-center">
                  <span
                    class="bg-primary-600 group-hover:bg-primary-800 relative z-10 h-8 w-8 flex items-center justify-center rounded-full"
                  >
                    <!-- Heroicon name: check -->
                    <svg
                      class="h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </span>
                <span class="ml-4 min-w-0 flex flex-col">
                  <span class="text-xs font-semibold tracking-wide uppercase">Training Module 1</span>
                  <span class="text-sm text-gray-500">
                    Vitae sed mi luctus laoreet.
                  </span>
                </span>
              </a>
            </li>

            <li class="relative pb-10">
              <!-- Current Step -->
              <div
                class="absolute left-4 top-4 mt-0.5 h-full w-0.5 bg-gray-300 -ml-px"
                aria-hidden="true"
              />
              <a
                href="#"
                class="group relative flex items-start"
                aria-current="step"
              >
                <span class="h-9 flex items-center" aria-hidden="true">
                  <span
                    class="border-primary-600 relative z-10 h-8 w-8 flex items-center justify-center border-2 rounded-full bg-white"
                  >
                    <span
                      class="bg-primary-600 h-2.5 w-2.5 rounded-full"
                    />
                  </span>
                </span>
                <span class="ml-4 min-w-0 flex flex-col">
                  <span
                    class="text-primary-600 text-xs font-semibold tracking-wide uppercase"
                  >Training Module 2</span>
                  <span class="text-sm text-gray-500">Cursus semper viverra facilisis et et some more.</span>
                </span>
              </a>
            </li>

            <li class="relative pb-10">
              <div
                class="absolute left-4 top-4 mt-0.5 h-full w-0.5 bg-gray-300 -ml-px"
                aria-hidden="true"
              />
              <a href="#" class="group relative flex items-start">
                <span class="h-9 flex items-center" aria-hidden="true">
                  <span
                    class="relative z-10 h-8 w-8 flex items-center justify-center border-2 border-gray-300 rounded-full bg-white group-hover:border-gray-400"
                  >
                    <span
                      class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                    />
                  </span>
                </span>
                <span class="ml-4 min-w-0 flex flex-col">
                  <span
                    class="text-xs font-semibold tracking-wide uppercase text-gray-500"
                  >Training Module 3</span>
                  <span class="text-sm text-gray-500">Penatibus eu quis ante.</span>
                </span>
              </a>
            </li>

            <li class="relative pb-10">
              <div
                class="absolute left-4 top-4 mt-0.5 h-full w-0.5 bg-gray-300 -ml-px"
                aria-hidden="true"
              />
              <a href="#" class="group relative flex items-start">
                <span class="h-9 flex items-center" aria-hidden="true">
                  <span
                    class="relative z-10 h-8 w-8 flex items-center justify-center border-2 border-gray-300 rounded-full bg-white group-hover:border-gray-400"
                  >
                    <span
                      class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                    />
                  </span>
                </span>
                <span class="ml-4 min-w-0 flex flex-col">
                  <span
                    class="text-xs font-semibold tracking-wide uppercase text-gray-500"
                  >Training Module 4</span>
                  <span class="text-sm text-gray-500">Faucibus nec enim leo et.</span>
                </span>
              </a>
            </li>

            <li class="relative">
              <a href="#" class="group relative flex items-start">
                <span class="h-9 flex items-center" aria-hidden="true">
                  <span
                    class="relative z-10 h-8 w-8 flex items-center justify-center border-2 border-gray-300 rounded-full bg-white group-hover:border-gray-400"
                  >
                    <span
                      class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                    />
                  </span>
                </span>
                <span class="ml-4 min-w-0 flex flex-col">
                  <span
                    class="text-xs font-semibold tracking-wide uppercase text-gray-500"
                  >
                    Training Module 5
                  </span>
                  <span class="text-sm text-gray-500">Iusto et officia maiores porro ad non quas.</span>
                </span>
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </article>
</template>
