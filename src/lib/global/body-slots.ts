import { SvelteSet } from "svelte/reactivity";
import type { Snippet } from "svelte";

export const slots = new SvelteSet<Snippet>();
