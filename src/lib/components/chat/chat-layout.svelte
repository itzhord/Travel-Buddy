<script lang="ts">
	import type { Snippet } from "svelte";
	let { children }: { children: Snippet } = $props();
</script>

<div class="flex h-dvh md:w-[75vw] m-auto md:h-[75vh] w-full overflow-hidden rounded-xl bg-background">
	{@render children()}
</div>

