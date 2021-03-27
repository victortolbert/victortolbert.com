<!-- @vue-ignore -->
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'column',
    },
    data: {
      type: [Array, Object],
      default: () => [
        {
          name: '2019',
          data: {
            July: 7,
            August: 15,
            September: 15,
            October: 6,
            November: 12,
            December: 3,
          },
        },
        {
          name: '2020',
          data: {
            July: 10,
            August: 13,
            September: 17,
            October: 18,
            November: 10,
            December: 5,
          },
        },
      ],
    },
  },
  computed: {
    is() {
      return `${this.type}-chart`
    },
  },
})
</script>


<template>
  <Component :is="is" :data="data" :donut="true" />
</template>
