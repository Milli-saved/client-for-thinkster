import logo from "./logo.svg";
import "./App.css";
import Loader from "./Globals/Loader";

const App = () => {
  const name = "Fanuel H.";
  return (
    <div className="App">
      <header className="App-header">
        <Loader />
      </header>
    </div>
  );
};

export default App;
