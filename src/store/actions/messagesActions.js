import { ON_ADD_MESSAGE } from '../types'

export const onAddMessageThunk = (message, chatId) => dispatch => {

    const { text, author } = message
    const newMsg = {
      id: Date.now(), 
      text,
      author: author === '' ? 'anonymous' : author
    }

    dispatch(onAddMessageAction(newMsg, chatId))

    if (author !== 'Bot') {
      const newMsgBot = { 
        id: Date.now(), 
        text: `Привет ${author}!`, 
        author: 'Bot' 
      }
      setTimeout(() => dispatch(onAddMessageAction(newMsgBot, chatId)), 1500)
    }

}

const onAddMessageAction = (message, chatId) => ({type: ON_ADD_MESSAGE, payload: message, chatId: chatId})
  