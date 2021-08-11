import PostForm from '../PostForm/PostForm'
import { useRef, useCallback, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { onAddMessageThunk } from '../../store/actions/messagesActions'
import PropTypes from 'prop-types'

function PostFormContainer ({formRef}) {
  const { chatId }= useRouteMatch().params
  const inputRef = useRef('')
  const dispatch = useDispatch()
  const [value, setValue] = useState({
    text: '',
    author: ''
  })

  const onAddMessage = useCallback(
    (message) => {
      dispatch(onAddMessageThunk(message, chatId))
    },
    [dispatch, chatId]
  )

  function sendMessage (event) {
    event.preventDefault()
    if (value.text.trim()) {
      onAddMessage(value)
      setValue(cur => ({...cur, text: ''}))
      inputRef.current.focus()
    }
  }

  function onChange (event) {
    const value = event.target.value
    const name = event.target.name
    setValue(current => {
      return {
        ...current, [name]: value
      }
    })
  }

  return <PostForm 
    formRef={formRef}
    inputRef={inputRef}
    onAddMessage={onAddMessage}
    onChange={onChange}
    sendMessage={sendMessage}
    value={value}
    />
}

PostFormContainer.propTypes = {
  formRef: PropTypes.object
}

export default PostFormContainer