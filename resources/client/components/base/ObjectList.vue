<!-- @vue-ignore -->
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  props: {
    items: {
      type: Array,
      default: () => [
        { id: '', title: '', url: ''}
      ],
    },
    icon: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'info', 'success', 'warning', 'danger'].includes(
          value,
        )
      },
    },
  },
  computed: {
    iconName() {
      return (
        this.icon ||
        {
          primary: 'IconBadgeCheck',
          info: 'IconInformationCircle',
          success: 'IconCheckCircle',
          warning: 'IconExclamationCircle',
          danger: 'IconXCircle',
        }[this.type]
      )
    },
  },
})
</script>
<template>
  <div>
    <div v-for="(item, i) in items" :key="i" class="flex mt-3">
      <span :class="`list-${type}`" class="flex-shrink-0 mt-px mr-3">
        <component :is="iconName" class="w-6 h-6" />
      </span>
      <RouterLink :to="{name: item.url}">
        {{ item.title }}
      </RouterLink>
    </div>
  </div>
</template>


<style>
/* Primary */
.list-primary {
  @apply text-blue-500;
}
/* Info */
.list-info {
  @apply text-blue-500;
}
/* Success */
.list-success {
  @apply text-green-500;
}
/* Warning */
.list-warning {
  @apply text-yellow-500;
}
/* Danger */
.list-danger {
  @apply text-red-500;
}
</style>
