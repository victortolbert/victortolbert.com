
<script lang="ts">
export default {
  props: ['level'],
}
</script>

<template>
  <component v-bind:is="`h${$props.level}`" v-bind="$attrs" />
</template>
