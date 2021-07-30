import { ADD_NEW_CHAT, ON_DELETE_CHAT, ON_ADD_MESSAGE } from "../types"

const initialStateChats = {
  id1: { name: 'FirstChat', messages: [
    {id: 1231, text: 'Привет', author: 'Ivan'},
    {id: 1321, text: 'Привет', author: 'Bot'}
  ]},
  id2: { name: 'SecondChat', messages: [
    {id: 1231, text: 'Bay', author: 'Jacob'},
    {id: 1321, text: 'Bay', author: 'Bot'}
  ]}
}

function onAddChat (state, newName) {
  let nextId = 'id0'
  let keys = Object.keys(state)
  if (keys) {
    keys = keys.map(key => key[2])
    nextId = `id${Math.max.apply(null, keys) + 1}`
  }

  return ({...state, [nextId]: {name: newName, messages: []}})
}

function onDeleteChat (state, id) {
  return (
    Object.fromEntries(
      Object.entries(state)
        .filter(item => item[0] !== id)
    )
  )
}

function onAddMessage (state, message, chatId) {
  const { text, author } = message
  const newMsg = {
    id: Date.now(), 
    text,
    author: author === '' ? 'anonymous' : author
  }

  state[chatId].messages = [...state[chatId].messages, newMsg]
    return {...state, [chatId]: state[chatId]}
}

export default function stateChats (state = initialStateChats, actions) {
  switch (actions.type) {
    case ADD_NEW_CHAT: 
      return onAddChat(state, actions.payload);
    case ON_DELETE_CHAT: 
      return onDeleteChat(state, actions.payload);
    case ON_ADD_MESSAGE:
      return onAddMessage(state, actions.payload, actions.chatId)
    default: 
      return state
  }
}