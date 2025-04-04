import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#e3b6ed', 600: '#a700c3', 900: '#4e0e5b', 950: '#36113e' };
const gray = { 100: '#ffffff', 200: '#e6e6e6', 300: '#cccccc', 400: '#999999', 500: '#666666', 700: '#333333', 800: '#1a1a1a', 900: '#0C0A09' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
		},
	},
	plugins: [starlightPlugin()],
};