import logo from "./logo.svg";
import "./App.css";

import Seats from "./components/Seats";
import NavBar from "./components/NavBar";
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
        <NavBar />
        <Board />
        <Seats />
    </div>
  );
}

export default App;
