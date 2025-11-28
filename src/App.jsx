import f1 from "./assets/f1.png";
import "./App.css";
import Calendar from "./Calendar";

function App() {

  return (
    <div>
        <div className="Header">
          <img src={f1} alt="F1 logo" />
          <h1>2025 FIA Formula One World Championship Schedule</h1>
        </div>
        <Calendar />
    </div>
  )
}

export default App
