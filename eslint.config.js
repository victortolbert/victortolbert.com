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
      // Global
      'no-alert': 'off',
      'no-console': 'off',
      'no-irregular-whitespace': 'off',
      'ts/consistent-type-definitions': 'off',
      'unused-imports/no-unused-vars': 'off',
      'jsdoc/check-param-names': 'off',
      'jsdoc/require-param-name': 'off',

      // Vue
      'vue/no-template-shadow': 'off',
      'vue/one-component-per-file': 'off',

      'vue/multi-word-component-names': 0,
      'vue/max-attributes-per-line': 'off',
      'vue/no-v-html': 0,
    },
    // ignores: [
    //   'README.md',
    //   '.storybook/',
    //   'fixtures',
    //   './public/**',
    // ],
  },
  {
    ignores: [
      'README.md',
      '.storybook/',
      'content',
      'fixtures',
      'public',
      'scratchpad.js',
    ],
  },
)
