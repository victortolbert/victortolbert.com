const mix = require('laravel-mix')
let path = require('path')


mix.js('resources/js/app.js', 'public/js')
mix.postCss('resources/css/app.css', 'public/css', [
  require('tailwindcss'),
])

if (mix.inProduction()) {
  mix.version()
}

mix.alias({
  '@': path.join(__dirname, 'resources/js'),
})
