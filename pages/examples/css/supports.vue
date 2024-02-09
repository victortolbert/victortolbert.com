<template>
  <div>
    <!-- https://codepen.io/bramus/pen/oNdrypM -->
    <h1>CSS Nesting Feature Detection</h1>

    <p id="output">
      Does your browser support <a href="https://drafts.csswg.org/css-nesting/" target="_top">CSS Nesting</a>?
    </p>

    <p class="has-support has-nesting">
      ✅ Your browser supports CSS nesting
    </p>
    <p class="no-support no-nesting">
      ❌ Your browser does not support CSS nesting
    </p>

    <aside>
      <p>More ways of testing</p>
      <ul>
        <li><a href="https://codepen.io/bramus/pen/oNdrypM" target="_top" class="active">Method 1a – Nesting affecting classes</a></li>
        <li><a href="https://codepen.io/bramus/pen/LYmKBEq" target="_top">Method 1b – Nesting driving a Space Toggle</a></li>
        <li><a href="https://codepen.io/bramus/pen/XWqLOaR" target="_top">Method 2 – <code>@supports</code>, with a caveat</a></li>
      </ul>
    </aside>
  </div>
</template>

<style scoped>
.has-nesting {
  display: none;
}

html {
  max-width: 76ch;
  padding: 3rem 2rem;
  margin: auto;
  line-height: 1.5;
  font-size: 1.25rem;

  & .has-nesting {
    display: block;
  }

  & .no-nesting {
    display: none;
  }
}

body {
  margin: 0;
  padding: 0;
}

.no-support,
.has-support {
  background-color: #ff00002b;
  margin: 1em 0;
  padding: 1em;
  border: 1px solid #ccc;
}

.has-support {
  background-color: #00ff002b;
}

pre {
  border: 1px solid #dedede;
  padding: 1em;
  background: #f7f7f7;
  font-family: 'Courier 10 Pitch', Courier, monospace;
  overflow-x: auto;
}

aside {
  margin-top: 10rem;
  border-top: 1px solid #333;
  padding: 0.5em 0;
  opacity: 0.7;
}

aside > :first-child {
  margin-top: 0;
}

aside > :last-child {
  margin-bottom: 0;
}

aside .active {
  font-weight: bold;
}

a,
a:visited {
  color: blue;
}
</style>
