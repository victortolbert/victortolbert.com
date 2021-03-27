<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="icon" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel</title>
    {{ vite_assets() }}
</head>
<body class="bg-gray-100">
    <div id="app"></div>
    <script>
      (function() {
        const prefersDark
    = window.matchMedia
    && window.matchMedia('(prefers-color-scheme: dark)').matches
        const setting = localStorage.getItem('color-schema') || 'auto'
        if (setting === 'dark' || (prefersDark && setting !== 'light'))
          document.documentElement.classList.toggle('dark', true)
      })()
    </script>
</body>
</html>
