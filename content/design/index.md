---
title: Design System
subtitle:
description: Rapid prototyping environment
draft: false
head: true
navigation: true
---

## User Experience Basics

User experience (UX) focuses on having a deep understanding of users, what they need, what they value, their abilities, and also their limitations.  It also takes into account the business goals and objectives of the group managing the project. UX best practices promote improving the quality of the user’s interaction with and perceptions of your product and any related services.

## Factors that Influence UX

At the core of UX is ensuring that users find value in what you are providing to them.  Peter Morville represents this through his User Experience Honeycomb Site exit disclaimer.

- <https://www.usability.gov/what-and-why/user-experience.html>
- <https://semanticstudios.com/user_experience_design/>


## About

- Over 8 Years working with Vue

## Tasks

- [x] Connected `tolbertdesign-dev-ed.develop` on 12/5/2023
- [x] Add a Method to the Class on 12/5/2023
- [x] Render and Preview the Contact List on 11/7/2023

## Marketing Website

## Exemplar Application

<!--
## Who is this for?

From the prototyper to the large application developer… the Design System Starter Kit is a helpful
tool to get started and run prototypes of all sizes in the browser.

### Designers

The starter kit is built using web standards, more specifically HTML and CSS. Copying and pasting
markup from <https://www.lightningdesignsystem.com/> is quick and easy. No need to be a front-end
guru to start designing in the browser!

### Developers

Setting a whole demo org for a quick prototype can take time and effort, whereas cloning the starter
kit and putting a few components together only takes a few minutes. Deploying your prototype to
Heroku for free – in only 2 clicks – is also lightning-fast!

## What’s inside?

