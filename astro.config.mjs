import {defineConfig} from 'astro/config';

import svelte, {vitePreprocess} from '@astrojs/svelte';
import {sass} from 'svelte-preprocess';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte({
      preprocess: [tsconfigPaths(), vitePreprocess(), sass()],
    }),
  ],
});
