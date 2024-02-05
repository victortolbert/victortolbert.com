<script>
export default {
  name: 'User',
  props: {
    user: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<template>
  <div>{{ user.first_name }} {{ user.last_name }}</div>
</template>
