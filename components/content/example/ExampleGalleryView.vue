<template>
  <div class="ff-banner">
    Scrolling in Firefox may be broken because of a <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1737820">scroll-snap bug</a>. Fix has been pushed to Firefox Nightly and should be released soon.
  </div>
  <main class="content">
    <h1 class="headline">
      Horizontal scrolling in a centered max-width container
    </h1>
    <p>A boneless carousel is a popcorn of the mind. Extending this logic, the literature would have us believe that a crumby afternoon is not but a cave. A delivery can hardly be considered an attack luttuce without also being a triangle. This could be, or perhaps one cannot separate weapons from breathing cushions.</p>

    <div class="gallery">
      <div class="wrapper">
        <div class="item">
          1
        </div>
        <div class="item">
          2
        </div>
        <div class="item">
          3
        </div>
        <div class="item">
          4
        </div>
        <div class="item">
          5
        </div>
        <div class="item">
          6
        </div>
        <div class="item">
          7
        </div>
        <div class="item">
          8
        </div>
        <div class="item">
          9
        </div>
        <div class="item">
          10
        </div>
        <div class="item">
          11
        </div>
        <div class="item">
          12
        </div>
        <div class="item">
          13
        </div>
        <div class="item">
          14
        </div>
        <div class="item">
          15
        </div>
        <div class="item">
          16
        </div>
      </div>
    </div>

    <p>A mole is a bulldozer's brush. Ships are alright errors. They were lost without the corny lamb that composed their carbon. Extending this logic, the sidelong children comes from a drifting sunbeam.</p>

    <div class="gallery alt-sizes">
      <div class="wrapper">
        <div class="item">
          <img src="https://picsum.photos/id/25/650/365" alt="">
        </div>
        <div class="item lg">
          <img src="https://picsum.photos/id/10/650/365" alt="">
        </div>
        <div class="item">
          <img src="https://picsum.photos/id/50/650/365" alt="">
        </div>
        <div class="item sm">
          <img src="https://picsum.photos/id/466/650/365" alt="">
        </div>
        <div class="item sm">
          <img src="https://picsum.photos/id/888/650/365" alt="">
        </div>
        <div class="item">
          <img src="https://picsum.photos/id/25/650/365" alt="">
        </div>
        <div class="item lg">
          <img src="https://picsum.photos/id/77/650/365" alt="">
        </div>
        <div class="item">
          <img src="https://picsum.photos/id/42/650/365" alt="">
        </div>
        <div class="item lg">
          <img src="https://picsum.photos/id/98/650/365" alt="">
        </div>
        <div class="item">
          <img src="https://picsum.photos/id/440/650/365" alt="">
        </div>
        <div class="item sm">
          <img src="https://picsum.photos/id/111/650/365" alt="">
        </div>
        <div class="item">
          <img src="https://picsum.photos/id/250/650/365" alt="">
        </div>
      </div>
    </div>

    <p>In ancient times authors often misinterpret the approval as an enarched spleen, when in actuality it feels more like a feeling bone. The zeitgeist contends that those cautions are nothing more than brokers. A trip of the metal is assumed to be a classless trouser. The septembers could be said to resemble unplumbed breaths.</p>

    <p>An incurved health's leopard comes with it the thought that the chichi peak is a sauce. One cannot separate tortellinis from ain laborers. A credit is the effect of a tub. Some stilted needs are thought of simply as fiberglasses.</p>

    <div class="gallery rtl">
      <div class="wrapper">
        <div class="item">
          1
        </div>
        <div class="item">
          2
        </div>
        <div class="item">
          3
        </div>
        <div class="item">
          4
        </div>
        <div class="item">
          5
        </div>
        <div class="item">
          6
        </div>
        <div class="item">
          7
        </div>
        <div class="item">
          8
        </div>
        <div class="item">
          9
        </div>
        <div class="item">
          10
        </div>
        <div class="item">
          11
        </div>
        <div class="item">
          12
        </div>
        <div class="item">
          13
        </div>
        <div class="item">
          14
        </div>
        <div class="item">
          15
        </div>
        <div class="item">
          16
        </div>
      </div>
    </div>

    <p>The first faithless feeling is, in its own way, an hour. Some posit the prewar rocket to be less than keyless. In modern times a dinkies ocean without hydrofoils is truly a course of detached sticks. What we don't know for sure is whether or not authors often misinterpret the squash as a balanced writer, when in actuality it feels more like an uncapped buffet.</p>
  </main>
</template>

<style scoped>
.content {
  display: grid;
  grid-template-columns:
    [full-start] 1fr
    [content-start]
    min(var(--content-max-width), 100% - var(--space-md) * 2)
    [content-end]
    1fr [full-end];
}

.content > * {
  grid-column: content;
}

.gallery {
  grid-column: full;
  display: grid;
  grid-template-columns: inherit;
  padding-block: var(--gap);
  overflow-x: scroll;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}

.gallery .wrapper {
  grid-column: content;
  display: flex;
  align-items: center;
  gap: var(--space);
}

.gallery .wrapper::after {
  content: '';
  align-self: stretch;
  padding-inline-end: max(
    var(--space),
    (100vw - var(--content-max-width)) / 2 - var(--space)
  );
}
</style>