- [example prototype](https://starter-kit-demo.herokuapp.com/example.html).

## See Also

The [Design System UI Kit](https://github.com/salesforce-ux/design-system-ui-kit/) is a great way
for designers to put beautiful static prototypes together.
-->

## Portals

- Adjuster Portal
- Policyholder (Homeowner) Portal
- Field Technician Portal

## Table of Contents

- [User Experience Basics](#user-experience-basics)
- [Factors that Influence UX](#factors-that-influence-ux)
- [About](#about)
- [Tasks](#tasks)
- [Marketing Website](#marketing-website)
- [Exemplar Application](#exemplar-application)
- [Portals](#portals)
- [Table of Contents](#table-of-contents)
- [Dev Kits](#dev-kits)
- [Todo](#todo)
- [Mock API endpoints](#mock-api-endpoints)
- [Environment](#environment)
  - [`VITE_API_URL`](#vite_api_url)
  - [`VITE_ASSETS_URL`](#vite_assets_url)
  - [`GITHUB_TOKEN`](#github_token)
- [Directory Structure](#directory-structure)
- [Components](#components)
- [Services](#services)
- [Utilities](#utilities)
- [Deploy to Heroku](#deploy-to-heroku)
- [Salesforce](#salesforce)
  - [Custom Domain Playgrounds](#custom-domain-playgrounds)
  - [Characters](#characters)
  - [Developer](#developer)
- [Contacts](#contacts)
- [Prospects](#prospects)
- [Opportunites](#opportunites)
- [Companies](#companies)
  - [AirBnB](#airbnb)
  - [Salesforce](#salesforce-1)
  - [Sprout Social](#sprout-social)
  - [Google](#google)
- [Webmail URLs](#webmail-urls)
- [Use Testing Library's Jest DOM Matchers with `vitest`](#use-testing-librarys-jest-dom-matchers-with-vitest)
- [Percent encoding](#percent-encoding)
- [Alpine.js](#alpinejs)
  - [Attributes](#attributes)
    - [x-data](#x-data)
    - [x-bind](#x-bind)
    - [x-on](#x-on)
    - [x-text](#x-text)
    - [x-html](#x-html)
    - [x-model](#x-model)
    - [x-show](#x-show)
    - [x-transition](#x-transition)
    - [x-for](#x-for)
    - [x-if](#x-if)
    - [x-init](#x-init)
    - [x-effect](#x-effect)
    - [x-ref](#x-ref)
    - [x-cloak](#x-cloak)
    - [x-ignore](#x-ignore)
  - [Properties](#properties)
    - [$store](#store)
    - [$el](#el)
    - [$dispatch](#dispatch)
    - [$watch](#watch)
    - [$refs](#refs)
    - [$nextTick](#nexttick)
  - [Methods](#methods)
    - [Alpine.data](#alpinedata)
    - [Alpine.store](#alpinestore)

## Dev Kits

- 3000 - Playground (svelte, asp.net minimal api)
- 3000 - Prototype (vue, asp.net minimal api)
- 4000 - Parts Kit
- 4081 - Blog (ruby on rails, bulma)
- 4321 - Startup (astro)
- 5082 - Project (vue, tailwind, msw, storybook)
- 5083 - PIF (nuxt)
- 5090 - UX Lab (nuxt, netlify)
- 5091 - Demo Docs (nuxt, Hancock UI Pro, netlify)
- 5182 - Project Docs (nuxt, docus)
- 8081 - Starter Kit (html, nunjucks, slds, gulp, heroku)
- 8082 - Slides (vue, vite, slidev)
- 8083 - App (vue, vite, maizzle, netlify)
- 8083 - API (vue, vite, maizzle, heroku)

## Todo

- [ ] add and deploy resources to the mocked API project
- [x] read assets and mocked API endpoints from the environment
- [x] create an `npm` docs link helper utility

## Mock API endpoints

- [`accounts`](https://api.victortolbert.com/accounts)
- [`cases`](https://api.victortolbert.com/cases)
- [`companies`](https://api.victortolbert.com/companies)
- [`emails`](https://api.victortolbert.com/emails)
- [`events`](https://api.victortolbert.com/events)
- [`messages`](https://api.victortolbert.com/messages)
- [`people`](https://api.victortolbert.com/people)
- [`plants`](https://api.victortolbert.com/plants)
- [`projects`](https://api.victortolbert.com/projects)
- [`roles`](https://api.victortolbert.com/roles)
- [`states`](https://api.victortolbert.com/states)
- [`statuses`](https://api.victortolbert.com/statuses)
- [`users`](https://api.victortolbert.com/users)

## Environment

### `VITE_API_URL`

### `VITE_ASSETS_URL`

### `GITHUB_TOKEN`

## Directory Structure

```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
└─ package.json
```

## Components

- [`ExampleImage`](src/components/example/ExampleImage.vue)
- [`ExampleImage`](src/components/example/ExampleImage.vue)

## Services

- [`httpService`](src/services/httpService.ts)

## Utilities

- [`API`](src/utils/api.ts)
- [`capitalize`](src/utils/capitalize.ts)
- [`npmLink`](src/utils/npmLink.ts)
- [`hex`](src/utils/hex.ts)

## Deploy to Heroku

Deploy your own prototype for free to [Heroku](https://www.heroku.com) in only
2 clicks.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Salesforce

### Custom Domain Playgrounds

| Custom Domain                   | Type                 | Username                          |
| ------------------------------- | -------------------- | --------------------------------- |
| `tolbertdesign-dev-ed.develop`  | Developer Edition    | `victor@tolbert.design.dev`       |
| `empathetic-narwhal-el3mev.com` | Trailhead Playground |                                   |
| `mindful-unicorn-r4kru0.com`    | Trailhead Playground |                                   |
| `hancockclaims--dev2.sandbox`   |                      | `vtolbert@hancockclaims.com.dev2` |

https://empathetic-narwhal-el3mev-dev-ed.trailblaze.lightning.force.com/lightning/r/Account/001Hp00002hILFCIA4/view

### Characters

- Appy the Bobcat
- Astro
- Astro Nomical
- Blaze, the Wolf
- Cloudy the Goat
- Codey, the Bear
- Einstein, the Genius
- Flo the Flying Squirrel
- Genie, the Rabbit
- Koa, the Dog
- Max, the Mule
- Ruth, the Elephant
- Saasy

### Developer

| https://tolbertdesign-dev-ed.develop.my.salesforce.com| victor@tolbert.design.dev |

## Contacts

## Prospects

## Opportunites

## Companies

### AirBnB

### Salesforce

### Sprout Social

### Google

## Webmail URLs

- https://webmail.porkbun.com/?_task=mail&_mbox=INBOX
- https://webmail.porkbun.com/?_task=mail&_mbox=INBOX.Archive
- https://webmail.porkbun.com/?_task=mail&_mbox=INBOX.Sent
- https://webmail.porkbun.com/?_task=mail&_mbox=INBOX.Trash
- https://webmail.porkbun.com/?_task=mail&_mbox=INBOX.Drafts
- https://webmail.porkbun.com/?_task=mail&_action=compose&_id=
- https://webmail.porkbun.com/?_task=addressbook&_source=0

## Use Testing Library's Jest DOM Matchers with `vitest`

<!-- tests/setup.ts -->

```ts
import matchers from '@testing-library/jest-dom/matchers'
import { expect } from 'vitest'

expect.extend(matchers)
```

## Percent encoding

```
%20 is space
%22 is quotes
%5B is '['
and %5D is ']'
```

```ts
function fixedEncodeURI(str) {
  return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']')
}
```

## Alpine.js

Your new, lightweight, JavaScript framework.

- 15 Attributes
  - `x-data`
  - `x-bind`
  - `x-on`
  - `x-text`
  - `x-html`
  - `x-model`
  - `x-show`
  - `x-transition`
  - `x-for`
  - `x-if`
  - `x-init`
  - `x-effect`
  - `x-ref`
  - `x-cloak`
  - `x-ignore`
- 6 Properties
  - `$store`
  - `$el`
  - `$dispatch`
  - `$watch`
  - `$refs`
  - `$nextTick`
- 2 Methods
  - `Alpine.data`
  - `Alpine.store`

### Attributes

#### x-data

Declare a new Alpine component and its data for a block of HTML

```html
<div x-data="{ open: false }">...</div>
```

#### x-bind

Dynamically set HTML attributes on an element

```html
<div x-bind:class="! open ? 'hidden' : ''">...</div>
```

#### x-on

Listen for browser events on an element

```html
<button x-on:click="open = ! open">Toggle</button>
```

#### x-text

Set the text content of an element

```html
<div>
  Copyright ©

  <span x-text="new Date().getFullYear()"></span>
</div>
```

#### x-html

Set the inner HTML of an element

```html
<div x-html="(await axios.get('/some/html/partial')).data">...</div>
```

#### x-model

Synchronize a piece of data with an input element

```html
<div x-data="{ search: '' }">
  <input type="text" x-model="search" />

  Searching for: <span x-text="search"></span>
</div>
```

#### x-show

Toggle the visibility of an element

```html
<div x-show="open">...</div>
```

#### x-transition

Transition an element in and out using CSS transitions

```html
<div x-show="open" x-transition>...</div>
```

#### x-for

Repeat a block of HTML based on a data set

```html
<template x-for="post in posts">
  <h2 x-text="post.title"></h2>
</template>
```

#### x-if

Conditionally add/remove a block of HTML from the page entirely

```html
<template x-if="open">
  <div>...</div>
</template>
```

#### x-init

Run code when an element is initialized by Alpine

```html
<div x-init="date = new Date()"></div>
```

#### x-effect

Execute a script each time one of its dependancies change

```html
<div x-effect="console.log('Count is '+count)"></div>
```

#### x-ref

Reference elements directly by their specified keys using the $refs magic property

```html
<input type="text" x-ref="content" />

<button x-on:click="navigator.clipboard.writeText($refs.content.value)">
  Copy
</button>
```

#### x-cloak

Hide a block of HTML until after Alpine is finished initializing its contents

```html
<div x-cloak>...</div>
```

#### x-ignore

Prevent a block of HTML from being initialized by Alpine

```html
<div x-ignore>...</div>
```

### Properties

#### $store

Access a global store registered using Alpine.store(...)

```html
<h1 x-text="$store.site.title"></h1>
```

#### $el

Reference the current DOM element

```html
<div x-init="new Pikaday($el)"></div>
```

#### $dispatch

Dispatch a custom browser event from the current element

```html
<div x-on:notify="...">
  <button x-on:click="$dispatch('notify')">...</button>
</div>
```

#### $watch

Watch a piece of data and run the provided callback anytime it changes

<div x-init="$watch('count', value => {
  console.log('count is ' + value)
})">...</div>

#### $refs

Reference an element by key (specified using x-ref)

```html
<div x-init="$refs.button.remove()">
  <button x-ref="button">Remove Me</button>
</div>
```

#### $nextTick

Wait until the next "tick" (browser paint) to run a bit of code

```html
<div
  x-text="count"
  x-text="$nextTick(() => {"
    console.log('count is ' + $el.textContent)
  })
>...</div>
```


### Methods


#### Alpine.data

Reuse a data object and reference it using x-data

```html
<div x-data="dropdown">
  ...
</div>
```

...

```ts
Alpine.data('dropdown', () => ({
  open: false,

  toggle() {
    this.open = ! this.open
  }
}))
```

#### Alpine.store

Declare a piece of global, reactive, data that can be accessed from anywhere using $store

```html
<button @click="$store.notifications.notify('...')">
  Notify
</button>
```

...

```js
Alpine.store('notifications', {
  items: [],

  notify(message) {
    this.items.push(message)
  }
})
```

---

[initial commit using Vue v1.0.6]: https://github.com/victortolbert/demo/commit/1346e37253b5eeb949fdff26b4575c65f0a3ebc8
[initial commit using SLDS v0.12.2, Feb 10, 2016]: https://github.com/victortolbert/demo/commit/fef80acb28437e54dbf6717b98e72202bf3f6e20
[upgraded to SLDS v1.02, Apr 14, 2016]: https://github.com/victortolbert/demo/commit/20789fa287f3d365ddd5031bf7b58b580449309f

[^2.1.4]
