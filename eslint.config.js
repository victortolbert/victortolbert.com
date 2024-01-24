import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: {
      css: true, // by default use Prettier
      html: true, // by default use Prettier
      toml: 'dprint', // use dprint for TOML
      markdown: 'prettier', // use prettier for markdown
    },
    rules: {
      'no-alert': 'off',
      'no-console': 'off',
      'no-irregular-whitespace': 'off',
    },
    ignores: [
      'README.md',
      '.storybook/',
      'fixtures',
      './public/**',
    ],
  },
  {
    ignores: [
      'README.md',
      '.storybook/',
      'fixtures',
      'public',
    ],
  },
)
