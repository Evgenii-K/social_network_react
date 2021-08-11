import { SHOW_WARNING, HIDE_WARNING } from '../types'

export function showWarning (text) {
  return dispatch => {
    dispatch(
      {type: SHOW_WARNING, payload: text}
    )
  }
}
export function hideWarning () {
  return dispatch => {
    dispatch(
      {type: HIDE_WARNING}
    )
  }
}