<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const form = ref({ name: '', surname: '' })
    const onSubmit = () => console.log(form)
    return { form, onSubmit }
  },
})
</script>

<template>
  <div :class="$style.container">
    <ExampleVModelForm
      v-model:name="form.name"
      v-model:surname="form.surname"
      @submit="onSubmit"
    />
  </div>
</template>

<style lang="postcss" module>
.container {
  max-width: 30rem;
  @apply mx-auto py-8;
}
</style>
