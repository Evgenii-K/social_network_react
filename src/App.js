import React, { useState, useEffect, useRef } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Chats from './components/Chats/Chats'
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

  const formRef = useRef('')
  const timer = useRef(null)
  
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
      timer.current = setTimeout(() => {
        setMessageList([...messageList, {
          id: Date.now(),
          author: 'Bot',
          text: `Привет ${lastAuthor}!`
        }])
      }, 1500)
    }
    window.scrollTo({ top: formRef.current.offsetTop, left: 0, behavior: 'smooth' })
  }, [messageList])

  // useEffect(() => {
  //   return () => clearTimeout(timer.current)
  // }, [])

  return (
    <ThemeProvider theme={chatTheme}>
      <CssBaseline />
      <Container maxWidth="md">
        <AppHeader />
        <Chats messages={messageList} chats={chatList}/>
        <PostForm onAdd={onAddMessage} formRef={formRef} />
      </Container>
    </ThemeProvider>
  );
}

export default App