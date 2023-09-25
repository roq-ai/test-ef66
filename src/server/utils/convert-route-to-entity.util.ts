const mapping: Record<string, string> = {
  'chat-histories': 'chat_history',
  'emoji-libraries': 'emoji_library',
  'group-chats': 'group_chat',
  'image-libraries': 'image_library',
  teams: 'team',
  users: 'user',
  'video-libraries': 'video_library',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
