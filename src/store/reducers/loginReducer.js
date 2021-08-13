import { LOGIN_HANDLECHANGE, IS_AUTHED } from "../types"

const initialStateLogin = {
  values: {
    email: '',
    password: ''
  },
  isAuthed: false
}

export default function stateLogin (state = initialStateLogin, actions) {
  switch (actions.type) {
    case LOGIN_HANDLECHANGE: 
      const value = actions.payload.value
      const name = actions.payload.name
      const values = {...state.values, [name]: value}
      return {
        ...state, values
      }
    case IS_AUTHED:
      return ({...state, isAuthed: actions.payload})
    default: 
      return state
  }
}