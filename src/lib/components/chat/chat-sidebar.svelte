<script lang="ts">
	import { Search } from "lucide-svelte";
	import { Input } from "$lib/components/ui/input";
	import ChatUserCard from "$lib/components/chat/chat-user-card.svelte";
	import type { ChatUser } from "$lib/index";

	type Props = {
		users: ChatUser[];
		selectedUser: ChatUser;
		onUserSelect: (user: ChatUser) => void;
	};

	let { users, selectedUser, onUserSelect }: Props = $props();
</script>

<aside class="flex h-full w-80 flex-col border-r bg-white rounded-lg ">
	<!-- Search -->
	<div class="border-b p-4">
		<div class="relative">
			<Search class="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
			<Input placeholder="Search..." class="pl-8" />
		</div>
	</div>

	<!-- Users list -->
	<div class="flex-1 overflow-y-auto">
		{#each users as user (user.id)}
			<ChatUserCard {user} selected={selectedUser.id === user.id} onClick={() => onUserSelect(user)} />
		{/each}
	</div>
</aside>
