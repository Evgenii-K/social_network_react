import { PROFILE_HANDLECHANGE } from '../types'

export const handleChange = (event) => ({type: PROFILE_HANDLECHANGE, payload: event.target})