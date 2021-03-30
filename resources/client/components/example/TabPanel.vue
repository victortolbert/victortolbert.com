<!-- @vue-ignore -->
<script lang="ts">
import { useTabs } from './Tabs.vue'

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup() {
    const { activeTab } = useTabs()
    return {
      activeTab,
    }
  },
}
</script>

<template>
  <div :id="`tab-panel-${id}`" v-show="activeTab === id">
    <slot />
  </div>
</template>
