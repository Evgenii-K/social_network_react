import { ADD_NEW_CHAT, ON_DELETE_CHAT } from "../types"

const initialStateChats = {
}

function onAddChat (state, newChat) {
  const { id, name } = newChat
  return ({...state, [id]: { id, name }})
}

function onDeleteChat (state, id) {
  delete state[id]

  return state
}

export default function stateChats (state = initialStateChats, actions) {
  switch (actions.type) {
    case ADD_NEW_CHAT: 
      return onAddChat(state, actions.payload);
    case ON_DELETE_CHAT: 
      return onDeleteChat(state, actions.payload);
    default: 
      return state
  }
}