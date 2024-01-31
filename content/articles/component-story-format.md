---
title: Component Story Format (CSF)
description: The Component Story Format (CSF) is a file format based on JavaScript ES6 modules. It is an open standard for component examples that enables interoperation between development, testing, and design tools.
published: 2024-01-23
slug: article-template
---

The Component Story Format (CSF) is a file format based on JavaScript ES6 modules. It is an open standard for component examples that enables interoperation between development, testing, and design tools. CSF is the universal file format for stories, and it is used to define metadata about components, including the component itself, its title, decorators, and parameters.

## But, why?

Developing UI components outside of your application is the best way to create high-quality components. Storybook pioneered this style of Component-driven Development (CDD).

Stories are now used for visual review by designers and product managers, as well as for design system documentation, automated testing, and even generating design assets from production components.

**Here's what CSF looks like in a hypothetical `RegistrationForm` component.**

The default export declares the component that you're writing stories for:

```ts [RegistrationForm.stories.ts]
import { RegistrationForm } from './forms/RegistrationForm'

export default {
  title: 'forms/RegistrationForm',
  component: RegistrationForm,
}
```

And stories are now objects

```tsx
export const EmptyForm = {
  render: args => <RegistrationForm {...args} />,
  args: { },
  parameters: { }
}
```

**Default render functions for brevity.** 90% of the time, writing a story is just passing some inputs to your component in a standard way.

**You don’t have to specify the render function.** Each story renders the component and passes in all arguments. This greatly simplifies your code.

In our `RegistrationForm` example, the render function is boilerplate:

```tsx
export const EmptyForm = {
  // render: (args) => <RegistrationForm {...args} />, -- now optional!
  args: { },
  parameters: { },
}
```

**Spreadable story objects for reuse.** When you’re trying to model complex states, it’s useful to be able to extend existing stories instead of writing them anew. Suppose you want to show the filled form, but in a different viewport:

```tsx
export const FilledForm = {
  args: {
    email: 'tonya@acme.com',
    password: 'j1287asbj2yi394jd',
  }
}

export const FilledFormMobile = {
  ...FilledForm,
  parameters: {
    viewports: {
      default: 'mobile'
    }
  },
}
```

**Play functions for scripted interactions.** Some UI states are impossible to capture without user interaction. The play function runs after the story has been rendered, and uses testing-library to simulate user interactions.

For example:

```tsx [RegistrationForm.stories.tsx]
import { userEvent, within } from '@storybook/testing-library'

// ...

export const FilledForm = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const emailInput = canvas.getByLabelText('email', {
      selector: 'input'
    })
    await userEvent.type(emailInput, 'example-email@email.com', {
      delay: 100
    })

    const passwordInput = canvas.getByLabelText('password', {
      selector: 'input'
    })
    await userEvent.type(passwordInput, 'ExamplePassword', {
      delay: 100
    })

    const submitButton = canvas.getByRole('button')
    await userEvent.click(submitButton)
  },
}
```

**Automatic titles for convenience.** In CSF, a story’s title determines where it shows up in the navigation hierarchy in the UI. In CSF3, the title can be automatically generated based on the file’s location relative to the root. Less to type, and nothing to update if you reorder your files.

```tsx
export default {
  // title: 'forms/RegistrationForm' -- optional
  component: RegistrationForm,
}
```

## Code Example

::code-group

```ts [Script]
const { data: count } = await useFetch('/api/count')
```

```html [Template]
Page views: {{ count }}
```

::

### Read more

- https://www.componentdriven.org/#why
- [Component Driven Design](https://www.componentdriven.org/)
