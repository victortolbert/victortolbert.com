<template>
  <div class="h-feed">
    <!--
      https://microformats.org/wiki/h-feed

      Core Properties
      The following core h-feed properties have broad consensus:

      p-name - name of the feed
      p-author - author of the feed, optionally embed an h-card
      Main article: h-card
      u-url - URL of the feed
      u-photo - representative photo / icon for the feed
      children:

      nested h-entry objects representing the items of the feed
     -->
    <h1 class="p-name site-title">
      The Markup Blog
    </h1>
    <p class="p-summary site-description">
      Stories of elements of their attributes.
    </p>

    <article class="h-entry">
      <a class="u-url" rel="bookmark" href="2020/06/22/balanced-divisive-complementary">
        <h2 class="p-name entry-title">A Tale Of Two Tags: Part 2</h2>
      </a>
      <address class="p-author author h-card vcard">
        <a href="https://chandra.example.com/" class="u-url url p-name fn" rel="author">Chandra</a>
      </address>
      <time class="dt-published published" datetime="2012-06-22T09:45:57-07:00">June 21, 2012</time>
      <div class="p-summary entry-summary">
        <p>From balanced harmony, to divisive misunderstandings, to complementary roles.</p>
      </div>
      <a href="/category/uncategorized/" rel="category tag" class="p-category">General</a>
    </article>

    <article class="h-entry">
      <a class="u-url" rel="bookmark" href="2020/06/20/best-visible-alternative-invisible">
        <h2 class="p-name entry-title">A Tale Of Two Tags: Part 1</h2>
      </a>
      <address class="p-author author h-card vcard">
        <a href="https://chandra.example.com/" class="u-url url p-name fn" rel="author">Chandra</a>
      </address>
      <time class="dt-published published" datetime="2012-06-20T08:34:46-07:00">June 20, 2012</time>
      <div class="p-summary entry-summary">
        <p>It was the best of visible tags, it was the alternative invisible tags.</p>
      </div>
      <a href="/category/uncategorized/" rel="category tag" class="p-category">General</a>
    </article>
  </div>
</template>
