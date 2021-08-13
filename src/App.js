import { useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Chats from './components/Chats/Chats'
import HomePage from './components/HomePage/HomePage'
import Profile from './components/Profile/Profile'
import News from './components/News/News'
import Login from './components/Login/Login'
import AppHeader from './components/App-header/App-header'
import Page404 from './components/Page404/Page404'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { blueGrey } from '@material-ui/core/colors';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import firebase from 'firebase'
import { useDispatch } from 'react-redux'
import { isAuthChanged } from './store/actions/loginActions'

const chatTheme = createTheme({
  palette: {
    primary: {
      main: '#d84315'
    },
    secondary: blueGrey
  }
})

const PrivateRoute = (props) => {
  const { isAuthed } = useSelector(state => state.login)

  return isAuthed ? <Route {...props}/> : <Redirect to='/login' />
}

function App() {

  const dispatch = useDispatch()

  useEffect(() => { 
    firebase.auth().onAuthStateChanged(function(user) {
        dispatch(isAuthChanged(!!user))
    });
  }, [])

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
            <PrivateRoute path='/profile'>
              <Profile />
            </PrivateRoute>
            <PrivateRoute path='/chats' exact>
              <Chats />
            </PrivateRoute>
            <PrivateRoute path='/chats/:chatId' render={
              ({match}) => {
                const {chatId} = match.params
                return <Chats chatId={chatId}/>
              }
            } />
            <Route path='/news'>
              <News />
            </Route>
            <Route path='/login'>
              <Login />
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