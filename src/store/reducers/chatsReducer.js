import { ADD_NEW_CHAT, ON_DELETE_CHAT } from "../types"

const initialStateChats = {
  id1: { name: 'FirstChat'},
  id2: { name: 'SecondChat'}
}

function onAddChat (state, newName) {
  let nextId = 'id0'
  let keys = Object.keys(state)
  if (keys) {
    keys = keys.map(key => key[2])
    nextId = `id${Math.max.apply(null, keys) + 1}`
  }

  return ({...state, [nextId]: {name: newName}})
}

function onDeleteChat (state, id) {
  return (
    Object.fromEntries(
      Object.entries(state)
        .filter(item => item[0] !== id)
    )
  )
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