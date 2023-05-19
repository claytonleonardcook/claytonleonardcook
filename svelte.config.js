import {vitePreprocess} from '@astrojs/svelte';
import {sass} from 'svelte-preprocess-sass';

export default {
  kit: {
    target: '#svelte',
  },
  preprocess: vitePreprocess(),
};
