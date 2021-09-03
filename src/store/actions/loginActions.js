import { LOGIN_HANDLECHANGE, IS_AUTHED } from '../types'

export const handleChange = (event) => ({type: LOGIN_HANDLECHANGE, payload: event.target})
export const isAuthChanged = (isAuth) => ({type: IS_AUTHED, payload: isAuth})
