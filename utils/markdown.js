import marked from 'marked'

marked.setOptions({
  gfm: false,

  // highlight(code) {
  //   return require('highlight.js').highlightAuto(code).value
  // },
})

export function markdown(value) {
  return marked(value)
}
