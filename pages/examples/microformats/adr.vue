<template>
  <div>
    <!--
      https://microformats.org/wiki/h-adr

      h-adr properties, inside an element with class h-adr:

      p-street-address - house/apartment number, floor, street name
      p-extended-address - additional street details
      p-post-office-box - post office mailbox
      p-locality - city/town/village
      p-region - state/county/province
      p-postal-code - postal code, e.g. ZIP in the US
      p-country-name - should be full name of country, country code ok
      p-label - a mailing label, plain text, perhaps with preformatting
      p-geo (or u-geo with a RFC 5870 geo: URL), optionally embedded h-geo
      p-latitude - decimal latitude
      p-longitude - decimal longitude
      p-altitude - decimal altitude - new in vCard4 (RFC6350)
      All properties are optional.

      p-name - there is no "p-name" property in h-adr. If your address has an explicit name, it's likely a venue, and you should use h-card instead.
     -->

    <span class="p-country-name">UK</span>
    <abbr class="p-country-name" title="United Kingdom">UK</abbr>

    <p class="h-adr adr">
      <span class="p-street-address street-address">123 Main St.</span>,
      <span class="p-locality locality">Pleasantville</span>
    </p>

    <p class="h-adr">
      <span class="p-street-address">17 Austerstræti</span>
      <span class="p-locality">Reykjavík</span>
      <span class="p-country-name">Iceland</span>
      <span class="p-postal-code">107</span>
    </p>
  </div>
</template>
