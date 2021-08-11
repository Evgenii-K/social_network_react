import { ADD_NEW_CHAT, ON_DELETE_CHAT } from '../types'

export const addChatAction = (newName) => ({type: ADD_NEW_CHAT, payload: newName})

export const onDeleteAction = (id) => ({type: ON_DELETE_CHAT, payload: id})