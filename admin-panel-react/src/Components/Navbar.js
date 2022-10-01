import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <div className="sidebar-brand d-flex align-items-center justify-content-center">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            Wild Web Wolves <sup>WWW</sup>
          </div>
        </div>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <div
            className="nav-link"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/ahmet")}
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </div>
        </li>

        <hr className="sidebar-divider" />

        <li className="nav-item">
          <div
            className="nav-link collapsed"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/stockpage")}
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Stok Ürün</span>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
            style={{ cursor: "pointer" }}
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <div className="collapse-item">Buttons</div>
              <div className="collapse-item">Cards</div>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <div
            className="nav-link collapsed"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/productspage")}
          >
            <i className="fas fa-fw fa-wrench"></i>
            <span>Üretilmiş Ürünler</span>
          </div>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <div className="collapse-item">Colors</div>
              <div className="collapse-item">Borders</div>
              <div className="collapse-item">Animations</div>
              <div className="collapse-item">Other</div>
            </div>
          </div>
        </li>

        <hr className="sidebar-divider" />
        <li className="nav-item">
          <div className="nav-link collapsed" style={{ cursor: "pointer" }}>
            <i className="fas fa-fw fa-wrench"></i>
            <span>Çalışanlar</span>
          </div>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <div className="collapse-item">Login</div>
              <div className="collapse-item">Register</div>
              <div className="collapse-item">Forgot Password</div>
              <div className="collapse-divider"></div>
              <h6 className="collapse-header">Other Pages:</h6>
              <div className="collapse-item">404 Page</div>
              <div className="collapse-item">Blank Page</div>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <div className="nav-link" style={{ cursor: "pointer" }}>
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Firma Bilgileri</span>
          </div>
        </li>

        <li className="nav-item">
          <div className="nav-link" style={{ cursor: "pointer" }}>
            <i className="fas fa-fw fa-table"></i>
            <span>Gelen Fatura</span>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link" style={{ cursor: "pointer" }}>
            <i className="fas fa-fw fa-table"></i>
            <span>Giden Fatura</span>
          </div>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
    </div>
  );
}
