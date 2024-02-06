<template>
  <div data-layout="centered" class="demo no-resize">
    <ul data-component="" data-padding-unset="" class="smol-avatar-list">
      <li><a href="#smol-avatar-list"><img alt="Avatar 1" src="/assets/images/avatars/avatar-1.svg"></a></li>
      <li><a href="#smol-avatar-list"><img alt="Avatar 2" src="/assets/images/avatars/avatar-1.svg"></a></li>
      <li><a href="#smol-avatar-list"><img alt="Avatar 3" src="/assets/images/avatars/avatar-1.svg"></a></li>
    </ul>
  </div>
</template>

<style scoped>
.smol-avatar-list {
  --avatar-size: 3rem;
  --avatar-count: 3;

  display: grid;
  /* Default to displaying most of the avatar to
  enable easier access on touch devices, ensuring
  the WCAG touch target size is met or exceeded */
  grid-template-columns: repeat(
    var(--avatar-count),
    max(44px, calc(var(--avatar-size) / 1.15))
  );
  /* `padding` matches added visual dimensions of
  the `box-shadow` to help create a more accurate
  computed component size */
  padding: 0.08em;
  font-size: var(--avatar-size);
}

@media (any-hover: hover) and (any-pointer: fine) {
  .smol-avatar-list {
    /* We create 1 extra cell to enable the computed
    width to match the final visual width */
    grid-template-columns: repeat(
      calc(var(--avatar-count) + 1),
      calc(var(--avatar-size) / 1.75)
    );
  }
}

.smol-avatar-list li {
  width: var(--avatar-size);
  height: var(--avatar-size);
}

.smol-avatar-list li:hover ~ li a,
.smol-avatar-list li:focus-within ~ li a {
  transform: translateX(33%);
}

.smol-avatar-list img,
.smol-avatar-list a {
  display: block;
  border-radius: 50%;
}

.smol-avatar-list a {
  transition: transform 180ms ease-in-out;
}

.smol-avatar-list img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #fff;
  box-shadow:
    0 0 0 0.05em #fff,
    0 0 0 0.08em rgba(0, 0, 0, 0.15);
}

.smol-avatar-list a:focus {
  outline: 2px solid transparent;
  /* Double-layer trick to work for dark and light backgrounds */
  box-shadow:
    0 0 0 0.08em #29344b,
    0 0 0 0.12em white;
}
</style>
