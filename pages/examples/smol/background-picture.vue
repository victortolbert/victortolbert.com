<template>
  <div data-layout class="demo">
    <div data-component="" class="smol-stack-layout smol-background-picture">
      <picture>
        <source
          type="image/webp" srcset="
        https://smolcss.dev/assets/background-picture/landscape-w275.webp 275w,
        https://smolcss.dev/assets/background-picture/landscape-w683.webp 683w,
        https://smolcss.dev/assets/background-picture/landscape-w860.webp 860w"
        >
        <img
          srcset="
        https://smolcss.dev/assets/background-picture/landscape-w275.jpg 275w,
        https://smolcss.dev/assets/background-picture/landscape-w683.jpg 683w,
        https://smolcss.dev/assets/background-picture/landscape-w860.jpg 860w" src="https://smolcss.dev/assets/background-picture/landscape-w683.jpg" alt=""
        >
      </picture>
      <div data-component="" class="smol-background-picture__content">
        <p>Text overlaid on a picture element</p>
        <p>
          <small>Photo by <a href="https://unsplash.com/@luckybeanz?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Mark Harpur</a> on <a href="https://unsplash.com/s/photos/landscape?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>
          </small>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.smol-background-picture img {
  --background-img-brightness: 0.45;
  --background-img-saturate: 1.25;

  object-fit: cover;
  width: 100%;
  height: 100%;
  /* decrease brightness to improve text contrast */
  filter: brightness(var(--background-img-brightness))
    saturate(var(--background-img-saturate));
}

/* Necessary if not already within a reset */
.smol-background-picture :is(img, picture) {
  display: block;
}

.smol-background-picture__content {
  /* ensure stacking context above the picture */
  position: relative;
  align-self: center;
  color: #fff;
  text-align: center;
  padding: 1rem;
}

.smol-background-picture__content p {
  font-size: clamp(1.35rem, 5vw, 1.75rem);
  line-height: 1.3;
}
</style>
