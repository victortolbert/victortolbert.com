const http = require('http')
const fs = require('fs')
const path = require('path')
const shiki = require('shiki')

const styleHTML = `
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap" rel="stylesheet" />
<style>
body { margin: 0 }
pre { padding: 1rem 2rem; margin: 0 }
pre code { font-family: "IBM Plex Mono"; font-size: 12px }
</style>
`

;(async () => {
  const highlighter = await shiki.getHighlighter({
    theme: 'nord',
  })

  http
    .createServer(function (req, res) {
      const src = fs.readFileSync(path.resolve(__dirname, 'index.js'), 'utf-8')
      const html = styleHTML + highlighter.codeToHtml(src, 'js')
      res.setHeader('Content-Type', 'text/html')
      res.write(html)
      res.end()
    })
    .listen(8080)
})()
