<template>
  <div data-layout class="demo">
    <ul data-component="" class="smol-aspect-ratio-gallery smol-flexbox-grid">
      <li>
        <img src="https://images.unsplash.com/photo-1596401463492-1ca39cdf7575?ixlib=rb-1.2.1&amp;q=45&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ&amp;w=350" alt="">
      </li>
      <li>
        <img src="https://images.unsplash.com/photo-1591756985756-6e231184528b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=350&amp;q=45" alt="">
      </li>
      <li>
        <img src="https://images.unsplash.com/photo-1556195947-316050222289?ixlib=rb-1.2.1&amp;q=45&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ&amp;w=350" alt="">
      </li>
      <li>
        <img src="https://images.unsplash.com/photo-1597264121870-2f1b4d43d2f6?ixlib=rb-1.2.1&amp;q=65&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ&amp;w=350" alt="">
      </li>
      <li>
        <img src="https://images.unsplash.com/photo-1465566829994-b8da8cae5909?ixlib=rb-1.2.1&amp;q=65&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ&amp;w=400" alt="">
      </li>
    </ul>
  </div>
</template>

<style scoped>
.smol-aspect-ratio-gallery {
  --min: 15rem;
  --aspect-ratio: 4/3;
  --gap: 0;
}

.smol-aspect-ratio-gallery li {
  height: max(25vh, 15rem);
}

@supports (aspect-ratio: 1) {
  .smol-aspect-ratio-gallery li {
    aspect-ratio: var(--aspect-ratio);
    height: auto;
  }
}

.smol-aspect-ratio-gallery img {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
