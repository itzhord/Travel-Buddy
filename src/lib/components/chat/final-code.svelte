<script lang="ts">
    // import type { PageData } from './$types';
    import ChatLayout from "$lib/components/chat/chat-layout.svelte";
	import ChatSidebar from "$lib/components/chat/chat-sidebar.svelte";
	import ChatWindow from "$lib/components/chat/chat-window.svelte";
	import type { ChatMessage, ChatUser } from "$lib/index";

	// Mock chat messages data
	let messages: ChatMessage[] = $state([
		{
			id: 1,
			text: "omg, this is amazing",
			senderId: 2,
			timestamp: new Date(),
		},
		{
			id: 2,
			text: "perfect! 😊",
			senderId: 2,
			timestamp: new Date(),
		},
		{
			id: 3,
			text: "Wow, this is really epic",
			senderId: 2,
			timestamp: new Date(),
		},
		{
			id: 4,
			text: "just close for next time",
			senderId: 2,
			timestamp: new Date(),
		},
		{
			id: 5,
			text: "I'll be there in 2 mins 😊",
			senderId: 2,
			timestamp: new Date(),
		},
		{
			id: 6,
			text: "wowwww",
			senderId: 1,
			timestamp: new Date(),
		},
		{
			id: 7,
			text: "super amazing",
			senderId: 1,
			timestamp: new Date(),
		},
		{
			id: 8,
			text: "this is looking good!!",
			senderId: 1,
			timestamp: new Date(),
		},
	]);

	// Mock users data
	let users: ChatUser[] = $state([
		{
			id: 1,
			name: "Brett Lawrey",
			avatar: "$assets/ui-user.png",
			status: "online",
			lastMessage: "Hey there! 👋",
			timestamp: "10m",
		},
		{
			id: 2,
			name: "Florencio Dorrance",
			avatar: "$assets/ui-user.png",
			status: "online",
			lastMessage: "I'll be there in 2 mins 😊",
			timestamp: "34m",
		},
		{
			id: 3,
			name: "Leeann Leiley",
			avatar: "$assets/ui-user.png",
			status: "offline",
			lastMessage: "Thanks for your help! 🙌",
			timestamp: "1h",
		},
		{
			id: 4,
			name: "Titus Kitchrus",
			avatar: "$assets/ui-user.png",
			status: "online",
			lastMessage: "See you tomorrow!",
			timestamp: "3h",
		},
		{
			id: 5,
			name: "Geoffrey Mott",
			avatar: "$assets/ui-user.png",
			status: "offline",
			lastMessage: "Great work today!",
			timestamp: "5h",
		},
		{
			id: 6,
			name: "Antonio Schroeder",
			avatar: "$assets/ui-user.png",
			status: "online",
			lastMessage: "Perfect, thanks!",
			timestamp: "1d",
		},
	]);

	// Selected user state
	let selectedUser = $state(users[1]);

	// Handle user selection
	const handleUserSelect = (user: ChatUser) => {
		selectedUser = user;
	};

	// Handle new message
	const handleNewMessage = (text: string) => {
		messages = [
			...messages,
			{
				id: messages.length + 1,
				text,
				senderId: 1, // Current user
				timestamp: new Date(),
			},
		];
	};

    // let { data }: { data: PageData } = $props();
</script>

<div class="flex w-[100vw] h-[100vh] bg-gray-100">
<ChatLayout >
	<ChatSidebar {users} {selectedUser} onUserSelect={handleUserSelect} />
	<ChatWindow {messages} {selectedUser} currentUserId={1} onSendMessage={handleNewMessage} />
</ChatLayout>
</div>