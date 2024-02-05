<template>
  <article>
    <div class="everybody">
      <div>
        <div class="a-good-time" />
      </div>
    </div>
    <div class="everybody" />
  </article>
</template>

<style scoped>
.everybody:has(.a-good-time) {
  animation: party 21600s forwards;
}
</style>
