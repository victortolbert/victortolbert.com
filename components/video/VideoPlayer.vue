<script setup>
import videojs from 'video.js'

defineProps({
  options: {
    type: Object,
    default() {
      return {}
    },
  },
})

const player = ref()
const videoPlayer = ref(null)

onMounted(() => {
  player.value = videojs(videoPlayer.value, props.options, () => {
    player.value.log('onPlayerReady', this)
  })
})

onBeforeUnmount(() => {
  if (player.value)
    player.value.dispose()
})
</script>

<template>
  <div>
    <video ref="videoPlayer" class="video-js" />
  </div>
</template>
