import { FETCH_NEWS } from "../types"

const initialStateNews = {
  posts: {}
}

export default function stateNews (state = initialStateNews, action) {
  switch (action.type) {
    case FETCH_NEWS:
      return ({
        ...state,
        posts: action.payload 
      })
    default:
      return state
  }
}