# FormData


The `FormData` interface provides a way to construct a set of key/value pairs representing form fields and their values, which can be sent using the [`fetch()`][1], [`XMLHttpRequest.send()`][2] or [`navigator.sendBeacon()`][3] methods. It uses the same format a form would use if the encoding type were set to `"multipart/form-data"`.

You can also pass it directly to the [URLSearchParams][4] constructor if you want to generate query parameters in the way a [`<form>`][5] would do if it were using simple GET submission.

An object implementing FormData can directly be used in a [`for...of`][6] structure, instead of [`entries()`][7]: `for (const p of myFormData)` is equivalent to `for (const p of myFormData.entries())`.



[1]: https://developer.mozilla.org/en-US/docs/Web/API/fetch
[2]: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send
[3]: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon
[4]: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
[5]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
[6]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
[7]: https://developer.mozilla.org/en-US/docs/Web/API/FormData/entries
[8]: https://www.youtube.com/shorts/zm7GitsAPRE "useState() not needed - the browser's got you covered! #reactjs #browser #webdevelopment"
