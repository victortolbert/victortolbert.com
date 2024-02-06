<script setup>
defineProps({
  message: {
    type: Object,
    default: () => ({}),
  },
})

const isChecked = ref(true)
const data = ref('Child please')

const isComputed = computed(() => {
  return true
})
</script>

<template>
  <tr>
    <td class="select">
      <slot name="left" />
    </td>

    <td class="sender">
      {{ message.sender }}
    </td>

    <td class="summary">
      <NuxtLink :to="`/examples/messages/${message.id}`">
        {{ message.subject }}
      </NuxtLink>
    </td>

    <td class="date">
      {{ new Date(message.date).toLocaleDateString() }}
    </td>

    <td class="actions">
      <slot name="right" />
    </td>
  </tr>
</template>
