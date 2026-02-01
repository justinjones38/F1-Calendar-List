import "./App.css";
import Calendar from "./Components/Calendar";
import Footer from "./Components/Footer"

function App() {

  return (
    <div>
      <header>
          <h1 className="header-title">2026 FIA Formula One World Championship Schedule</h1>
      </header>
        <Calendar />
        <Footer />
    </div>
  )
}

export default App
