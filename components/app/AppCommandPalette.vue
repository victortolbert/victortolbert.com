<script setup>
const isOpen = ref(false)
const selected = ref()

const pages = [
  {
    id: 1,
    label: 'Shuffle',
    path: '/examples/shuffle',
  },
  {
    id: 2,
    label: 'Reactivity',
    path: '/examples/reactivity',
  },
  {
    id: 3,
    label: 'Fetching Data',
    path: '/examples/fetch',
  },
]

watch(selected, (value) => {
  navigateTo(value.path)
  isOpen.value = false
})

defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: () => {
      isOpen.value = !isOpen.value
    },
  },
})
</script>

<template>
  <div>
    <UModal v-model="isOpen">
      <UCommandPalette
        v-model="selected"
        nullable
        :groups="[{ key: 'people', commands: pages }]"
        :fuse="{ resultLimit: 6, fuseOptions: { threshold: 0.1 } }"
      />
    </UModal>
  </div>
</template>

<style>
[id^='headlessui-dialog-panel'] {
  transform: scale(2);
}
</style>
