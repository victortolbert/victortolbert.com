<script setup lang="ts">
definePageMeta({
  layout: false,
})
</script>

<template>
  <div>
    <h1>Some sensible defaults for your image elements</h1>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores libero doloribus dolor deleniti? Fugit suscipit quas ut deserunt dicta soluta nostrum nam quos tenetur necessitatibus earum, modi, ipsum magnam voluptatem.</p>

    <img src="/assets/images/backgrounds/nature-wilderness-mountain-fog.jpeg" alt="A landscape of a foggy mountain range during the sunset, with dark mountains in the foreground, pinkish mountains in the background, and a blue to yellow sky." width="900" height="400">

    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque placeat eligendi repudiandae blanditiis dicta quis, et eveniet voluptatibus labore fuga nostrum at harum distinctio eos exercitationem laudantium ipsa nisi fugit.</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas distinctio laudantium pariatur dolor enim libero molestias, voluptas consequatur necessitatibus voluptates. Magni vero dignissimos accusantium neque maiores, mollitia reprehenderit ea doloremque!</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod id asperiores exercitationem dicta, labore officia corrupti animi quibusdam, ad ipsam libero. Officia dolore iste doloremque incidunt sequi dignissimos itaque magni.</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequatur, fugit, iure nemo repudiandae aliquam odit maxime quam, corrupti quisquam aperiam sunt recusandae necessitatibus veritatis nesciunt. Repellendus dolores temporibus totam!</p>
  </div>
</template>

  <style scoped>
  html {
  color-scheme: dark;
}
body {
  margin: 2rem;
  width: min(100% - 2rem, 60ch);
  font-size: 1.5rem;
  font-family: system-ui;
  line-height: 1.7;
  background-color: #000;
  color: #fff;
}

h1 {
  font-size: 3rem;
  line-height: 1.2;
  font-weight: 700;
  margin: 0;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  font-style: italic;
  background-repeat: no-repeat;
  background-size: cover;
  shape-margin: 0.75rem;
}
</style>
