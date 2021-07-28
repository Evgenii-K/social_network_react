import { combineReducers } from "redux";

const initialStateProfile = {
  
}

function storeProfile (state = initialStateProfile, actions) {
  switch (actions.type) {
    default: 
      return state
  }
}

export default combineReducers({
  profile: storeProfile
})