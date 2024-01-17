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
