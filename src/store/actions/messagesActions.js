import { ON_ADD_MESSAGE, ON_DELETE_CHAT_MESSAGES } from '../types'
import firebase from 'firebase'

const getPayloadFromSnapshot = (snapshot) => {
  const messages = [];

  snapshot.forEach((message) => {
    messages.push({...message.val(), id: message.key});
  });

  return { chatId: snapshot.key, messages }
}

export const onAddMessageThunk = (message, chatId) => async () => {

    let { text, author } = message
    author = author === '' ? 'anonymous' : author
    let id = Date.now()

    firebase.database().ref('messages').child(chatId).child(id).set({text, author})

    if (author !== 'Bot') {
      id = Date.now()
      text = `Привет ${author}!`
      author = 'Bot'
      
      let timer = setTimeout(() => {
        firebase.database().ref('messages').child(chatId).child(id).set({text, author})
        clearTimeout(timer)
      }, 1000)
    }

}

export const onAddMessageAction = (payload) => ({type: ON_ADD_MESSAGE, payload})

export const onDeleteChatMessages = (chatId) => {
  return async (dispatch) => {
      try {
          await firebase.database().ref('messages').child(chatId).remove()

          dispatch(onDeleteMessagesAction(chatId))
      } catch (error) {
          console.error(error.message)
      }
  }
}

export const onDeleteMessagesAction = (id) => ({type: ON_DELETE_CHAT_MESSAGES, payload: id})

export function subscribeOnMessage () {
  return dispatch => {
    firebase
      .database()
      .ref('messages')
      .on('child_added', snapshot => {
        const payload = getPayloadFromSnapshot(snapshot);
        dispatch(onAddMessageAction(payload))
      })

    firebase
      .database()
      .ref('messages')
      .on('child_changed', snapshot => {
      const payload = getPayloadFromSnapshot(snapshot);
      dispatch(onAddMessageAction(payload))
    })
  }
}
 