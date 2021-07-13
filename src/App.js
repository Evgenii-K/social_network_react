import React, { useState, useEffect } from 'react';
import './App.css';
import MessageList from './components/MessageList/MessageList'
import AppHeader from './components/App-header/App-header'
import PostForm from './components/PostForm/PostForm'

function App() {
  const [messageList, setMessageList] = useState([])
  
  function onAddMessage (value) {
    if (!value.author) {
      value.author = 'anonymous'
    }
    setMessageList(messageList.concat([{
      id: Date.now(), ...value
    }]))
  }

  useEffect(() => {
    if (messageList.length) {
      const lastAuthor = messageList[messageList.length - 1].author
      if (lastAuthor !== 'Bot')
      setTimeout(() => {
        setMessageList(messageList.concat([{
          id: Date.now(),
          author: 'Bot',
          text: `Answer to ${lastAuthor}: Lorem ipsum dolor sit amet.`
        }]))
      }, 1500)
    }
  }, [messageList])

  return (
    <div className="App">
      <div className="Content">
        <AppHeader />
        {messageList.length ? <MessageList messages={messageList}/> : <p className="empty">Message list is empty</p>}
        <PostForm onAdd={onAddMessage} />
      </div>
    </div>
  );
}

export default App;
