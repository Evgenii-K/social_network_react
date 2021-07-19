import React from 'react'
import './Message.css'

function Message({message}) {
  const {text, author} = message

  return (
    <li className="message">
      <p className="text">{ text }</p>
      <p className="author">Author: { author }</p>
    </li>
  );
}

export default Message