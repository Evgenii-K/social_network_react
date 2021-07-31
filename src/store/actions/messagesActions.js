import { ON_ADD_MESSAGE } from '../types'

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