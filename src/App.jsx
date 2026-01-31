import f1 from "./assets/images/f1.png";
import "./App.css";
import Calendar from "./Components/Calendar";
import Footer from "./Components/Footer"

function App() {

  return (
    <div>
      <header>
          <img src={f1} alt="F1 logo" className="header-logo"  />
          <h1 className="header-title">2026 FIA Formula One World Championship Schedule</h1>
      </header>
        <Calendar />
        <Footer />
    </div>
  )
}

export default App
