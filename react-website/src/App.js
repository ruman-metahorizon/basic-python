import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <a href="#">
        <img src={logo} className="logo" alt="logo" />
        </a>
        <nav>  
          <ul>
            <li>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"    
        >
          Learn React
        </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
