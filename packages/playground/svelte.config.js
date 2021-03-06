import path from 'path'
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const config = {
  preprocess: [
    preprocess(),
  ],
  extensions: ['.svelte' ],
  kit: {
    adapter: adapter(),
    prerender: {
      default: true,
    },
    vite: {
      resolve: {
        alias: {
          '@cmexd': path.resolve('../'),
        }
      }
    }
  }
};

export default config;
