import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./Page/Dashboard";
import Navbar from "./Components/Navbar";
import "./Css/style.css";
import "./Css/style.min.css";
import Invoice from "./Components/Invoice/Invoice";
function App() {
  return (
    <div className="App" id="wrapper">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/card" element={<Invoice />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
