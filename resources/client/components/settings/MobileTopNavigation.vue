<template>
    <!-- Mobile top navigation -->
    <div class="lg:hidden">
      <div class="bg-blue-600 py-2 px-4 flex items-center justify-between sm:px-6">
        <div>
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="Workflow">
        </div>
        <div>
          <button type="button" class="-mr-3 h-12 w-12 inline-flex items-center justify-center bg-blue-600 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open sidebar</span>
            <VIconOutlined name="menu" />
          </button>
        </div>
      </div>
    </div>
</template>
