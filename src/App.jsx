import f1 from "./assets/images/f1.png";
import "./App.css";
import Calendar from "./Calendar";
import Footer from "./Footer"

function App() {

  return (
    <div>
        <div className="header">
          <div className="header-img">
              <img src={f1} alt="F1 logo"  />
          </div>
          <h1>2026 FIA Formula One World Championship Schedule</h1>
        </div>
        <Calendar />
        <Footer />
    </div>
  )
}

export default App
