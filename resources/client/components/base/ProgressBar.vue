<template>
  <div class="flex flex-col items-end">
    <span
      class="mb-1 text-xs text-gray-600"
      x-text="`${Math.round(value/total * 100)}% complete`"
      >67% complete</span
    >
    <span
      class="relative flex items-center w-full p-3 overflow-hidden bg-gray-200 rounded-md"
    >
      <span
        class="absolute left-0 w-full h-full transition-all duration-300 bg-teal-500"
        :style="`width: ${(value / total) * 100}%`"
        style="width: 66.66666666666666%"
      />
    </span>
  </div>
</template>
