import { combineReducers } from "redux";
import stateChats from './chatsReducer'
import stateProfile from './profileReducer'

export default combineReducers({
  profile: stateProfile,
  chats: stateChats
})