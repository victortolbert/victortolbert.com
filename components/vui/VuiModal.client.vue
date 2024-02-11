<script setup>
defineProps([
  'onClose',
  'size',
  'isB',
])

defineEmits(['close'])

onMounted(() => {
  document.addEventListener('keydown', (event) => {
    if (props.show && event.keyCode === 27)
      props.onClose()
  })
})
</script>

<template>
  <div
    class="modal-mask"
    transition="modal"
    @click="$emit('close')"
  >
    <div
      class="modal-container"
      :class="{
        'modal-container--xx-large': size,
        'class-b': isB,
      }"
      @click.stop=""
    >
      <!-- http://adamwathan.me/2016/01/04/composing-reusable-modal-dialogs-with-vuejs/ -->
      <slot />
    </div>
  </div>
</template>
