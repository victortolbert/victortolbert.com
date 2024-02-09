<template>
  <div>
    <!--

      h-card properties, inside an element with class h-card. All properties are optional and may be plural.

      See microformats2-parsing to learn more about property classnames.
      Example h-card with common properties:
      <div class="h-card">
      <span class="p-name">Sally Ride</span>
      <span class="p-honorific-prefix">Dr.</span>
      <span class="p-given-name">Sally</span>
      <abbr class="p-additional-name">K.</abbr>
      <span class="p-family-name">Ride</span>
      <span class="p-honorific-suffix">Ph.D.</span>,
      <span class="p-nickname">sallykride</span> (IRC)
      <div class="p-org">Sally Ride Science</div>
      <img class="u-photo" src="http://example.com/sk.jpg"/>
      <a class="u-url" href="http://sally.example.com">w</a>,
      <a class="u-email" href="mailto:sally@example.com">e</a>
      <div class="p-tel">+1.818.555.1212</div>
      <div class="p-street-address">123 Main st.</div>
      <span class="p-locality">Los Angeles</span>,
      <abbr class="p-region" title="California">CA</abbr>,
      <span class="p-postal-code">91316</span>
      <div class="p-country-name">U.S.A</div>
      <time class="dt-bday">1951-05-26</time> birthday
      <div class="p-category">physicist</div>
      <div class="p-note">First American woman in space.</div>
      </div>
      Core properties:

      p-name - The full/formatted name of the person or organization
      p-honorific-prefix - e.g. Mrs., Mr. or Dr.
      p-given-name - given (often first) name
      p-additional-name - other (e.g. middle) name
      p-family-name - family (often last) name
      p-sort-string - string to sort by
      p-honorific-suffix - e.g. Ph.D, Esq.
      p-nickname - nickname/alias/handle
      u-email - email address
      u-logo - a logo representing the person or organization (e.g. a face icon)
      u-photo - a photo of the person or organization
      u-url - home page or other URL representing the person or organization
      u-uid - universally unique identifier, preferably canonical URL
      p-category - category/tag
      p-adr - postal address, optionally embed an h-adr
      Main article: h-adr
      p-post-office-box - post office box description if any
      p-extended-address - apartment/suite/room name/number if any
      p-street-address - street number + name
      p-locality - city/town/village
      p-region - state/county/province
      p-postal-code - postal code, e.g. US ZIP
      p-country-name - country name
      p-label
      p-geo or u-geo, optionally embed an h-geo
      Main article: h-geo
      p-latitude - decimal latitude
      p-longitude - decimal longitude
      p-altitude - decimal altitude
      p-tel - telephone number
      p-note - additional notes
      dt-bday - birth date
      u-key - cryptographic public key e.g. SSH or GPG
      p-org - affiliated organization, optionally embed an h-card
      p-job-title - job title, previously 'title' in hCard, disambiguated.
      p-role - description of role
      u-impp per RFC4770, new in vCard4 (RFC 6350)
      p-sex - biological sex, new in vCard4 (RFC 6350)
      p-gender-identity - gender identity, new in vCard4 (RFC 6350)
      dt-anniversary
      Experimental properties currently in use in the wild but not (yet) part of the official h-card spec.

      u-sound - sound file containing the proper pronunciation of the name property, per vCard (RFC 6350).
      Used by Martijn van der Ven with a clip of his given name.
      Needs a GitHub issue to track.

     -->
    <a class="h-card" href="https://tantek.com/">Tantek Çelik</a>,

    <div class="h-card">
      <span class="p-name">Sally Ride</span>
      <span class="p-honorific-prefix">Dr.</span>
      <span class="p-given-name">Sally</span>
      <abbr class="p-additional-name">K.</abbr>
      <span class="p-family-name">Ride</span>
      <span class="p-honorific-suffix">Ph.D.</span>,
      <span class="p-nickname">sallykride</span> (IRC)
      <div class="p-org">
        Sally Ride Science
      </div>
      <img class="u-photo" src="http://example.com/sk.jpg">
      <a class="u-url" href="http://sally.example.com">w</a>,
      <a class="u-email" href="mailto:sally@example.com">e</a>
      <div class="p-tel">
        +1.818.555.1212
      </div>
      <div class="p-street-address">
        123 Main st.
      </div>
      <span class="p-locality">Los Angeles</span>,
      <abbr class="p-region" title="California">CA</abbr>,
      <span class="p-postal-code">91316</span>
      <div class="p-country-name">
        U.S.A
      </div>
      <time class="dt-bday">1951-05-26</time> birthday
      <div class="p-category">
        physicist
      </div>
      <div class="p-note">
        First American woman in space.
      </div>
    </div>

    <div class="h-card">
      <p class="p-name">
        Joe Bloggs
      </p>
      <p class="p-adr h-adr">
        <span class="p-street-address">17 Austerstræti</span>
        <span class="p-locality">Reykjavík</span>
        <span class="p-country-name">Iceland</span>
      </p>
    </div>

    <span class="h-card">
      <a class="p-name p-org u-url" href="https://microformats.org/">microformats.org</a>
    </span>
  </div>
</template>
