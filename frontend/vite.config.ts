import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		host: true,
		port: 3000,
		hmr: {
			clientPort: 3000,
		},
		watch: {
			usePolling: true,
		},
	},
	resolve: {
		alias: {
			'@': '/src',
		},
	},
	build: {
		outDir: 'dist',
	},
	base: './',
	plugins: [react()],
});
