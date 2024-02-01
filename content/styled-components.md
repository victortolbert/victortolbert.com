# Styled Components

:u-icon{name="i-vscode-icons-file-type-styled" class="h-11 w-auto float-right pl-8 mb-16"}


Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!

```tsx
import styled from 'styled-components';

// Create a component that renders a <p> element with blue text
const BlueText = styled.p`
  color: blue;
`;

<BlueText>My blue text</BlueText>
```

- <https://styled-components.com/docs>

**CSS-in-JS** is a styling technique by which [JavaScript](/javascript) is used to style components. When this JavaScript is parsed, [CSS](/css) is generated (usually as a `<style>` element) and attached into the [DOM](/dom). It enables the abstraction of CSS to the component level itself, using JavaScript to describe styles in a declarative and maintainable way. There are multiple implementations of this concept in the form of libraries such as
