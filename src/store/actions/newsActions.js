import { FETCH_NEWS, SHOW_LOADER, HIDE_LOADER } from "../types";
import { showWarning, hideWarning } from './warningActions'

export function fetchNews (url) {
  return async (dispatch) => {
    try {
      dispatch({type: SHOW_LOADER})
      dispatch(hideWarning())


      const responce = await fetch(url)
      const posts = await responce.json()
  
      let timer = setTimeout(() => {
        dispatch({type: FETCH_NEWS, payload: posts})
        dispatch({type: HIDE_LOADER})
        clearTimeout(timer)
      }, 1000)
    } catch (error) {
      console.error(error)
      dispatch({type: HIDE_LOADER})
      dispatch(showWarning('Reload page'))
    }
  }
}