// import adapter from '@sveltejs/adapter-auto';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
// 		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
// 		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
// 		adapter: adapter()
// 	}
// };

// export default config;
import adapterStatic from '@sveltejs/adapter-static';
import adapterVercel from '@sveltejs/adapter-vercel';

const isVercel = process.env.VERCEL === '1';
const repoName = 'yuilhansalang'; // Change this to your actual GitHub repo name

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: isVercel
      ? adapterVercel()
      : adapterStatic({
          pages: 'build',
          assets: 'build',
          fallback: 'index.html'
        }),
    paths: {
      base: isVercel ? '' : `/${repoName}`
    },
    appDir: 'internal' // Helps avoid caching issues
  }
};

export default config;
