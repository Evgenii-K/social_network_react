import { LOGIN_HANDLECHANGE } from "../types"

const initialStateLogin = {
  values: {
    isRegister: false,
    email: '',
    password: ''
  }
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
    default: 
      return state
  }
}