import {vitePreprocess} from '@astrojs/svelte';

export default {
  kit: {
    target: '#svelte',
  },
  preprocess: vitePreprocess(),
};
