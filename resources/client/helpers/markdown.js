const shiki = require('shiki')

const t = shiki.loadTheme('./my-theme.json')

shiki.getHighlighter({
  theme: t,
})
