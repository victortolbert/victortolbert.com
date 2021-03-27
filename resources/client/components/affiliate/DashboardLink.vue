<!-- @vue-ignore -->
<script lang="ts">
import {defineComponent} from 'vue'

import ModalForm from '~/components/ModalForm.vue'

export default defineComponent({
  props: {
    logoName: {
      type: String,
      default: 'vticonsulting'
    }
  },
  methods: {
    handleRightClick(event) {
      event.preventDefault()

      this.$oruga.modal.open({
        parent: this,
        component: ModalForm,
        custom: true,
        trapFocus: true,
      })

      // this.$oruga.modal.open('testing')
    },
  },
})
</script>

<template>
  <RouterLink
    class="flex items-center justify-center"
    to="/"
    @contextmenu.native="handleRightClick"
  >
    <BaseLogo
      class="text-primary-500"
      :name="logoName"
    />
  </RouterLink>
</template>
