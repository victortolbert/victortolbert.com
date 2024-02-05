<template>
  <div data-layout class="demo">
    <div class="smol-breakout-grid">
      <h2 data-unstyled>
        "Breakout" elements using CSS Grid
      </h2>
      <p data-unstyled>
        Gummi bears gummies cheesecake donut liquorice sweet roll lollipop chocolate cake macaroon. Dragée powder biscuit.
      </p>
      <p data-text class="breakout">
        I'm a breakout element, when my parent's parent is wide enough to let me expand into the outer columns.
      </p>
      <p data-unstyled>
        Jelly sweet tiramisu fruitcake dessert muffin chocolate cake dragée. Donut dragée carrot cake.
      </p>
    </div>
  </div>
</template>

<style scoped>
.smol-breakout-grid {
  --max-content-width: 50ch;
  --breakout-difference: 0.2;

  /*  Compute total allowed grid width to `--breakout-difference`
      larger than content area  */
  --breakout-grid-width: calc(
    var(--max-content-width) +
      (var(--max-content-width) * var(--breakout-difference))
  );

  display: grid;
  grid-template-columns:
    [grid-start] 1fr
    [content-start] minmax(min(100%, var(--max-content-width)), 1fr)
    [content-end] 1fr
    [grid-end];
  width: min(100% - 2rem, var(--breakout-grid-width));
  row-gap: 1rem;
  margin: 5vb auto;
}

.smol-breakout-grid > *:not(.breakout) {
  grid-column: content;
}

.smol-breakout-grid > .breakout {
  grid-column: grid;
}
</style>
