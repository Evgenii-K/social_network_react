import React, { useState, useEffect, useRef } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Chats from './components/Chats/Chats'
import HomePage from './components/HomePage/HomePage'
import Profile from './components/Profile/Profile'
import AppHeader from './components/App-header/App-header'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { blueGrey } from '@material-ui/core/colors';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";

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
  
  function onAddMessage ({text, author}) {
    setMessageList((current) => [...current, {
      id: Date.now(), 
      text,
      author: author === '' ? 'anonymous' : author
    }])
  }

  useEffect(() => {
    if (!messageList.length) return
    window.scrollTo({ top: formRef.current.offsetTop, left: 0, behavior: 'smooth' })
  }, [messageList])

  return (
    <Router>
      <ThemeProvider theme={chatTheme}>
        <CssBaseline />
        <Container maxWidth="md">
          <AppHeader />
          <Switch>
            <Route path='/' exact>
              <HomePage />
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
            <Route path='/chats'>
              <Chats messages={messageList} chats={chatList} onAdd={onAddMessage} formRef={formRef} />
            </Route>
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App