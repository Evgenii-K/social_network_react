import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Chats from './components/Chats/Chats'
import HomePage from './components/HomePage/HomePage'
import Profile from './components/Profile/Profile'
import AppHeader from './components/App-header/App-header'
import Page404 from './components/Page404/Page404'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { blueGrey } from '@material-ui/core/colors';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
    setMessageList((current) => [...current, {
      id: Date.now(), 
      text,
      author: author === '' ? 'anonymous' : author
    }])
  }

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
              <Chats messages={messageList} chats={chatList} onAdd={onAddMessage} />
            </Route>
            <Route>
              <Page404 />
            </Route>
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App