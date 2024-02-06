<template>
  <article class="h-review-aggregate">
    <!--
      https://microformats.org/wiki/h-review-aggregate

      p-item - Required: the thing been reviewed, including embedded microformat for e.g. business or person (h-card), event (h-event), place (h-adr or h-geo), product (h-product), website, url, or other item (h-item).
      p-average - Required: the fixed point integer [1.0-5.0] of the average rating (5.0 best)
      p-best - Optionally define best rating value. can be numerically lower than worst.
      p-worst - Optionally define worst rating value. can be numerically higher than best.
      p-count - the total number of reviews
      p-votes - the total number of users who have rated the product or service, contributing to the average rating. For some sites, the number of votes is equal to the number of reviews, so count may be used and this property omitted.
      p-name - This optional property can be the title for the review collection or a very short summary of the consensus opinion from the collection.
     -->
    <h1 class="p-item">
      Mediterranean Wraps
    </h1>
    <p class="p-name">
      Customers flock to this small restaurant for their
      tasty falafel and shawerma wraps and welcoming staff.
    </p>
    <span class="p-average">4.5</span> out of 5
    based on <span class="p-count">17</span> reviews
  </article>
</template>
