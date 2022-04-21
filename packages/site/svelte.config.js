import adapter from '@sveltejs/adapter-auto';
import { markdown } from 'svelte-preprocess-markdown';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		markdown(),
	],
};

export default config;
