<template>
  <div data-layout="" class="demo">
    <ul data-component="" class="smol-css-grid" style="--min: 22ch; --gap: 2rem;">
      <li data-component="" class="smol-card-component">
        <img src="https://images.unsplash.com/photo-1607274227313-08146c819e6f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400" alt="">
        <h3>Card Headline 1</h3>
        <p>Chocolate cake macaroon tootsie roll pastry gummies.</p>
        <p>Apple pie jujubes cheesecake ice cream gummies sweet roll lollipop.</p>
        <a href="https://moderncss.dev">Visit ModernCSS.dev</a>
      </li>
      <li data-component="" class="smol-card-component">
        <h3>Card Headline 2</h3>
        <img src="https://images.unsplash.com/photo-1607274227313-08146c819e6f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400" alt="">
        <p>Chocolate cake macaroon tootsie roll pastry gummies.</p>
      </li>
      <li data-component="" class="smol-card-component">
        <h3>Card Headline 3</h3>
        <p>Apple pie jujubes cheesecake ice cream gummies sweet roll lollipop.</p>
        <p>Chocolate cake macaroon tootsie roll pastry gummies.</p>
        <img src="https://images.unsplash.com/photo-1607274227313-08146c819e6f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400" alt="">
      </li>
    </ul>
  </div>
</template>

<style scoped>
.smol-card-component {
  --img-ratio: 3/2;

  display: flex;
  flex-direction: column;
  /* Supported for flexbox in modern browsers since April 2021 */
  gap: 1rem;
  box-shadow: 0 0 0.5rem hsl(0 0% 0% / 35%);
  border-radius: 0.5rem;
}

.smol-card-component > img {
  aspect-ratio: var(--img-ratio);
  object-fit: cover;
  width: 100%;
}

.smol-card-component > img:first-child {
  border-radius: 0.5rem 0.5rem 0 0;
}

.smol-card-component > img:last-child {
  border-radius: 0 0 0.5rem 0.5rem;
  margin-top: auto;
}

.smol-card-component > :not(img) {
  margin-left: 1rem;
  margin-right: 1rem;

  /* Prevent typography "orphans" */
  text-wrap: pretty;
}

.smol-card-component > :not(img):first-child {
  margin-top: 1rem;
}

/* Enhanced `:not()` accepts a selector list,
but as a fallback you can chain `:not()` instead */
.smol-card-component > :last-of-type:not(img, h2, h3, h4) {
  margin-bottom: 1rem;
}

.smol-card-component > :not(h2, h3, h4) {
  font-size: 0.9rem;
}

.smol-card-component > a {
  align-self: start;
}
</style>
