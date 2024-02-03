<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false,
  },
})

// watch: {
//   show: {
//     immediate: true,
//     handler(show) {
//       if (show)
//         document.body.style.setProperty('overflow', 'hidden')
//       else
//         document.body.style.removeProperty('overflow')
//     },
//   },
// }

onMounted(() => {
  const escapeHandler = (event) => {
    if (event.key === 'Escape' && props.show)
      dismiss()
  }

  document.addEventListener('keydown', escapeHandler)

  // this.$once('hook:destroyed', () => {
  //   document.removeEventListener('keydown', escapeHandler)
  // })
})

function dismiss() {
  emit('close')
}
</script>

<template>
  <Portal v-if="show" to="overlays">
    <div class="modal-backdrop">
      <div class="modal">
        <slot />
      </div>
    </div>
  </Portal>
</template>

<style scoped>
.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  left: 0;
  overflow: auto;
  padding: 2rem;
  position: fixed;
  right: 0;
  top: 0;
}

.modal {
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  max-width: 42rem;
}

.card,
.modal {
  background-color: #fff;
  border-radius: 0.25rem;
  -webkit-box-shadow:
    0 15px 30px 0 rgba(0, 0, 0, 0.11),
    0 5px 15px 0 rgba(0, 0, 0, 0.08);
  box-shadow:
    0 15px 30px 0 rgba(0, 0, 0, 0.11),
    0 5px 15px 0 rgba(0, 0, 0, 0.08);
}
</style>
