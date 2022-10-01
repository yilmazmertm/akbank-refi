import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./Page/Dashboard";
import Navbar from "./Components/Navbar";
import "./Css/style.css";
import "./Css/style.min.css";
import Invoice from "./Components/Invoice/Invoice";
import ProductsPage from "./Page/ProductsPage/ProductsPage";
import StockPage from "./Page/StockPage/StockPage";
function App() {
  return (
    <div className="App" id="wrapper">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/card" element={<Invoice />} />
          <Route path="/productspage" element={<ProductsPage />} />
          <Route path="/stockpage" element={<StockPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
