import { FETCH_NEWS } from '../types'
import { showWarning } from '../actions/warningActions'

export function warningMiddleware ({dispatch}) {
  return function (next) {
    return function (action) {
      if (action.type === FETCH_NEWS) {
        return dispatch(showWarning('On delete chat warning'))
      }
      return next (action)
    }
  }
}