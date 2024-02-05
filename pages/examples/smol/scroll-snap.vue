<template>
  <div data-layout="" class="demo no-resize">
    <ul data-padding-unset="" class="smol-scroll-snap">
      <li data-text="">
        <p>Topping candy canes ice cream gummi bears gingerbread marshmallow. Chocolate cake powder sugar plum topping.</p>
      </li>
      <li data-text="">
        <p>Cake marshmallow carrot cake. Pie liquorice liquorice sweet tootsie roll caramels donut dragée bear claw. Chocolate powder candy canes.</p>
      </li>
      <li data-text="">
        <p>Pie chocolate cake dessert pastry candy canes donut pie soufflé pie. Fruitcake caramels tart pudding macaroon chocolate jelly beans brownie.</p>
      </li>
      <li data-text="">
        <p>Icing dessert chocolate cupcake dragée sesame snaps. Icing pastry donut cupcake marshmallow sweet macaroon gummies.</p>
      </li>
      <li data-text="">
        <p>Jelly wafer biscuit. Dessert halvah cheesecake. Liquorice jelly sweet roll marzipan biscuit</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.smol-scroll-snap {
  /* Set up container positioning */
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1.5rem;
  /* Enable overflow along our scroll axis */
  overflow-x: auto;
  /* Define axis and scroll type, where
  `mandatory` means any scroll attempt will
  cause a scroll to the next item */
  scroll-snap-type: x mandatory;
  padding: 0 0 1.5rem;
  -webkit-overflow-scrolling: touch;
}

.smol-scroll-snap > * {
  width: min(45ch, 60vw);
  /* Choose how to align children on scroll */
  scroll-snap-align: center;
  /* Prevents scrolling past more than one child */
  scroll-snap-stop: always;
}
</style>
