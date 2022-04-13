import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";

function App() {
  return (
    <div className="text-center App">
      <Header />
      <div style={{ display: "grid", placeContent: "center", height: "80vh" }}>
        <Board />
      </div>
    </div>
  );
}

export default App;
