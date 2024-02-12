<script setup>
const router = useRouter()

function goBack() {
  router.go(-1)
}
</script>

<template>
  <div class="vui-grid vui-grid--align-spread vui-m-bottom--large">
    <a @click="goBack">
      <icon name="arrow-circle-left" /><span class="vui-align-middle vui-m-left--xxx-small">Back to Campaign Performance</span></a>
  </div>
</template>
