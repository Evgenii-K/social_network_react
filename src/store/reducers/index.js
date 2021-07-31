import { combineReducers } from "redux";
import stateChats from './chatsReducer'
import stateProfile from './profileReducer'
import stateMessages from './messagesReducer'

export default combineReducers({
  profile: stateProfile,
  chats: stateChats,
  messages: stateMessages
})