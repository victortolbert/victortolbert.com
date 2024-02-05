<template>
  <div data-layout="" class="demo no-resize">
    <ul data-component="" class="smol-focus-styles">
      <li><a href="javascript:;">A link</a></li>
      <li><a href="javascript:;">A link customized to dashed style</a></li>
      <li>
        <button type="button">
          A button
        </button>
      </li>
      <li>
        <button type="button">
          A large button
        </button>
      </li>
      <li>
        <label for="smol-focus-input">Customized outline color</label>
        <input id="smol-focus-input" type="text">
      </li>
      <li>
        <label for="smol-focus-textarea">Fully customized</label>
        <textarea id="smol-focus-textarea" rows="3" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* For "real-world" usage, you do not need to scope
these custom properties */
.smol-focus-styles :is(a, button, input, textarea, summary) {
  /* Using max() ensures at least a value of 2px,
  while allowing the possibility of scaling
  relative to the component */
  --outline-size: max(2px, 0.08em);
  --outline-style: solid;
  --outline-color: currentColor;
}

/* Base :focus styles for fallback purposes */
.smol-focus-styles :is(a, button, input, textarea, summary):focus {
  outline: var(--outline-size) var(--outline-style) var(--outline-color);
  outline-offset: var(--outline-offset, var(--outline-size));
}

/* Final :focus-visible styles */
.smol-focus-styles :is(a, button, input, textarea):focus-visible {
  outline: var(--outline-size) var(--outline-style) var(--outline-color);
  outline-offset: var(--outline-offset, var(--outline-size));
}

/* Remove base :focus styles when :focus-visible is available */
.smol-focus-styles :is(a, button, input, textarea):focus:not(:focus-visible) {
  outline: none;
}

/* Demonstration of customizing */
.smol-focus-styles li:nth-of-type(2) a {
  --outline-style: dashed;
}

.smol-focus-styles input {
  --outline-color: red;
}

.smol-focus-styles textarea {
  --outline-size: 0.25em;
  --outline-style: dotted;
  --outline-color: green;
}

.smol-focus-styles li:nth-of-type(4) button {
  font-size: 2.5rem;
}
</style>
