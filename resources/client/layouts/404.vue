<template>
  <main class="px-4 py-10 text-center text-teal-700 dark:text-gray-200">
    404
    <router-view></router-view>

    <div>
      <button class="m-3 mt-8 text-sm btn" @click="router.back()">
        Back
      </button>
    </div>
  </main>
</template>
