module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: "@storybook/html-webpack5",
    options: {}
  },
  features: {
    previewMdx2: true
  },
  docs: {
    autodocs: true
  }
};
