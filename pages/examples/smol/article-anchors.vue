<template>
  <div data-layout class="demo no-resize">
    <div data-component="" class="smol-article-anchor">
      <h3 id="smol-article-anchor-title" data-component>
        A Wonderful Article Headline
      </h3>
      <a href="#smol-article-anchor-title">
        <span aria-hidden="true">#</span>
        <span class="smol-article-anchor-hidden">Section titled A Wonderful Article Headline</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.smol-article-anchor {
  display: grid;
  grid-template-columns: min-content auto;
  position: relative;
  margin-top: 2em;
  /* You could pull this property out and
  generalize it under the selector `[id]` as
  it won't affect flow layout or regular margins */
  scroll-margin-top: 2em;
}

.smol-article-anchor:target::before {
  content: "Is it me you're looking for?";
  position: absolute;
  font-size: 0.9rem;
  top: -1.25rem;
  left: 0;
  font-style: italic;
  color: currentColor;
}

.smol-article-anchor a {
  grid-row-start: 1;
  align-self: start;
  font-size: 1rem;
  line-height: 1;
  /* We're using `transform` vs. margins */
  transform: translateX(-50%) translateY(25%);
  text-decoration: none;
  /* Be sure to check that your own colors still meet
  or exceed 4.5:1 contrast when using lowering opacity */
  opacity: 0.75;
}

.smol-article-anchor a:hover {
  text-decoration: underline;
  text-underline-offset: 0.25em;
  opacity: 1;
}

.smol-article-anchor a:focus {
  outline: 2px solid currentColor;
  outline-offset: 0.15em;
}

/* Visually hidden while remaining accessible to
assistive tech like screen readers */
.smol-article-anchor-hidden {
  width: 0;
  height: 0;
  overflow: hidden;
  position: absolute;
}
</style>
