import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import MessageList from './components/MessageList/MessageList'
import AppHeader from './components/App-header/App-header'
import PostForm from './components/PostForm/PostForm'

function App() {
  
  const [messageList, setMessageList] = useState([])
  
  function onAddMessage (value) {
    setMessageList([...messageList, {
      id: Date.now(), ...value
    }])
  }

  useEffect(() => {
    if (messageList.length) {
      const lastAuthor = messageList[messageList.length - 1].author
      if (lastAuthor !== 'Bot')
      setTimeout(() => {
        setMessageList([...messageList, {
          id: Date.now(),
          author: 'Bot',
          text: `Answer to ${lastAuthor}: Lorem ipsum dolor sit amet.`
        }])
      }, 1500)
    }
  }, [messageList])

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <AppHeader />
        {messageList.length ? <MessageList messages={messageList}/> : <p>Message list is empty</p>}
        <PostForm onAdd={onAddMessage} />
      </Container>
    </React.Fragment>
  );
}

export default App;
