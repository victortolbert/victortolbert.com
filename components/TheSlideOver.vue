<script setup lang="ts">
defineProps<{
  modelValue?: boolean
}>()
</script>

<template>
  <div
    relative z-10
    aria-labelledby="slide-over-title"
    role="dialog"
    aria-modal="true"
  >
    <!--
      Background backdrop, show/hide based on slide-over state.

      Entering: "ease-in-out duration-500"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in-out duration-500"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div
      fixed inset-0
      bg-gray-500 bg-opacity-75
      transition-opacity
    />

    <div
      fixed inset-0
      overflow-hidden
    >
      <div
        absolute inset-0
        overflow-hidden
      >
        <div

          pointer-events-none fixed inset-y-0 right-0 max-w-full flex pl-10
        >
          <!--
            Slide-over panel, show/hide based on slide-over state.

            Entering: "transform transition ease-in-out duration-500 sm:duration-700"
              From: "translate-x-full"
              To: "translate-x-0"
            Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
              From: "translate-x-0"
              To: "translate-x-full"
          -->
          <div

            pointer-events-auto max-w-md w-screen
          >
            <div

              h-full flex flex-col overflow-y-scroll bg-white py-6 shadow-xl
            >
              <div px-4 sm:px-6>
                <div flex items-start justify-between>
                  <h2
                    id="slide-over-title"
                    text-base
                    font-semibold
                    leading-6
                    text-gray-900
                  >
                    Panel title
                  </h2>
                  <div ml-3 h-7 flex items-center>
                    <button
                      type="button"

                      rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                    >
                      <span sr-only>Close panel</span>
                      <svg
                        h-6 w-6
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div relative mt-6 flex-1 px-4 sm:px-6>
                <slot>
                  <!-- Your content -->
                </slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
