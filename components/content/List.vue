<script setup lang="ts">
const arr = ref([
  { id: 0, msg: 'alabama' },
  { id: 1, msg: 'florida' },
  { id: 2, msg: 'georgia' },
  { id: 3, msg: 'mississippi' },
  { id: 4, msg: 'tennessee' },
  { id: 5, msg: 'texas' },
])

const activeId = ref(0)
</script>

<template>
  <button @click="activeId = (activeId + 1) % arr.length">
    Next
  </button>

  <ul>
    <ListItem
      v-for="item in arr"
      :id="item.id"
      :key="item.id"
      :msg="item.msg"
      :is-active="item.id === activeId"
    />
  </ul>
</template>
