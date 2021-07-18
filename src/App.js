import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import MessageList from './components/MessageList/MessageList'
import AppHeader from './components/App-header/App-header'
import PostForm from './components/PostForm/PostForm'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { blueGrey } from '@material-ui/core/colors';

const chatTheme = createTheme({
  palette: {
    primary: {
      main: '#d84315'
    },
    secondary: blueGrey
  }
})

function App() {
  
  const [messageList, setMessageList] = useState([])
  const [chatList, setChatList] = useState([
    {id: 123, name: 'FirstName'},
    {id: 456, name: 'SecondName'}
  ])
  
  function onAddMessage ({text, author}) {
    setMessageList([...messageList, {
      id: Date.now(), 
      text,
      author: author === '' ? 'anonymous' : author
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
    <ThemeProvider theme={chatTheme}>
      <CssBaseline />
      <Container maxWidth="md">
        <AppHeader />
        <MessageList messages={messageList} chats={chatList}/>
        <PostForm onAdd={onAddMessage} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
