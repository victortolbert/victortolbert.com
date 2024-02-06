# jQuery

:u-icon{name="i-logos-jquery" class="h-11 w-auto float-right pl-8 mb-16"}

jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animations, and Ajax. It is free, open-source software using the permissive MIT License. As of August 2022, jQuery is used by 77% of the 10 million most popular websites.

## Remove `<img>` elements from the set that have `<p>` elements as their parent element.

```js
$('img').attr('src', 'http://static.jquery.com/files/rocker/images/logo_jquery_215x53.gif')
	.filter(function(){
    return !$(this).parent('p').length == 1
  }).wrap('<p class="added"></p>');
```

## Wrap a `<strong>` element around any text within an `<li>` that contains the pattern **jQuery**

```js
const pattern = /jQuery/i

$('ul li').filter(function() {
  return pattern.test($(this).text())
}).wrap('<strong></strong>')
```

```js
// alert($('div').index($('div:last')))
// alert($('div:last').index() )
```

## Alert index of the clicked div amongst all div's in the wrapper set

```js
$('#nav div').click(function() {
    alert($('#nav div').index(this))
		// or, nice trick...
    // alert($(this).prevAll().length)
})

alert($('body', $('iframe').contents()).html())
```
