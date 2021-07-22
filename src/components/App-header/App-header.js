import {Link} from 'react-router-dom'

function AppHeader () {
  return (
    <header className="App-header">
      <h1>
        Social network
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/chats">Chats</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </header>
  )
}

export default AppHeader