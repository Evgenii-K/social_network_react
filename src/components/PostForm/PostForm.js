import React, {useState} from 'react'
import './PostForm.css'

function PostForm ({onAdd}) {
  const [value, setValue] = useState(
    {
      text: '', 
      author: ''
    }
  )

  function sendMessage (event) {
    event.preventDefault()
    if (value.text.trim()) {
      onAdd(value)
    }
    setValue(() => {
      return {
        text: '', 
        author: ''
      }
    })
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

  return (
    <form 
      className="form-send"
      onSubmit={sendMessage}
    >
      <input 
        type='text'
        name='author'
        value={value.author}
        onChange={onChange}
        placeholder='your name'
        className="form-send__input form-send__input--name"
      />
      <input 
        type='text'
        name='text'
        value={value.text}
        onChange={onChange}
        placeholder='type your text here'
        className="form-send__input form-send__input--text"
      />
      <button
        type="submit"
        className="form-send__btn"
      >
        Send message
      </button>
    </form>
  )
}

export default PostForm