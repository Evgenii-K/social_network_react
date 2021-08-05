import { ON_ADD_MESSAGE, ON_DELETE_CHAT_MESSAGES } from "../types"


const initialStateMessages = {
  id1: [
    {id: 1231, text: 'Привет', author: 'Ivan'},
    {id: 1321, text: 'Привет', author: 'Bot'}
  ],
  id2: [
    {id: 1231, text: 'Bay', author: 'Jacob'},
    {id: 1321, text: 'Bay', author: 'Bot'}
  ]
}

function onAddMessage (state, message, chatId) {

  if (state[chatId]) {
    state[chatId] = [...state[chatId], message]
  } else {
    state[chatId] = [message]
  }

  return {...state, [chatId]: state[chatId]}
}

function onDeleteChatMessages (state, id) {
  console.log('delete chat, id:', id);
  return Object.fromEntries(
    Object.entries(state)
      .filter(chat => chat[0] !== id)
  )
}

export default function stateMessages (state = initialStateMessages, actions) {
  switch (actions.type) {
    case ON_ADD_MESSAGE: 
      return onAddMessage(state, actions.payload, actions.chatId)
    case ON_DELETE_CHAT_MESSAGES: 
      return onDeleteChatMessages(state, actions.payload)
    default: 
      return state
  }
}