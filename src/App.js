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
            <Route path='/chats' exact>
              <Chats />
            </Route>
            <Route path='/chats/:chatId' render={
              ({match}) => {
                const {chatId} = match.params
                return <Chats chatId={chatId}/>
              }
            } />
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