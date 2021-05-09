module.exports = {
  "stories": [
    "../**/*.stories.@(js|jsx|ts|tsx)",
    "../**/*.stories.mdx",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },

  ]
}
