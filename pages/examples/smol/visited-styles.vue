<template>
  <div data-layout="" class="demo no-resize">
    <ul class="smol-visited-styles" data-component="" data-padding-unset="">
      <li><a href="https://ModernCSS.dev">ModernCSS.dev<span aria-hidden="true" /></a></li>
      <li><a href="https://LearnFromSteph.dev">LearnFromSteph.dev<span aria-hidden="true" /></a></li>
      <li><a href="https://5t3ph.dev/a11y-forms">Course: Accessibly Styling Form Fields<span aria-hidden="true" /></a></li>
    </ul>
  </div>
</template>

<style scoped>
ul.smol-visited-styles {
  --color-background: #fff;
  --color-accent: green;

  display: grid;
  grid-gap: 0.5rem;
  width: fit-content;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--color-background);
  border: 1px solid var(--color-accent);
}

.smol-visited-styles a {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  color: #222;
  text-decoration-color: var(--color-accent);
  text-decoration-style: dotted;
  text-underline-offset: 0.15em;
}

.smol-visited-styles a span {
  margin-right: 0.25em;
  /* Remove from normal document flow
  which excludes it from receiving
  the underline ✨ */
  float: left;
}

.smol-visited-styles a span::after {
  content: '✔';
  color: var(--color-background);
}

.smol-visited-styles a:visited span::after {
  color: var(--color-accent);
}
</style>
