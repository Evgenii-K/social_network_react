import { ON_ADD_MESSAGE, ON_DELETE_CHAT_MESSAGES } from "../types"


const initialStateMessages = {
  messages: {}
}

function onDeleteChatMessages (state, id) {
  return Object.fromEntries(
    Object.entries(state)
      .filter(chat => chat[0] !== id)
  )
}

export default function stateMessages (state = initialStateMessages, action) {
  switch (action.type) {
    case ON_ADD_MESSAGE:
      return {
          ...state, 
          messages: {
            ...state.messages,
            [action.payload.chatId]: action.payload.messages,
          }
        }
    case ON_DELETE_CHAT_MESSAGES: 
      return onDeleteChatMessages(state, action.payload)
    default: 
      return state
  }
}