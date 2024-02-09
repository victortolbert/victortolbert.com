<template>
  <div class="card">
    <!-- https://developer.chrome.com/articles/css-nesting/ -->
    <!-- https://codepen.io/argyleink/pen/GRBMXyR -->
    <header>
      <h2>Epic title</h2>
      <p>Lorem ipsum dolor sit amet</p>
    </header>
    <figure class="responsive-image">
      <img height="640" width="640" src="https://assets.codepen.io/2585/uszetlo5l6591.webp" alt="cyberpunk raining day in tokyo with purple and cyan lights">
      <figcaption>
        <a href="#">Source</a>
      </figcaption>
    </figure>
    <article>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio asperiores voluptates officiis totam, est sequi iure libero rem nobis veniam consectetur commodi voluptatibus maxime labore cumque, dolore, quam eveniet magnam.</p>
    </article>
    <footer>
      <button>Like</button>
      <button>Share</button>
    </footer>
  </div>
</template>

<style>
@layer demo, images, cards;

@layer cards {
  @scope (.card) to (> header > *, > figure > *, > footer > *) {
    :scope {
      display: grid;
      background: oklch(50% none none / 20%);
      border-radius: 10px;
      border: 1px solid oklch(50% none none / 20%);

      @media (prefers-color-scheme: light) {
        background: white;
        box-shadow: 0 30px 10px -20px oklch(0% none none / 25%);
      }

      > header {
        display: grid;
        gap: 0.5ch;
        padding: 2ch;
      }

      > article {
        max-inline-size: 50ch;
        line-height: 1.5;
        padding: 2ch 2ch 1ch;
      }

      > footer {
        display: flex;
        justify-content: flex-end;
        padding: 1ch 2ch;
        gap: 1ch;
      }
    }
  }
}

@layer images {
  .responsive-image {
    max-inline-size: 50ch;
    aspect-ratio: 16/9;

    > img {
      max-inline-size: 100%;
      block-size: 100%;
      object-fit: cover;
      object-position: bottom;
    }

    > figcaption {
      text-align: center;
      padding-block: 1ch;
    }
  }
}

@layer demo.support {
  * {
    box-sizing: border-box;
    margin: 0;
  }

  html {
    block-size: 100%;
    color-scheme: dark light;

    @media (prefers-color-scheme: light) {
      background: #ccc;
    }
  }

  body {
    min-block-size: 100%;
    font-family: system-ui, sans-serif;

    display: grid;
    place-content: center;
    place-items: center;
  }
}
</style>
