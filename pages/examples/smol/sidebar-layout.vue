<template>
  <div data-layout="" class="demo">
    <div class="smol-sidebar">
      <span data-text="">
        Some sidebar content goes here
      </span>
      <span>Main content</span>
    </div>
  </div>
</template>

<style scoped>
.smol-sidebar {
  display: grid;
  grid-template-columns: fit-content(20ch) minmax(min(50vw, 30ch), 1fr);
}
</style>
