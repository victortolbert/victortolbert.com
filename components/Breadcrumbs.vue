<script lang="ts" setup>
const links = useBreadcrumbItems() // uses the current route
console.log(links)
</script>

<template>
  <UBreadcrumb divider="/" :links="links" hide-current />
</template>
