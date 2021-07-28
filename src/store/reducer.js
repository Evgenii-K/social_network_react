import { combineReducers } from "redux";

const initialStateProfile = {
  values: {
    firstName: '',
    lastName: '',
    gender: 'female',
    email: '',
    password: ''
  }
}

function storeProfile (state = initialStateProfile, actions) {
  switch (actions.type) {
    case 'handleChange': 
      const value = actions.payload.value
      const name = actions.payload.name
      const values = {...state.values, [name]: value}
      return {
        ...state, values
      }
    default: 
      return state
  }
}

export default combineReducers({
  profile: storeProfile
})