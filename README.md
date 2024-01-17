# victortolbert.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/94de5ecf-6912-416b-aa50-712d66212ec7/deploy-status)](https://app.netlify.com/sites/amazing-belekoy-e74780/deploys)

> [!WARNING]
> This project is unfinished and heavily a work in progress.

## Todolist

- [x] Add resume

## Contributing

> [!IMPORTANT]
>
> **Please create an issue first before submiting PRs.**
> So that we can discuss about the directions and plans, to avoid wasted efforts. Thank you!

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:8589`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the production application:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


<!-- https://nuxters.nuxt.com/victortolbert -->

## Currency API

```bash
curl -G "https://api.currencyapi.com/v3/historical" \
    -d "apikey=cur_live_9wjJtsnviLcAuT3vZq6SrSVkz5gWvG7e4YaO7v7C" \
    -d "base_currency=USD" \
    -d "date=2020-10-01"
```

```json
{
  "training": [
    {
      "institution": "EmberConf 2020",
      "url": "https://www.testingjavascript.com/",
      "area": "Domain Modeling for JavaScript Apps with Mirage JS",
      "studyType": "Training",
      "startDate": "2020-03-01",
      "endDate": "2020-03-01",
      "score": "",
      "courses": []
    },
    {
      "institution": "Kent C. Dodds",
      "url": "https://www.testingjavascript.com/",
      "area": "Testing JavaScript",
      "studyType": "Training",
      "startDate": "2020-01-01",
      "endDate": "2020-01-01",
      "score": "",
      "courses": []
    },
    {
      "institution": "General Assembly, Atlanta, GA",
      "url": "https://generalassemb.ly",
      "area": "Product Development Bootcamp",
      "studyType": "Corporate Training",
      "startDate": "2017-01-01",
      "endDate": "2017-01-01",
      "score": "",
      "courses": []
    },
    {
      "institution": "CSS Conf 2017, New Orleans, LA",
      "url": "https://web.archive.org/web/20171012222136/https://2017.cssdevconf.com/",
      "area": "Product Development Bootcamp",
      "studyType": "Conference",
      "startDate": "2017-10-09",
      "endDate": "2017-10-11",
      "score": "",
      "courses": []
    },
    {
      "institution": "Camp Sass 2015, Atlanta, LA",
      "url": "https://web.archive.org/web/20150330073546/http://campsass.com/",
      "area": "Product Development Bootcamp",
      "studyType": "Conference",
      "startDate": "2017-01-01",
      "endDate": "2017-01-01",
      "score": "",
      "courses": []
    },
    {
      "institution": "Accelerbrate, Atlanta, GA",
      "url": "https://www.accelebrate.com/",
      "area": "Mastering JavaScript and Advanced JavaScript Best Practices",
      "studyType": "Training",
      "startDate": "2012-01-01",
      "endDate": "2012-01-01",
      "score": "",
      "courses": []
    },
    {
      "institution": "Edward Tufte, Atlanta, GA",
      "url": "https://web.archive.org/web/20090120182129/https://www.edwardtufte.com/tufte/courses",
      "area": "Presenting Data and Information",
      "studyType": "One-day course",
      "startDate": "2009-03-12",
      "endDate": "2009-03-13",
      "score": "",
      "courses": []
    },
    {
      "institution": "User Interface Engineer Conference, Monterey, CA",
      "url": "https://web.archive.org/web/20061230072545/http://www.uie.com/events/web_app_summit/2007/",
      "area": "Presenting Data and Information",
      "studyType": "One-day course",
      "startDate": "2007-01-21",
      "endDate": "2007-01-23",
      "score": "",
      "courses": []
    },
    {
      "institution": "Rails Conf 2007, Portland, OR",
      "url": "https://web.archive.org/web/20070202024926/http://conferences.oreillynet.com/pub/w/51/about.html",
      "area": "The official conference dedicated to everything Rails",
      "studyType": "Conference",
      "startDate": "2007-05-17",
      "endDate": "2007-05-20",
      "score": "",
      "courses": []
    },
    {
      "institution": "The Pragmatic Studio, Pasadena, CA",
      "url": "https://pragmaticstudio.com/",
      "area": "Ruby on Rails",
      "studyType": "In-Person Course",
      "startDate": "2006-01-26",
      "endDate": "2006-01-28",
      "score": "",
      "courses": []
    },
    {
      "institution": "37 Signals, Chicago, IL",
      "url": "https://37signals.com/",
      "area": "The Building of Basecamp",
      "studyType": "Corporate Training",
      "startDate": "2004-09-01",
      "endDate": "2004-09-01",
      "score": "",
      "courses": []
    },
    {
      "institution": "Learning Tree International, Atlanta, GA",
      "url": "https://www.learningtree.com/",
      "area": "XML – A comprehensive Introduction",
      "studyType": "Corporate Training",
      "startDate": "2002-04-01",
      "endDate": "2002-04-01",
      "score": "",
      "courses": []
    }
  ]
}
```

<!--
  Webpack 5
-->
