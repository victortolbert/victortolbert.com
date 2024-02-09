<script setup>
import Typed from 'typed.js'

const typing = ref(null)

onMounted(() => {
  // eslint-disable-next-line no-new
  new Typed(typing.value, {
    strings: ['Developer', 'Blogger', 'Freelancer'],
    typeSpeed: 0,
    backSpeed: 0,
    loop: true,
    fadeOut: true,
    shuffle: true,
  })
})
</script>

<template>
  <div class="container py-5">
    <span ref="typing" />
  </div>
</template>
