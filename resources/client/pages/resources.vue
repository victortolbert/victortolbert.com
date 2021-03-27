<script lang="ts">
import {defineComponent} from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const {t} = useI18n()
    return {t}
  }
})
</script>
<template>
  <PageWrapper>
    <PageHeading> {{ t('resources') }} </PageHeading>

    <!-- <PageBreadcrumb class="mt-2" /> -->

    <RouterView />
  </PageWrapper>
</template>
