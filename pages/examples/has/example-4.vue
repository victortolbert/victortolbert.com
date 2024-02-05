<script lang="ts" setup>
definePageMeta({
  layout: false,
})
</script>

<template>
  <div class="example">
    <div class="image-gallery">
      <NuxtImg src="https://images.unsplash.com/photo-1661335996027-0a65af891c27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI5OTQwNDU&ixlib=rb-1.2.1&q=80&w=400" alt="" />
      <NuxtImg src="https://images.unsplash.com/photo-1661189626525-3d7ec5d3087c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI5OTQwNDU&ixlib=rb-1.2.1&q=80&w=400" alt="" />
      <NuxtImg src="https://images.unsplash.com/photo-1660628504006-9416dd2a411f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI5OTQwNDU&ixlib=rb-1.2.1&q=80&w=400" alt="" />
      <NuxtImg src="https://images.unsplash.com/photo-1662441896128-691f7ac658ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI5OTQwNDU&ixlib=rb-1.2.1&q=80&w=400" alt="" />
      <NuxtImg src="https://images.unsplash.com/photo-1661880374687-4ce390284f86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI5OTQwNDU&ixlib=rb-1.2.1&q=80&w=400" alt="" />
      <NuxtImg src="https://images.unsplash.com/photo-1661691111071-42c262ca061e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI5OTQwNDU&ixlib=rb-1.2.1&q=80&w=400" alt="" />
      <NuxtImg src="https://images.unsplash.com/photo-1662117488030-b3f17accfa3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI5OTQxMTQ&ixlib=rb-1.2.1&q=80&w=400" alt="" />
      <NuxtImg src="https://images.unsplash.com/photo-1661435805196-81136edfa297?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI5OTQxMTQ&ixlib=rb-1.2.1&q=80&w=400" alt="" />
      <NuxtImg src="https://images.unsplash.com/photo-1660584658489-a15f806f463c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI5OTQxMTQ&ixlib=rb-1.2.1&q=80&w=400" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.example {
  padding: 2rem;
  background: hsl(200 50% 5%);
}

.image-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 50rem;
  margin-inline: auto;
}

.image-gallery > img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;

  transition:
    scale 350ms ease,
    opacity 350ms linear;
}

.image-gallery:has(img:hover) img:not(:hover) {
  scale: 0.8;
  opacity: 0.7;
}
</style>
