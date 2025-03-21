<script lang="ts">
	import { fade } from "svelte/transition";
	import { Phone } from "lucide-svelte";
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import ChatMessage from "$lib/components/chat/chat-message.svelte";
	import type { ChatMessage as ChatMessageType, ChatUser } from "$lib/index";

	type Props = {
		messages: ChatMessageType[];
		selectedUser: ChatUser;
		currentUserId: number;
		onSendMessage: (text: string) => void;
	};

	let { messages, selectedUser, currentUserId, onSendMessage }: Props = $props();

	// New message input
	let newMessage = $state("");

	// Handle send message
	const handleSubmit = (e: SubmitEvent) => {
		e.preventDefault();
		if (newMessage.trim()) {
			onSendMessage(newMessage);
			newMessage = "";
		}
	};

	// Get user initials for fallback
	const getInitials = (name: string) => {
		return name
			.split(" ")
			.map((n) => n[0])
			.join("")
			.toUpperCase();
	};
</script>

<div class="flexff h-full flex-1 flex-col rounded-lg">
	<!-- Chat header -->
	<header class="flex items-center justify-between border-b p-4">
		<div class="flex items-center gap-3">
			<!-- Alternative Avatar -->
			<div class="relative w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white overflow-hidden">
				{#if selectedUser.avatar}
					<img src={selectedUser.avatar} alt={selectedUser.name} class="w-full h-full object-cover" />
				{:else}
					<span class="font-bold">{getInitials(selectedUser.name)}</span>
				{/if}
			</div>
			<div>
				<h2 class="font-medium">{selectedUser.name}</h2>
				<p class="text-sm text-muted-foreground">{selectedUser.status}</p>
			</div>
		</div>
		<Button variant="ghost" size="icon">
			<Phone class="h-5 w-5" />
		</Button>
	</header>

	<!-- Messages -->
	<div class="flex-1 overflow-y-auto p-4">
		{#each messages as message (message.id)}
			<div transition:fade>
				<ChatMessage {message} isOwn={message.senderId === currentUserId} />
			</div>
		{/each}
	</div>

	<!-- Message input -->
	<form onsubmit={handleSubmit} class="border-t p-4">
		<Input bind:value={newMessage} placeholder="Type a message..." class="w-full" />
	</form>
</div>
