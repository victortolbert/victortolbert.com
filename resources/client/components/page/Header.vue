<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
  },
  setup: () => {
    const count = ref(0)
    const { t, availableLocales, locale } = useI18n()
    return { count,t, availableLocales, locale }
  }
})
</script>

<template>
  <header
    class="px-4 py-4 border-b border-gray-200 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
  >
    <div class="flex-1 min-w-0 prose">
      <slot name="left">
        <h2>{{ t('messages') }}</h2>
      </slot>
    </div>

    <div class="flex mt-4 sm:mt-0 sm:ml-4">
      <slot name="right" />
    </div>
  </header>
</template>
