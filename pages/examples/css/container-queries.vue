<script setup>
const containers = ref([
  { name: '@2xs:underline', value: '16rem' },
  { name: '@xs:underline', value: '20rem' },
  { name: '@sm:underline', value: '24rem' },
  { name: '@md:underline', value: '28rem' },
  { name: '@lg:underline', value: '32rem' },
  { name: '@xl:underline', value: '36rem' },
  { name: '@2xl:underline', value: '42rem' },
  { name: '@3xl:underline', value: '48rem' },
  { name: '@4xl:underline', value: '56rem' },
  { name: '@5xl:underline', value: '64rem' },
  { name: '@6xl:underline', value: '72rem' },
  { name: '@7xl:underline', value: '80rem' },
])
</script>

<template>
  <div class="@container">
    <div v-for="container in containers" :key="`container-${container.name}`" :class="container.name">
      Underlined text when the container is larger than {{ container.value }}
    </div>
  </div>
</template>
