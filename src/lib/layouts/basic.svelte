<script>
	import { fade } from 'svelte/transition';

	let { children} = $props();
</script>

<div in:fade|global>
	{@render children?.()}
</div>
