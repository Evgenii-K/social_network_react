import { FETCH_NEWS, SHOW_LOADER, HIDE_LOADER } from "../types";

export function fetchNews (url) {
  return async (dispatch) => {
    dispatch({type: SHOW_LOADER})

    const responce = await fetch(url)
    const posts = await responce.json()

    dispatch({type: FETCH_NEWS, payload: posts})

    let timer = setTimeout(() => {
      dispatch({type: FETCH_NEWS, payload: posts})
      dispatch({type: HIDE_LOADER})
      clearTimeout(timer)
    }, 1000)
  }
}