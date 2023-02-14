import logo from './logo.svg';
import './App.css';
import './HelloWorld.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edite <code>src/App.js</code> e salve para recarregar.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprenda React
        </a>
      </header>
    </div>
  );
}

function HelloWorld(){
  return (
    <div className="HelloWorld">
      <h1>Hello World!</h1>
    </div>
  );
}

export default HelloWorld; //alterar para abrir quando 'npm start'
