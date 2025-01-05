import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		target: 'esnext',
		minify: 'esbuild',
		cssMinify: true,
		rollupOptions: {
			output: {
				manualChunks: {
					'vendor': ['svelte', '@sveltejs/kit'],
					'ui': ['./src/lib/components/Desktop.svelte', './src/lib/components/Dock.svelte', './src/lib/components/MenuBar.svelte']
				}
			}
		}
	},
	optimizeDeps: {
		include: ['svelte', '@sveltejs/kit']
	},
	server: {
		host: '0.0.0.0',
		port: 1111,
		fs: {
			strict: false
		}
	},
	resolve: {
		alias: {
			$lib: '/src/lib'
		}
	},
});
