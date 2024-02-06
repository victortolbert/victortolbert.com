<template>
  <div data-layout="" class="demo no-resize">
    <div data-component="" class="smol-css-grid">
      <ul class="smol-list-markers" data-component="">
        <li data-icon="🟣">
          Chocolate cake pastry toffee tootsie roll
        </li>
        <li data-icon="💜">
          Cake bear claw liquorice oat cake oat cake cheesecake
        </li>
        <li data-icon="🟪">
          Ice cream soufflé carrot cake jelly-o bonbon
        </li>
      </ul>
      <ol class="smol-list-markers" data-component="">
        <li>Chocolate cake pastry toffee tootsie roll</li>
        <li>Cake bear claw liquorice oat cake oat cake cheesecake</li>
        <li>Ice cream soufflé carrot cake jelly-o bonbon</li>
      </ol>
    </div>
  </div>
</template>

<style scoped>
.smol-list-markers {
  --marker-color: #a150fb;

  padding: 0;
  margin: 0 0 0 2em;
}

.smol-list-markers li {
  padding-left: 0.5em;
}

.smol-list-markers li + li {
  margin-top: 0.5em;
}

.smol-list-markers li::marker {
  color: var(--marker-color);
}

ul.smol-list-markers li::marker {
  content: attr(data-icon);
  font-size: 1.15em;
}

ol.smol-list-markers li::marker {
  /* The `list-item`  counter is provided by
  the browser for lists */
  content: counter(list-item);
  font-family: cursive;
  font-size: 1.5em;
}
</style>
