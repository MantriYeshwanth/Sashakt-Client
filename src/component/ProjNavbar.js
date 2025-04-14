"use client";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./ProjNavbar.css";

const PNavbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light custom-navbar">
      <div className="container">
        <NavLink className="navbar-brand" to="/age12">
          <div className="brand-logo">
            <span className="logo-icon">🌟</span>
            <span className="brand-text">SASHAKT</span>
          </div>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarContent"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
                to="/age12"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
                to="/carousel"
              >
                Rights
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
                to="/parental"
              >
                Parental Hub
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
                to="/FAQ"
              >
                FAQ
              </NavLink>{" "}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default PNavbar;
