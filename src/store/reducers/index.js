import { combineReducers } from "redux";
import stateChats from './chatsReducer'
import stateProfile from './profileReducer'
import stateMessages from './messagesReducer'
import stateNews from './newsReducer'
import loadState from './loadReducer'
import stateWarning from './warningReducer'

export default combineReducers({
  profile: stateProfile,
  chats: stateChats,
  messages: stateMessages,
  news: stateNews,
  load: loadState,
  warning: stateWarning
})