# victortolbert.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/94de5ecf-6912-416b-aa50-712d66212ec7/deploy-status)](https://app.netlify.com/sites/amazing-belekoy-e74780/deploys)

> [!WARNING]
> This project is heavily a work in progress.

## Features

- Calendar
- Resume Generator
- GoogleMap API Example

:octocat:


@victortolbert



> [!NOTE]
> Essential details that users should not overlook, even when browsing quickly.

> [!TIP]
> Additional advice to aid users in achieving better outcomes.

> [!IMPORTANT]
> Vital information required for users to attain success.

> [!WARNING]
> Urgent content that requires immediate user focus due to possible risks.

> [!CAUTION]
> Possible negative outcomes resulting from an action.

Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].

You can also use words, to fit your writing style more closely[^note].

[^1]: My reference.
[^2]: Every new line should be prefixed with 2 spaces.
  This allows you to have a footnote with multiple lines.
[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.
    This footnote also has been made with a different syntax using 4 spaces for new lines.

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)

Referencing a bug by #bugID in your git commit links it to the slip. For example #1.

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>


```diff
- this code or text is the old version
+ this is what it was changed to
```


2 <sup>53-1</sup> and -2 <sup>53-1</sup>


<table>
<tr>
<th>Before Hoisting</th>
<th>After Hoisting</th>
</tr>
<tr>
<td>
<pre lang="js">
console.log(fullName); // undefined
fullName = "Dariana Trahan";
console.log(fullName); // Dariana Trahan
var fullName;
</pre>
</td>
<td>
<pre lang="js">
var fullName;
console.log(fullName); // undefined
fullName = "Dariana Trahan";
console.log(fullName); // Dariana Trahan
</pre>
</td>
</tr>
</table>

![GitHub forks](https://img.shields.io/github/forks/lifeparticle/Markdown-Cheatsheet?style=for-the-badge)


<kbd>cmd + shift + p</kbd>

<details>
  <summary>Markdown</summary>

-  <kbd>[Markdown Editor](https://binarytree.dev/me)</kbd>
-  <kbd>[Table Of Content](https://binarytree.dev/toc)</kbd>
-  <kbd>[Markdown Table Generator](https://binarytree.dev/md_table_generator)</kbd>

</details>

pie
"Movies" : 80
"TV shows" : 20



## Todolist

- [ ] Nuxt: Docs https://ui.nuxt.com/pro/getting-started/content

You will be able to wrap your <ContentSlot /> or <ContentRenderer /> with the PageBody component and its prose ~class~ +prop+ to apply the prose prose-primary dark:prose-invert max-w-none classes automatically to your content and make it look great.

- [ ] Fix breadcrumb title for acronyms
- [x] Failed to load resource: net::ERR_BLOCKED_BY_RESPONSE.NotSameOriginAfterDefaultedToSameOriginByCoep
- [x] Add resume
- [ ] Create GitHub profile bio
- [ ] Add emailing solution
- [ ] Build and send emails
- [ ] Command K
- [ ] Convert color system to CSS custom properties
- [ ] Add export to CSV example
- [ ] Add file upload example
- [ ] Add form example
- [ ] Add right-click to logo view the design kit

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
- Webpack 5, Vite, Bun
- Full Stack Developer, DevOps, Infrastructure as Code, Penetration Testing, Blogger
- Laravel and React developer and Technology enthusiast
- Software engineer, digital nomad, public speaker and remote worker
- Technical Support Engineer, Systems Administrator, Fullstack Developer, Raspberry Pi tinker
- Front-End and UI/UX Developer, Accessibility advocate, JAMStack fan, working in the marketing and entertainment industry
- Self-taught, Full stack developer from Atlanta, GA. Open Source contributor. Always Learning.
- Indie Hacker. Web Developer. Traveler
- Software Engineer - Distributed Systems, Cloud Platforms, and Web.
- Computer Engineer. Web Developer. Teacher at designcoder.net
- Web developer, adventurer, and amateur photographer
- Principal Engineer & Senior Frontend Engineer
- Full Stack Developer and Open Source Contributor
- Full stack JavaScript developer who also enjoys DevOps and automation
- Developer, hacker. Passionate about cyber security, web development and distributed systems.
- Web Developer, Co-Organizer North Atlanta Laravel Meetup
- Full-stack PHP, JS, and DevOps developer, agency director, and open-source contributor
- Detail-oriented and passionate Software Engineer.
- User Interface developer focusing on Performance, A11y and CSS

- SQL, C#, .NET, .NET Core, ASP.NET, Apex, Powershell
- TypeScript, JavaScript, Vue, React, Express.js, Node.js
- Nuxt, Next.js, Laravel, Ruby on Rails, WordPress, Salesforce
- Google Cloud Platform, AWS, Azure
- Flutter
- Lightning Web Components
- PHP, Ruby, Python

ATT: Soap, WSDL, Apache CAML, Angular.js, Backbone.js, OAUTH
Videa: .NET, Angular.js, Vue.js, Axure, Team Foundation Services, WordPress
Turner: Drupal, React, Vue.js
Booster, Laravel, CodeIgniter, Bootstrap, Bulma, Tailwind CSS, Figma
Hancock. .NET, C#, Azure DevOps


Bootstrap Vue, Kendo UI for Vue
Storybook
Vite, Vitest
Astro, Remix,
React Email, Vue Email,
Remotion
Slidev
Svelte, SvelteKit

Problem Solving, Data Structures, User Documentation, Document Object Model (DOM)
 Microsoft SQL Server · SQL · Document Object Model (DOM) · Language Integrated Query (LINQ)
  Software Development Life Cycle (SDLC)
  Use Cases · Code Reviews

  Successfully integrated external services, including Hi Marley, VIP, and Xact, enhancing the functionality and performance of the application.

Software Engineer maintaining and adding enhancement to an in-house company workflow application using MVC, C# and Azure PaaS technologies.

  Key contributor on a dynamic team dedicated to transforming legacy web applications into a modern, RESTful .NET Core platform.

  Played a crucial role in maintaining and optimizing an existing legacy ASP.NET application.

  Skills: REST APIs · SQL · Object-Oriented Programming (OOP) · Git · Agile Methodologies · ASP.NET Web API · Microsoft SQL Server · .NET Framework · Programming · Microsoft Azure

  Telerik Web Controls

  VICKNICE
-->

# Environments

[Develop]: https://develop--victortolbert.netlify.app/
[Production]: https://victortolbert.com
