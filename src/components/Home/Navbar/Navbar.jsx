import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import { logo } from "../../../assets/images/home/navbar";
import "./Navbar.css";

const navigationLinks = [
  {
    id: "home",
    label: "HOME",
    path: "/",
    end: true,
  },
  {
    id: "about",
    label: "ABOUT US",
    path: "/about",
  },
  {
    id: "services",
    label: "SERVICES",
    path: "/services",
  },
  {
    id: "portfolio",
    label: "PORTFOLIO",
    path: "/portfolio",
  },
  {
    id: "blog",
    label: "BLOG",
    path: "/blog",
  },
  {
    id: "achievements",
    label: "ACHIEVEMENTS",
    path: "/achievements",
  },
  {
    id: "gallery",
    label: "GALLERY",
    path: "/gallery",
  },
  {
    id: "careers",
    label: "CAREERS",
    path: "/careers",
  },
  {
    id: "insights",
    label: "INSIGHTS",
    path: "/insights",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close mobile menu after route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu using Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Close mobile menu when returning to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1180) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="site-navbar">
      <div className="container site-navbar__container">

        {/* LOGO */}
        <NavLink
          to="/"
          className="site-navbar__logo"
          onClick={closeMenu}
          aria-label="DGATE Integrated Services Home"
        >
          <img
            src={logo}
            alt="DGATE Integrated Services"
          />
        </NavLink>

        {/* NAVIGATION */}
        <nav
          id="main-navigation"
          className={`site-navbar__nav ${
            menuOpen ? "site-navbar__nav--open" : ""
          }`}
          aria-label="Main navigation"
        >
          <ul className="site-navbar__links">

            {navigationLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  end={link.end}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "site-navbar__link active"
                      : "site-navbar__link"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            {/* CONTACT */}
            <li className="site-navbar__contact-item">
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? "site-navbar__contact site-navbar__contact--active"
                    : "site-navbar__contact"
                }
              >
                CONTACT US
              </NavLink>
            </li>

          </ul>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="site-navbar__toggle"
          onClick={() =>
            setMenuOpen((currentState) => !currentState)
          }
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? (
            <FaTimes aria-hidden="true" />
          ) : (
            <FaBars aria-hidden="true" />
          )}
        </button>

      </div>
    </header>
  );
}

export default Navbar;