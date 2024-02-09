<script setup>
import mitt from 'mitt'

const emitter = mitt()

onMounted(() => {
  emitter.on('start', (args) => {
    console.log('start')
  })

  emitter.emit('start')
})
</script>

<template>
  <div>
    <h1>'start' emitted onMounted. See console</h1>
  </div>
</template>
