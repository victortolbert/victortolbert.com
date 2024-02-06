<script setup>
// generate random color
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
  <div>
    <div
      v-for="(color, i) in colors"
      :key="color"
      v-motion-pop-visible
      class="box"
      :style="{ backgroundColor: color }"
      @click="colors.splice(i, 1)"
    />
  </div>
</template>

<style scoped>
.box {
  height: 100px;
  border: 1px solid black;
  margin: 5px;
  margin-bottom: 30px;
}
button {
  background-color: blue;
}
</style>
