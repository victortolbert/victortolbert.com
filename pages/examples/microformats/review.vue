<template>
  <div class="h-review">
    <!--
      https://microformats.org/wiki/h-review
      h-review properties, inside an element with class h-review:
      p-name - name of the review
      p-item - thing being reviewed, including embedded microformat for e.g. business or person (h-card), event (h-event), place (h-adr or h-geo), product (h-product), recipe (h-recipe), website, url, or other item (h-item).
      p-author - person who authored the review, optionally with an embedded h-card
      dt-published - date time of when the review was written and published
      p-rating - value from 1-5 indicating a rating for the item (5 best).
      p-best - define best rating value. can be numerically lower than worst.
      p-worst - define worst rating value. can be numerically higher than best.
      e-content - the full text written evaluation and opinion of the reviewer
      p-category - freeform categories or tags applied to the item by the reviewer
      u-url - review permalink URL
      All properties are optional.

      Experimental properties currently in use in the wild but not (yet) part of the official h-review spec. Several of these seem to be because of h-review convergence towards h-entry, as h-review gets used alongside h-entry within h-feed:

      p-location - location the review was posted from, optionally embed h-card, h-adr, or h-geo
      p-summary - short review summary
      u-syndication - URL(s) of syndicated copies of this review. The property equivalent of rel-syndication (example with syndication to Amazon)
     -->
    <h1 class="p-name">
      Microformats: is structured data worth it?
    </h1>

    <blockquote>
      <a class="p-item h-item" href="http://microformats.org">Microformats</a> are the simplest way to publish structured data on the web.
    </blockquote>

    <p>
      <data class="p-rating" value="5">★★★★★</data>
      Published <time class="dt-published" datetime="2013-06-12 12:00:00">12<sup>th</sup> June 2013</time>
      by <a class="p-author h-card" href="http://example.com">Joe Bloggs</a>.
    </p>

    <div class="e-content">
      <p>Yes, microformats are undoubtedly great. They are the simplest way to markup structured data in HTML and reap the benefits thereof, including using your web page as your API by automatic conversion to JSON. The alternatives of microdata/schema and RDFa are much more work, require more markup, and are more complicated (harder to get right, more likely to break).</p>
    </div>
  </div>
</template>
