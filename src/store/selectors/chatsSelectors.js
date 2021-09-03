export const chatsKeysSelector = state => Object.keys(state.chats)
export const chatsSelector = state => state.chats
export const chatsListInit = state => Object.values(state.chats)