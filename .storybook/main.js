const {mergeConfig} = require('vite');
const path = require('path');

/** @type { import('@storybook/svelte-webpack5').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../storybook/**/*.stories.ts'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss',
  ],
  framework: {
    name: '@storybook/sveltekit',
    options: {},
  },
  core: {},
  docs: {
    autodocs: true,
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@components': path.resolve(__dirname, '../src/components'),
        },
      },
    });
  },
};

export default config;
