<script lang="ts">
	import { Circle } from "lucide-svelte";
    

	// Define the ChatUser type (adjust according to your app)
	type ChatUser = {
		name: string;
		avatar?: string;
		lastMessage: string;
		timestamp: string;
		status: string;
	};

	// Accept props from the parent
	export let user: ChatUser;
	export let selected: boolean = false;
	export let onClick: () => void = () => {};

	// Function to get initials from user's name for fallback
	const getInitials = (name: string) => {
		return name
			.split(" ")
			.map((n) => n[0])
			.join("")
			.toUpperCase();
	};
</script>

<button
	on:click={onClick}
	class={`flex w-full items-center gap-3  p-4 hover:bg-gray-100 ${selected ? "bg-gray-200" : ""}`}
>
	<div class="relative">
		<!-- Avatar container -->
		<div class="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white overflow-hidden">
			{#if user.avatar}
				<img src={user.avatar} alt={user.name} class="w-full h-full object-cover" />
			{:else}
				<span class="font-bold">{getInitials(user.name)}</span>
			{/if}
		</div>
		<!-- Online status indicator -->
		{#if user.status === "online"}
			<div class="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-green-500"></div>
		{/if}
	</div>
	<div class="flex-1 text-left">
		<h3 class="font-medium">{user.name}</h3>
		<p class="text-sm text-gray-500">{user.lastMessage}</p>
	</div>
	<span class="text-xs text-gray-500">{user.timestamp}</span>
</button>
