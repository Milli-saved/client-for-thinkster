import logo from "./logo.svg";
import "./App.css";
import Loader from "./Globals/Loader";

const App = () => {
  const handleClicker = () => {
    console.log("clicked");
  };
  const name = "Fanuel H.";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Loader />
        <button onClick={handleClicker}>Hellow</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{name}</p>
      </header>
    </div>
  );
};

export default App;
