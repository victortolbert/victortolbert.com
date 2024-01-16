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
      'unused-imports/no-unused-vars': 'off',
      'vue/one-component-per-file': 'off',
      'vue/no-template-shadow': 'off',
      'vue/no-reserved-component-names': 'off',
    },
  },
  {
    ignores: [
      'README.md',
      '.storybook/',
      'content',
      'fixtures',
      'public',
      'scripts',
    ],
  },
)
