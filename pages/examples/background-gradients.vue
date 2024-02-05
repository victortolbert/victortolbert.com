<template>
  <div>
    <section class="example" />
  </div>
</template>

<style scoped>
div {
  height: 100vh;
  background-image: linear-gradient(to right, orange, red);
}
.example {
  --stop1: clamp(1rem, 1vw, 4rem);
  --stop2: clamp(2rem, 2vw, 8rem);
  --size: calc(var(--stop1) * 3);
  /*  --angle1: -45deg;
  --angle2: 45deg; */
  --grad1: linear-gradient(
    var(--angle1, 90deg),
    transparent var(--stop1),
    orangered 0,
    darkred var(--stop2),
    transparent 0
  );
  --grad2: linear-gradient(
    var(--angle2, 180deg),
    transparent var(--stop1),
    orange 0,
    orangered var(--stop2),
    transparent 0
  );
  min-height: 100vh;
  background: var(--grad1), var(--grad2), var(--grad1),
    radial-gradient(circle at 0 0, turquoise, teal);
  background-size:
    calc(var(--size) * 2) var(--size),
    var(--size) var(--size),
    var(--size) var(--size),
    calc(var(--size) * 2) calc(var(--size) * 2);
}
</style>
