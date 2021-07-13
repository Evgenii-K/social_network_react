import React from 'react'
import Message from '../Message/Message'
import './MessageList.css'

function MessageList ({messages}) {
  return (
    <ul className="messageList">
      {messages.map(message => {
        return <Message message={message} key={message.id}/>
      })}
    </ul>
  )
}

export default MessageList