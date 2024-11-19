import presetUno from "@unocss/preset-uno";
import presetIcons from "@unocss/preset-icons";
import { presetRadix } from "unocss-preset-radix";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import transformerDirectives from "@unocss/transformer-directives";
import extractorSvelte from "@unocss/extractor-svelte";
import { defineConfig } from "unocss";

const pseudo = (variant: string, selector = variant) => (matcher: string) => {
	if (!matcher.startsWith(variant)) return matcher;
	return {
		matcher: matcher.slice(variant.length),
		selector: (s: string) => s + selector,
	};
};

const colors = {
	acc: "plum",
	base: "gray",
	err: "tomato",
	info: "cyan",
	prim: "blue",
	succ: "green",
	warn: "amber",
};

export default defineConfig({
	presets: [
		presetUno({
			dark: "media",
		}),
		presetRadix({
			palette: Object.values(colors),
			aliases: colors,
		}),
		presetIcons({
			scale: 1.2,
			collections: {
				mdi: () =>
					import("@iconify-json/material-symbols/icons.json").then((
						i,
					) => i.default),
			},
			extraProperties: {
				"display": "block",
				"vertical-align": "middle",
			},
		}),
	],
	variants: [
		// toggled:
		pseudo("toggled:", '[toggled="true"]'),
	],
	shortcuts: {
		"absolute-center": "absolute top-1/2 left-1/2 translate--1/2",
		"box": "flex flex-col",
		"box-row": "flex-1 flex min-h-0 [&_>_.box]:min-h-0",
		"box-fill": "box flex-1 min-h-0",
		"box-scroll": "box-fill overflow-y-auto",
		"tint": "light:bg-hue-3A dark:bg-hue-2A",
		"stroke": "ring-(1 inset hue-6A)",
		"fill": `
            light:(bg-hue-10 text-hue-1) !light:*:text-hue-1
            dark:(bg-hue-5A text-hue-12) !dark:*:text-hue-12`,
	},
	transformers: [
		transformerVariantGroup(),
		transformerDirectives(),
	],
	extractors: [
		extractorSvelte(),
	],
	content: {
		pipeline: {
			include: [
				"src/**/*.{js,ts,svelte,html}",
			],
		},
	},
	safelist: [
		"hue-base",
		"text-base",
		"text-hue-12",
		"text-nowrap",
		"select-none",
		...Object.keys(colors).map((c) => `hue-${c}`),
	],
});
