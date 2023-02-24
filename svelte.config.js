import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'@': path.resolve('./src'),
			'@components': path.resolve('./src/components'),
			'@lib': path.resolve('./src/lib'),
			'@utils': path.resolve('./src/lib/utils'),
			'@assets': path.resolve('./src/assets')
		}
	},
	preprocess: vitePreprocess()
};

export default config;
