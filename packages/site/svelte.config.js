import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { markdown } from 'svelte-preprocess-markdown';

const config = {
  preprocess: [
    preprocess(),
    markdown(),
  ],
  extensions: ['.svelte', '.md'],
  kit: {
    adapter: adapter(),
    prerender: {
      default: true,
    },
  }
};

export default config;
