<script lang="ts">
	import type { ChatMessage } from "$lib/index";

	type Props = {
		message: ChatMessage;
		isOwn?: boolean;
	};

	let { message, isOwn = false }: Props = $props();
</script>

<div
	class={{
		"mb-4 flex": true,
		"justify-end": isOwn,
	}}
>
	<div
		class={{
			"max-w 2/3 rounded-lg px-4 py-2": true,
			"bg-primary text-primary-foreground": isOwn,
			"bg-muted": !isOwn,
		}}
	>
		<p>{message.text}</p>
	</div>
</div>
