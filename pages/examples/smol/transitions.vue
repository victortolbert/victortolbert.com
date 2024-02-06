<template>
  <div data-layout="" class="demo no-resize">
    <ul class="smol-flexbox-grid" style="--min: 20ch">
      <li class="smol-transitions rise">
        <span>rise</span>
      </li>
      <li class="smol-transitions rotate">
        <span>rotate</span>
      </li>
      <li class="smol-transitions zoom">
        <span>zoom</span>
      </li>
      <li class="smol-transitions fade">
        <span>fade</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.smol-flexbox-grid {
  --min: 15ch;
  --gap: 1rem;

  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
}

.smol-flexbox-grid > * {
  flex: 1 1 var(--min);
}

.smol-transitions > * {
  --transition-property: transform;
  --transition-duration: 180ms;

  transition: var(--transition-property) var(--transition-duration) ease-in-out;
}

.rise:hover > * {
  transform: translateY(-25%);
}

.rotate:hover > * {
  transform: rotate(15deg);
}

.zoom:hover > * {
  transform: scale(1.1);
}

.fade > * {
  --transition-property: opacity;
  --transition-duration: 500ms;
}

.fade:hover > * {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .smol-transitions > * {
    --transition-duration: 0.01ms;
  }
}

/* Additional demo styles from SmolCSS.dev
   Not all styles may be needed for this pen */
body > ul {
  list-style: none;
  margin: 0;

  &:not([data-padding-unset]) {
    padding: 0;
  }
}

[class*='smol']:not([data-component]) > *:not([data-unstyled]) {
  display: grid;
  padding: 1rem;
  background-color: #e0d4f6;
  color: #675883;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: bold;
  text-align: center;
  border-radius: 0.15em;
  border: 1px dashed;

  &:not([data-text]) {
    place-content: center;
  }

  &[data-text] {
    font-size: 1.15rem;
    text-align: left;
  }
}

[data-container-style] {
  outline: 2px dotted #29344b;
}
</style>
