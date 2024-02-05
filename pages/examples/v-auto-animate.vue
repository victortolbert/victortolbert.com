<script setup>
function randomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16)
  return `#${randomColor}`
}

const colors = ref(Array.from({ length: 20 }, () => randomColor()))
</script>

<template>
  <button class="w-full text-lg" @click="shuffleArray(colors)">
    Shuffle
  </button>
  <div v-auto-animate class="flex flex-wrap">
    <div
      v-for="(color, i) in colors"
      :key="color"
      class="box"
      :style="{ backgroundColor: color }"
      @click="colors.splice(i, 1)"
    />
  </div>
</template>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 5px;
}
button {
  background-color: blue;
}
</style>
