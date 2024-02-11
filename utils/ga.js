(function (i, s, o, g, r, a, m) {
  i.GoogleAnalyticsObject = r
  // eslint-disable-next-line no-unused-expressions
  i[r] = i[r] || function () {
    // eslint-disable-next-line prefer-rest-params
    (i[r].q = i[r].q || []).push(arguments)
  // eslint-disable-next-line no-sequences
  }, i[r].l = 1 * new Date()
  a = s.createElement(o)
  m = s.getElementsByTagName(o)[0]
  a.async = 1
  a.src = g
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga')
ga('create', 'UA-XXXXX-1', 'videa.design')
ga('send', 'pageview')
