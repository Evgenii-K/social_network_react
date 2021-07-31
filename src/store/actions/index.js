import { PROFILE_HANDLECHANGE, ADD_NEW_CHAT, ON_DELETE_CHAT, ON_ADD_MESSAGE } from '../types'

export const handleChange = (event) => ({type: PROFILE_HANDLECHANGE, payload: event.target})

export const addChatAction = (newName) => ({type: ADD_NEW_CHAT, payload: newName})

export const onDeleteAction = (id) => ({type: ON_DELETE_CHAT, payload: id})

export const onAddMessageAction = (message, chatId) => {
  
  const { text, author } = message
  const newMsg = {
    id: Date.now(), 
    text,
    author: author === '' ? 'anonymous' : author
  }

  return (
    ({type: ON_ADD_MESSAGE, payload: newMsg, chatId: chatId})
  )
  
}
