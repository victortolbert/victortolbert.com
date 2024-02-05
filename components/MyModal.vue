<script>
export default {
  data() {
    return {
      open: false,
    }
  },
}
</script>

<template>
  <UButton @click="open = true">
    Open Modal
  </UButton>

  <Teleport to="body">
    <UCard v-if="open" class="modal p4">
      <p>Hello from the modal!</p>
      <UButton @click="open = false">
        Close
      </UButton>
    </UCard>
  </Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>
