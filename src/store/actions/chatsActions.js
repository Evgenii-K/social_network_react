import { ADD_NEW_CHAT, ON_DELETE_CHAT } from '../types'
import firebase from 'firebase'

export const addChatAction = (newChat) => ({type: ADD_NEW_CHAT, payload: newChat})

export const onDeleteAction = (id) => ({type: ON_DELETE_CHAT, payload: id})

export const addChat = (name) => {

  const chatId = `chat${Date.now()}`

  return () => {
      firebase.database().ref('chatsList').child(chatId).push({ id: chatId, name })
  }
}

export const deleteChat = (chatId) => {

  console.log('delete chat id: ', chatId);
  return async (dispatch) => {
      try {
          await firebase.database().ref('chatsList').child(chatId).remove()
          dispatch(onDeleteAction(chatId))
      } catch (error) {
          console.error(error.message)
      }
  }
}

export const subscribeOnChats = () => {
  return dispatch => {
      firebase
        .database()
        .ref('chatsList')
        .on('child_added', snapshot => {
          const payload = Object.values(snapshot.val())[0]

          dispatch(addChatAction(payload))
      })

      firebase
      .database()
      .ref('chatsList')
      .on('child_changed', snapshot => {
          const payload = Object.values(snapshot.val())[0]

          dispatch(addChatAction(payload))
      })
  }
}