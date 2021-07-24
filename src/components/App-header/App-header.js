import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(() => ({
  AppHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  li: {
    listStyleType: 'none',
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

  return (
    <header className={classes.AppHeader}>
      <h1>
        Social network
      </h1>
      <nav>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <Link to="/" className={classes.link}>Home</Link>
          </li>
          <li className={classes.li}>
            <Link to="/chats" className={classes.link}>Chats</Link>
          </li>
          <li className={classes.li}>
            <Link to="/profile" className={classes.link}>Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default AppHeader