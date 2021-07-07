import logo from './logo.svg';
import './App.css';
import Message from './components/Message'

const textMessage = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi optio vel deleniti.'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Message text={textMessage}/>
      </header>
    </div>
  );
}

export default App;
