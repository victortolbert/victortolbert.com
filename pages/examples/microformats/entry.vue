<template>
  <article class="h-entry">
    <!--
      https://microformats.org/wiki/h-entry

      Core Properties
      The following core h-entry properties have broad consensus and are broadly interoperably published and consumed:

      p-name - entry name/title
      p-summary - short entry summary
      e-content - full content of the entry
      dt-published - when the entry was published
      dt-updated - when the entry was updated
      p-author - who wrote the entry, optionally embedded h-card(s)
      p-category - entry categories/tags
      u-url - entry permalink URL
      u-uid - universally unique identifier, typically canonical entry URL
      p-location - location the entry was posted from, optionally embed h-card, h-adr, or h-geo
      u-syndication - URL(s) of syndicated copies of this post. The property equivalent of rel-syndication (example)
      u-in-reply-to - the URL which the h-entry is considered reply to (i.e. doesn’t make sense without context, could show up in comment thread), optionally an embedded h-cite (reply-context) (example)
      p-rsvp (enum, use <data> element or value-class-pattern)
      "yes", "no", "maybe", "interested". Case-insensitive values, normalized to lowercase. Examples:
      ... <data class="p-rsvp" value="YES">is going</data> to ..., or
      ... <data class="p-rsvp" value="Maybe">might go</data> to ...
      ... <data class="p-rsvp" value="no">unable to go</data> to ...
      ... <data class="p-rsvp" value="interested">am interested/tracking/watching</data> ...
      u-like-of - the URL which the h-entry is considered a “like” (favorite, star) of. Optionally an embedded h-cite
      u-repost-of - the URL which the h-entry is considered a “repost” of. Optionally an embedded h-cite.
      Draft Properties
      The following draft properties are in use in the wild (published and consumed), and are under strong consideration, but are not yet part of the core:

      p-comment - optionally embedded (or nested?) h-cite(s), each of which is a comment on/reply to the parent h-entry. See comment-brainstorming (example)
      Issue 20
      u-photo - one or more photos that is/are considered the primary content of the entry, unless there is a p-location h-card, which is still considered a "checkin" (i.e. with a photo). Otherwise the presence of a u-photo means the name of the entry should be interpreted as a caption on the photo, and the summary/content should be interpreted as a description of the photo.
      Issue 4: u-photo draft->core bc way more than 3+ pub and consuming impls/sites
      depends on: Issue 24: Update Definition of Draft Property u-photo
      depends on: Issue 23: E-Content Overlaps with u-photo and similar properties
      Proposed (issue TBF): A u-photo property MUST be on an element that provides a text description for the image (e.g. <img alt="">) UNLESS the image is already described inside the contents a text property such as p-name, p-summary, or e-content
      u-video - special u- parsing rules for <video src> & <source src>
      Issue 5
      Proposed Additions
      The following properties are proposed additions based on various use-cases, such as existing link preview markup conventions, but are awaiting citations of use across multiple sites in the wild, and at least one reader / real world consuming code example:

      u-audio - special u- parsing rules for <audio src> & <source src>. Examples: Transportini,possibly more
      Issue 6
      u-like - similar to p-comment, URL to a like post of the current post, e.g. in a responses list or facepile.
      Issue 32
      u-repost - similar to u-like, URL to a repost of the current post, e.g. in a responses list or facepile.
      Issue 30
      u-bookmark-of - indicates this h-entry is a bookmark of another URL. Optionally an h-cite. See indieweb.org/bookmark for examples in the wild.
      Issue 12
      u-featured - a representative photo or image for the entry, e.g. primary photo for an article or subject-cropped photo, suitable for use in a link-preview.
      +1 sknebel: https://github.com/microformats/h-entry/issues/14
      Location Properties - https://github.com/microformats/h-entry/issues/29
      p-latitude - latitude of the location of the entry
      p-longitude - longitude of the location of the entry
      p-altitude - altitude of the location of the entry
      p-duration - duration of an audio or video file in the entry. https://indieweb.org/duration Multiple publishers and consumers in the wild; https://github.com/snarfed/granary/issues/169 more background.
      Issue 21
      p-size - size in bytes of an audio or video file in the entry. https://indieweb.org/size Multiple publishers and consumers in the wild; https://github.com/snarfed/granary/issues/169 more background.
      u-listen-of - also known as a 'scrobble', indicates this h-entry is a listen of another URL. Optionally an h-cite. https://github.com/microformats/h-entry/issues/11
      u-watch-of - indicates this h-entry is a watch of another URL, a visual version of the scrobble. Optionally an h-cite. https://github.com/microformats/h-entry/issues/17
      p-read-of - indicates this h-entry is a read post of some written work (book or other document). The value can be the title of the work or an h-cite. Proposal also mentions u-read-of, where the value would be a URL to the written work or a representative citation page. https://github.com/microformats/h-entry/issues/10
      u-translation-of - indicates this h-entry is a translation of the linked URL into another language. Can be used in the same way as the existing u-like-of and u-repost-of properties, with just the URL to the original h-entry, or (optionally) contain an embedded h-cite. https://github.com/microformats/h-entry/issues/26
      u-checkin - the URL of the venue/location h-card which the h-entry is considered a “checkin” of. Optionally an embedded h-card. https://github.com/microformats/h-entry/issues/15
      u-review-of - the URL which the h-entry is considered a review of, optionally an embedded h-cite, h-card, h-event, or h-item. This could allow retirement of the h-review as unnecessary, in theory.
      Issue 32
      The following interpretation is also proposed addition:

      if the p-location is also an embedded h-card, the entry is treated as a "checkin".
      -1 Aaronpk 14:22, 19 January 2017 (UTC) this post is not a checkin, but has an h-card as the p-location property.
      Note: As h-entry usage grows to express and consume different kinds of content, we expect additional properties may be proposed and iterated as demonstrated by real-world needs, usage, and interoperability.

     -->
    <h1 class="p-name">
      Microformats are amazing
    </h1>
    <p>
      Published by <a class="p-author h-card" href="http://example.com">W. Developer</a>
      on <time class="dt-published" datetime="2013-06-13 12:00:00">13<sup>th</sup> June 2013</time>
    </p>

    <p class="p-summary">
      In which I extoll the virtues of using microformats.
    </p>

    <div class="e-content">
      <p>Blah blah blah</p>
    </div>
  </article>
</template>
