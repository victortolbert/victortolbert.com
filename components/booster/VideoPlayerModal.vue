<script>
export default {
  props: {
    videoId: {
      type: [String, Number],
      default: null,
    },
  },
  emits: ['close'],
}
</script>

<template>
  <div>
    <figure class="image is-16by9 mb-4">
      <iframe
        :src="`https://player.vimeo.com/video/${videoId}?autoplay=1&autopause=0`"
        style="position:absolute;top:0;left:0;width:100%;height:100%;"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
      />
    </figure>
    <div
      class="close-button z-max"
      @click="$emit('close')"
    />
  </div>
</template>
