import path from 'path';
import netlify from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: netlify(),
		target: 'body',
		vite: {
			resolve: {
				alias: {
					// these are the aliases and paths to them
					'$components': path.resolve('./src/components'),
					'$lib': path.resolve('./src/lib'),
					'$assets': path.resolve('./src/assets')
				}
			}
		}
	}
};

export default config;
