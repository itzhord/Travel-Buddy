// place files you want to import through the `$lib` alias in this folder.
export type ChatUser = {
	id: number;
	name: string;
	avatar: string;
	status: "online" | "offline";
	lastMessage: string;
	timestamp: string;
};

export type ChatMessage = {
	id: number;
	text: string;
	senderId: number;
	timestamp: Date;
};
