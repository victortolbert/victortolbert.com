<script lang="ts" setup>
defineProps({
  item: Object,
})

defineEmit(['makeFolder', 'addItem'])

const isOpen = ref(false)

const isFolder = computed(() => {
  return props.item.children && props.item.children.length
})

function toggle() {
  if (isFolder.value)
    isOpen.value = !isOpen.value
}

function makeFolder() {
  if (!isFolder.value) {
    emit('makeFolder', props.item)
    isOpen.value = true
  }
}

// interface TreeItem {
//   name: string
//   children?: TreeItem[]
// }

// const model = defineModel<TreeItem>()

// const array = defineModel<Array<number>>('array')

// function shortenArray() {
//   array.value = array.value.slice(1)
// }
</script>

<template>
  <li>
    <div
      :class="{ bold: isFolder }"
      @click="toggle"
      @dblclick="makeFolder"
    >
      {{ item.name }}
      <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <TreeItem
        v-for="(child, index) in item.children"
        :key="index"
        class="item"
        :item="child"
        @make-folder="$emit('makeFolder', $event)"
        @add-item="$emit('addItem', $event)"
      />
      <li class="add" @click="$emit('addItem', item)">
        +
      </li>
    </ul>
  </li>
</template>
