export type User = { id: string; virtualNumber: string; displayName: string; avatarUrl?: string };
export type Message = { id: string; chatId: string; senderId: string; text: string; createdAt: string };
export type ChatSummary = { id: string; title: string; lastMessage?: string; updatedAt?: string; unreadCount: number };
