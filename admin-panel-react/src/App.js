import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./Page/Dashboard";
import Navbar from "./Components/Navbar";
import "./Css/style.css";
import "./Css/style.min.css";
import InvoicePage from "./Page/InvoicePage/InvoicePage";
import ProductsPage from "./Page/ProductsPage/ProductsPage";
import StockPage from "./Page/StockPage/StockPage";
import CompanyInfoPage from "./Page/CompanyInfoPage/CompanyInfoPage";
import OutInvoicePage from "./Page/OutInvoicePage/OutInvoicePage";
import CustomerAddPage from "./Page/CustomerAddPage/CustomerAddPage";
import ProduceProductPage from "./Page/ProduceProductPage/ProduceProductPage";
function App() {
  return (
    <div className="App" id="wrapper">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/productspage" element={<ProductsPage />} />
          <Route path="/stockpage" element={<StockPage />} />
          <Route path="/companyınfo" element={<CompanyInfoPage />} />
          <Route path="/invoicepage" element={<InvoicePage />} />
          <Route path="/outinvoicepage" element={<OutInvoicePage />} />
          <Route path="/customeraddpage" element={<CustomerAddPage />} />
          <Route path="/produceproduct" element={<ProduceProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
