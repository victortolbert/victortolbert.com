---
title: Testing
published: 2024-01-17
---

## Vue Testing Library

[`Vue Testing Library`](https://testing-library.com/docs/vue-testing-library/intro/) is a very light-weight solution for testing Vue components. It provides light utility functions on top of [`@vue/test-utils`](https://v1.test-utils.vuejs.org/), in a way that encourages better testing practices.

Its primary guiding principle is:

> [The more your tests resemble the way your software is used, the more confidence they can give you.](https://testing-library.com/docs/guiding-principles)

<!--
> [The less your tests resemble the way your software is used, the less confidence they can give you.](https://twitter.com/kentcdodds/status/977018512689455106)
-->

So rather than dealing with instances of rendered Vue components, **your tests will work with actual DOM nodes.**

The utilities this library provides facilitate querying the DOM in the same way the user would. They allow you to find elements by their label text, finding links and buttons from their text, and assert that your application is **accessible**.

It also exposes a recommended way to find elements by a `data-testid` as an "escape hatch" for elements where the text content and label do not make sense or is not practical.

### Custom Matchers

https://github.com/testing-library/jest-dom#custom-matchers

- `toBeDisabled`
- `toBeEnabled`
- `toBeEmptyDOMElement`
- `toBeInTheDocument`
- `toBeInvalid`
- `toBeRequired`
- `toBeValid`
- `toBeVisible`
- `toContainElement`
- `toContainHTML`
- `toHaveAccessibleDescription`
- `toHaveAccessibleName`
- `toHaveAttribute`
- `toHaveClass`
- `toHaveFocus`
- `toHaveFormValues`
- `toHaveStyle`
- `toHaveTextContent`
- `toHaveValue`
- `toHaveDisplayValue`
- `toBeChecked`
- `toBePartiallyChecked`
- `toHaveErrorMessage`
- `Deprecated matchers`
- `toBeEmpty`
- `toBeInTheDOM`
- `toHaveDescription`

### Useful links

- https://testing-library.com/docs/queries/about/#types-of-queries
- https://testing-library.com/docs/ecosystem-jest-dom/
- https://github.com/testing-library/jest-dom#usage

[queries]: https://testing-library.com/docs/queries/about/#types-of-queries 'Types of Queries'
[jest-dom]: https://testing-library.com/docs/ecosystem-jest-dom/ 'Custom jest matchers to test the state of the DOM'

Traditionally, lots of folks do something like:

```ts
const usernameInput = wrapper.find('input').first()
const passwordInput = wrapper.find('input').last()
```

...suggested

```ts
const usernameInput = getByLabelText('Username')
const passwordInput = getByLabelText('Password')
```

User's look for your fields by their label text, not by the fact that one comes first and the other comes second.

### Testing Library Queries

Overview

Queries are the methods that Testing Library gives you to find elements on the page. There are several [types of queries](https://testing-library.com/docs/queries/about/#types-of-queries) ("get", "find", "query"); the difference between them is whether the query will throw an error if no element is found or if it will return a Promise and retry. Depending on what page content you are selecting, different queries may be more or less appropriate. See the [priority guide](https://testing-library.com/docs/queries/about/#priority) for recommendations on how to make use of semantic queries to test your page in the most accessible way.

After selecting an element, you can use the [Events API](https://testing-library.com/docs/dom-testing-library/api-events) or [user-event](https://testing-library.com/docs/user-event/intro) to fire events and simulate user interactions with the page, or use Jest and [jest-dom](https://testing-library.com/docs/ecosystem-jest-dom) to make assertions about the element.

There are Testing Library helper methods that work with queries. As elements appear and disappear in response to actions, [Async APIs](https://testing-library.com/docs/dom-testing-library/api-async) like [`waitFor`](https://testing-library.com/docs/dom-testing-library/api-async#waitfor) or [`findBy` queries](https://testing-library.com/docs/dom-testing-library/api-async#findby-queries) can be used to await the changes in the DOM. To find only elements that are children of a specific element, you can use [`within`](https://testing-library.com/docs/dom-testing-library/api-within). If necessary, there are also a few options you can [configure](https://testing-library.com/docs/dom-testing-library/api-configuration), like the timeout for retries and the default testID attribute.

#### Example

```ts
import {render, screen} from '@testing-library/react' // (or /dom, /vue, ...)

test('should show login form', () => {
  render(<Login />)
  const input = screen.getByLabelText('Username')
  // Events and assertions...
})
```

---

## Video Presentation Summary

The context discusses different types of software testing like unit testing, integration testing, end-to-end testing, usability testing, and penetration testing. It uses examples related to testing car wheels and tires to explain these different types of testing.

- Unit testing ensures basic functionality like checking if a wheel is round and rolls.
- Integration testing checks if components work together properly.
- End-to-end testing checks long term use cases.
- Usability testing focuses on the user experience.
- Penetration testing ensures security.

All forms of testing are important and overlap to provide a robust testing strategy.

## Questions

1. What are the different types of testing discussed?
2. What examples are used to explain the different testing types?
3. Why is it important to implement all forms of testing rather than just one or two?
4. What issue can unit testing not catch that requires other testing types?
5. What form of testing ensures that a tire can withstand long term stress like a bicycle race?

What examples are used to explain the different testing types?

The examples used to explain the different testing types are related to testing car wheels and tires.

- For unit testing, the example is checking if a wheel is round and rolls.
- For integration testing, the example is ensuring that the tire integrates well with the bicycle.
- For end-to-end testing, the example is checking if the tire can withstand a long tough race.
- For usability testing, the example is the missing door handle on a car.
- For penetration testing, the example is ensuring the security of a car window.

Each form of testing serves a specific purpose and can catch different types of issues. By implementing all forms of testing, it ensures a more robust testing strategy and helps in delivering an awesome experience to the users.
