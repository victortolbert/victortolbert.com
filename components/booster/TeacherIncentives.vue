<script setup>
</script>

<template>
  <div class="text-center">
    <!-- Teacher incentive image for mobile -->
    <img
      :src="`https://${$store.state.s3Bucket}.s3.amazonaws.com/assets/images/teacher_incentives_mobile.png`"
      class="p-2 md:hidden"
    >

    <!-- Teacher incentive image for desktop -->
    <img
      :src="`https://${$store.state.s3Bucket}.s3.amazonaws.com/assets/images/teacher_incentives_desktop.png`"
      class="hidden p-2 md:inline"
    >
  </div>
</template>
