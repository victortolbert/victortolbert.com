#!/usr/bin/node
//
// This script will run a local development server. This is useful when
// developing the theme.
//
// Usage:
// `serve.js` to use the default JSONResume example
// `serve.js <filename>` to open a particular resume file

const http = require('node:http')
const fs = require('node:fs')
const args = require('optimist').argv

const port = 8888
http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    })
    res.end(await render())
  }
}).listen(port)

console.log('Preview: http://localhost:8888/')
console.log('Serving..')

async function render() {
  try {
    const resume = args._.length
      ? JSON.parse(fs.readFileSync(args._[0], 'utf8'))
      : require('resume-schema').resumeJson
    return await require('./index.cjs').render(resume)
  }
  catch (e) {
    console.log(e.message)
    return ''
  }
}
