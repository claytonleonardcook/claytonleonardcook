import {defineConfig} from 'astro/config';

import svelte, {vitePreprocess} from '@astrojs/svelte';
import {sass} from 'svelte-preprocess';

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte({
      preprocess: [vitePreprocess(), sass()],
    }),
  ],
});
