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

<style scoped>
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
</style>
