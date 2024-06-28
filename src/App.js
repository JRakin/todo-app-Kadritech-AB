import "./App.css";
import Board from "./component/Board";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="relative bg-gradient-to-r from-cyan-300 to-blue-300 w-screen min-h-screen px-12 py-10">
        <Board />
      </div>
    </AppProvider>
  );
}

export default App;
