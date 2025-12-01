import f1 from "./assets/f1.png";
import "./App.css";
import Calendar from "./Calendar";
import Footer from "./Footer"

function App() {

  return (
    <div>
        <div className="Header">
          <div className="Header-Img">
              <img src={f1} alt="F1 logo" />
          </div>
          <h1>2025 FIA Formula One World Championship Schedule</h1>
        </div>
        <Calendar />
        <Footer />
    </div>
  )
}

export default App
