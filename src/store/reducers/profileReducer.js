import { PROFILE_HANDLECHANGE } from "../types"

const initialStateProfile = {
  values: {
    firstName: '',
    lastName: '',
    gender: 'female',
    email: '',
    password: ''
  }
}

export default function stateProfile (state = initialStateProfile, actions) {
  switch (actions.type) {
    case PROFILE_HANDLECHANGE: 
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