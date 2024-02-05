<template>
  <div data-layout class="demo">
    <div data-component="" class="smol-stack-layout smol-stack-layout--video" style="--stack-aspect-ratio: 16/9">
      <video muted autoplay>
        <source src="https://smolcss.dev/assets/video.mp4" type="video/mp4">
      </video>
      <h3>Into The Unknown</h3>
      <small>Video from <a href="https://www.pexels.com/video/a-sky-full-of-stars-at-night-2646392/">Pexels</a></small>
    </div>
  </div>
</template>

<style scoped>
.smol-stack-layout {
  display: grid;
  grid-template-areas: 'stack';
  /* Set within the HTML for the demo */
  aspect-ratio: var(--stack-aspect-ratio);
  background-color: #200070;
}

.smol-stack-layout > * {
  grid-area: stack;
}

.smol-stack-layout video {
  width: 100%;
}

.smol-stack-layout h3 {
  place-self: center;
  font-size: clamp(2.5rem, 5vw, 5rem);
  text-align: center;
  line-height: 1;
  font-style: italic;
  padding: 5vh 2vw;
}

.smol-stack-layout--video small {
  align-self: end;
  justify-self: start;
  padding: 0 0 0.25em 0.5em;
  opacity: 0.8;
  font-size: 0.8rem;
}

.smol-stack-layout h3,
.smol-stack-layout small {
  position: relative;
  color: #fff;
}
</style>
