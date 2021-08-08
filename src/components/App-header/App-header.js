import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import './App-header.scss'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'


const useStyles = makeStyles(() => ({
  AppHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    paddingLeft: '20px',
    fontSize: '16px'
  },
  ul: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '300px'
  }
}));

function AppHeader () {
  const classes = useStyles()
  const location = useLocation().pathname.split('/')[1]

  return (
    <header className={classes.AppHeader}>
      <h1>
        Social network
      </h1>
      <nav>
        <ul className={classes.ul}>
          <li className={classNames('li', {'active' : '' === location})}>
            <Link to="/" className={classes.link}>Home</Link>
          </li>
          <li className={classNames('li', {'active' : 'news' === location})}>
            <Link to="/news" className={classes.link}>Artworks</Link>
          </li>
          <li className={classNames('li', {'active' : 'chats' === location})}>
            <Link to="/chats" className={classes.link}>Chats</Link>
          </li>
          <li className={classNames('li', {'active' : 'profile' === location})}>
            <Link to="/profile" className={classes.link}>Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default AppHeader