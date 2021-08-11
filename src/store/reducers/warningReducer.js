import { SHOW_WARNING, HIDE_WARNING } from '../types'

const initialWarningState = {
  text: ''
}

export default function stateWarning (state = initialWarningState, actions) {
  switch (actions.type) {
    case SHOW_WARNING: 
      return ({
        ...state,
        text: actions.payload
      })
    case HIDE_WARNING:
      return ({
        ...state,
        text: ''
      })
    default:
      return state
  }
}