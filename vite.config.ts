import { sveltekit } from "@sveltejs/kit/vite";
import UnoCSS from "unocss/vite";

export default {
	plugins: [
		UnoCSS(),
		sveltekit(),
	],
	resolve: {
		alias: {
			$root: "./",
		},
	},
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"],
	},
	build: {
		target: "esnext",
	},
	esbuild: {
		target: "esnext",
	},
};
