<template>
  <div data-layout="" class="demo">
    <blockquote data-component="" class="smol-unbreakable-box">
      <p>Topping candy canes ice cream gummi bears gingerbread marshmallow. Chocolate cake powder sugar plum topping. Cake marshmallow carrot cake. Pie liquorice liquorice sweet tootsie roll caramels donut dragée bear claw. Chocolate powder candy canes.</p>
      <footer>
        - <cite>Captain Candy</cite>
      </footer>
    </blockquote>
  </div>
</template>

<style scoped>
.smol-unbreakable-box {
  --color-light: #e0d4f6;
  --color-dark: #675883;

  margin: 2rem auto;
  color: var(--color-dark);
  background-color: var(--color-light);
  font-size: 1.15rem;
  /* Smol Responsive Padding FTW! */
  padding: clamp(0.75rem, 3%, 2rem);
  /* Provide a max-width and prevent overflow */
  width: min(50ch, 90%);
  /* Help prevent overflow of long words/names/URLs */
  word-break: break-word;
  /* Optional, not supported for all languages */
  hyphens: auto;
}

.smol-unbreakable-box footer {
  padding: 0.25em 0.5em;
  margin-top: 1rem;
  color: var(--color-light);
  background-color: var(--color-dark);
  font-size: 0.9rem;
  /* Creates a visual box shrunk to `max-content` */
  width: fit-content;
}
</style>
