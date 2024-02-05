<template>
  <div class="overflow-hidden rounded-lg bg-white shadow dark:bg-black">
    <div class="border-b border-gray-200 px-4 py-5 dark:border-gray-700 sm:px-6">
      <slot name="header">
        <div class="relative h-8 overflow-hidden border border-gray-400 rounded border-dashed opacity-75">
          <svg class="absolute inset-0 h-full w-full stroke-gray-900/10" fill="none">
            <defs>
              <pattern id="pattern-0ceb5d81-6b62-482c-a66b-f68e73fb5548" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3" />
              </pattern>
            </defs>
            <rect stroke="none" fill="url(#pattern-0ceb5d81-6b62-482c-a66b-f68e73fb5548)" width="100%" height="100%" />
          </svg>
        </div>
      </slot>
    </div>
    <div class="px-4 py-5 sm:p-6">
      <slot>
        <div class="relative h-48 overflow-hidden border border-gray-400 rounded border-dashed opacity-75">
          <svg class="absolute inset-0 h-full w-full stroke-gray-900/10" fill="none">
            <defs>
              <pattern id="pattern-c4a401f9-60f2-4f88-a492-cefe73552092" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3" />
              </pattern>
            </defs>
            <rect stroke="none" fill="url(#pattern-c4a401f9-60f2-4f88-a492-cefe73552092)" width="100%" height="100%" />
          </svg>
        </div>
      </slot>
    </div>
    <div class="border-t border-gray-200 px-4 py-4 dark:border-gray-700 sm:px-6">
      <slot name="footer">
        <div class="relative h-8 overflow-hidden border border-gray-400 rounded border-dashed opacity-75">
          <svg class="absolute inset-0 h-full w-full stroke-gray-900/10" fill="none">
            <defs>
              <pattern id="pattern-d7f13698-f273-417e-9e21-6f736f6dfe37" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3" />
              </pattern>
            </defs>
            <rect stroke="none" fill="url(#pattern-d7f13698-f273-417e-9e21-6f736f6dfe37)" width="100%" height="100%" />
          </svg>
        </div>
      </slot>
    </div>
  </div>
</template>
