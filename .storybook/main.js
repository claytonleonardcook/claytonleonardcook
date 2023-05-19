const path = require('path');
const preprocess = require('svelte-preprocess');

/** @type { import('@storybook/svelte-webpack5').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.svelte'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-svelte-csf',
  ],
  framework: '@storybook/svelte-vite',
  docs: {
    autodocs: true,
  },
};
export default config;
