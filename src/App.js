import "./App.scss";
import Spinner from "./atom/Spinner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Spinner progress={270} />
      </header>
    </div>
  );
}

export default App;
