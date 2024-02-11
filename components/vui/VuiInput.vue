<script setup>
defineProps({
  name: {
    type: String,
  },
  label: {
    type: String,
  },
  type: {
    type: String,
  },
  value: {
    type: String,
  },
  placeholder: {
    type: String,
  },
})
</script>

<template>
  <div class="vui-form-element vui-m-right--small">
    <label class="vui-form-element__label">
      {{ label }}
    </label>
    <div
      class="vui-form-element__control"
      style="width: 11rem"
    >
      <input
        class="vui-input"
        :name="name"
        :placeholder="placeholder"
        type="text"
        :value="value"
        @input="stationIdPattern = $event.target.value"
      >
    </div>
  </div>
</template>
