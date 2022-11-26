import treasureChest from './treasure-chest.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={treasureChest} className="App-logo" alt="logo" />
        <p>
          <code>Treasure Chest!</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Transfer
        </a>
      </header>
    </div>
  );
}

export default App;
