<template>
  <div class="h-event">
    <!--

      https://microformats.org/wiki/h-event

      p-name - event name (or title)
      p-summary - short summary of the event
      dt-start - datetime the event starts
      dt-end - datetime the event ends
      dt-duration - duration of the event
      p-description - more detailed description of the event
      WARNING: Proposed to be replaced by e-content (re-used from h-entry)
      See and follow-up: https://github.com/microformats/h-event/issues/3
      u-url - permalink for the event
      p-category - event category(ies)/tag(s)
      p-location - where the event takes place, optionally embedded h-card, h-adr, or h-geo
      All properties are optional.

      Experimental Properties
      These properties are currently in use in the wild but not (yet) part of the draft h-event spec:

      p-attendee - a person attending the event, optionally embed h-card
      This draft has not been updated in almost 2 years. During this period, h-entry p-rsvp has been standardised, thus making it robust and mature enough for the addition. I guess it's about time to unlabel p-attendee as experimental.
      I've filed https://github.com/microformats/h-event/issues/2 to track advancing this draft as a whole. Let's do that with the existing draft before discussing p-attendee in particular. And rather than guessing, take a look at the vocabulary maturity levels in h-entry and perhaps help evaluate (in another issue) p-attendee according to those criteria. Tantek 01:10, 28 February 2017 (UTC)
      I would also suggest to extend expected value to h-entry, so that, while the personal info can be preserved, the attendee can also support p-rsvp property of h-entry.
      I don't understand this. p-attendee is supposed to represent a person, e.g. an h-card. How would it having that be an h-entry make sense and work (from a publishing and consuming code perspective)? This proposed extension to p-attendee may be worth its own issue as well. Tantek 01:10, 28 February 2017 (UTC)
      p-organizer - a person organizing an event, optionally embedded h-card. Used in Indieweb events, but not consumed. https://github.com/microformats/h-event/issues/10
      u-rsvp - similar to the proposed u-comment on h-entry, this would be the proposed property to mark up displayed RSVPs on an h-event. https://github.com/microformats/h-event/issues/9

     -->
    <h1 class="p-name">
      Microformats Meetup
    </h1>
    <p>
      From
      <time class="dt-start" datetime="2013-06-30 12:00">30<sup>th</sup> June 2013, 12:00</time>
      to <time class="dt-end" datetime="2013-06-30 18:00">18:00</time>
      at <span class="p-location">Some bar in SF</span>
    </p>
    <p class="p-location h-adr">
      <span class="p-street-address">17 Austerstræti</span>
      <span class="p-locality">Reykjavík</span>
      <span class="p-country-name">Iceland</span>
    </p>
    <p class="p-summary">
      Get together and discuss all things microformats-related.
    </p>
  </div>
</template>
