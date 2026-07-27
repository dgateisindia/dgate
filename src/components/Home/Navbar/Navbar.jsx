import "./Navbar.css";
import { logo } from "../../../assets/images/home/navbar";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-container">

        {/* Logo */}
        <div className="logo">
          <NavLink to="/" onClick={closeMenu}>
            <img src={logo} alt="D-GATE" />
          </NavLink>
        </div>

        {/* Navigation */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>

          <li>
            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              HOME
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              ABOUT US
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              SERVICES
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/industries"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              INDUSTRIES
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/technologies"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              TECHNOLOGIES
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/careers"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              CAREERS
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/insights"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              INSIGHTS
            </NavLink>
          </li>

          {/* Highlighted Contact Us Button */}
          <li className="contact-nav-item">
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "contact-nav-btn contact-active"
                  : "contact-nav-btn"
              }
            >
              CONTACT US
            </NavLink>
          </li>

        </ul>

        {/* Mobile Menu */}
        <div
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          role="button"
          tabIndex={0}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </header>
  );
}

export default Navbar;