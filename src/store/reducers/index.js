import { combineReducers } from "redux";
import stateChats from './chatsReducer'
import stateProfile from './profileReducer'
import stateMessages from './messagesReducer'
import stateNews from './newsReducer'
import loadState from './loadReducer'

export default combineReducers({
  profile: stateProfile,
  chats: stateChats,
  messages: stateMessages,
  news: stateNews,
  load: loadState
})