<template>
  <div class="h-product">
    <!--
      p-name - name of the product
u-photo - photo of the product
p-brand - manufacturer, can also be embedded h-card
Main article: h-card
p-category - freeform categories or tags applied to the item by the reviewer
e-description
u-url - URL of the product
u-identifier - includes type (e.g. mpn, upc, isbn, issn, sn, vin, sku etc.) and value.
p-review - a review of the product, optionally embedded h-review
Main article: h-review
p-price - retail price of the product
     -->
    <h1 class="p-name">
      Microformats For Dummies
    </h1>
    <img class="u-photo" src="http://example.org/mfd.png" alt="">
    <div class="e-description">
      <p>Want to get started using microformats, but intimidated by hyphens and mediawiki? This book contains everything you need to know!</p>
    </div>
    <p>
      Yours today for only <data class="p-price" value="20.00">$20.00</data>
      from <a class="p-brand h-card" href="http://example.com/acme">ACME Publishing inc.</a>
    </p>
  </div>
</template>
