import {
  useEffect,
  useState,
  useRef,
} from "react";

import {
  NavLink,
  useLocation,
} from "react-router-dom";

import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

import {
  logo,
} from "../../../assets/images/home/navbar";

import "./Navbar.css";


/* =========================================================
   NAVIGATION LINKS
========================================================= */

const navLinks = [
  {
    id: "home",
    label: "Home",
    path: "/home-transition",
    end: true,
  },
  {
    id: "about",
    label: "Who We Are",
    path: "/about",
  },
  {
    id: "services",
    label: "What We Do",
    path: "/services",
  },
  {
    id: "products",
    label: "Products",
    isDropdown: true,
  },
  {
    id: "portfolio",
    label: "Our Work",
    path: "/portfolio",
  },
  {
    id: "careers",
    label: "Careers",
    path: "/careers",
  },
];


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const productsDropdownRef = useRef(null);
  const location = useLocation();

  /* =========================================================
     CLOSE NAVIGATION
  ========================================================= */
  const closeNavigation = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  /* =========================================================
     TOGGLE PRODUCTS DROPDOWN
  ========================================================= */
  const toggleProducts = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setProductsOpen((current) => !current);
  };

  /* =========================================================
     CLOSE AFTER ROUTE CHANGE
  ========================================================= */
  useEffect(() => {
    setMenuOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  /* =========================================================
     OUTSIDE CLICK LISTENER FOR DROPDOWN
  ========================================================= */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        productsDropdownRef.current &&
        !productsDropdownRef.current.contains(event.target)
      ) {
        setProductsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  /* =========================================================
     ESCAPE KEY
  ========================================================= */
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setProductsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* =========================================================
     WINDOW RESIZE
  ========================================================= */
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

  /* =========================================================
     CHECK ACTIVE STATE
  ========================================================= */
  const isProductsActive =
    location.pathname === "/crm" ||
    location.pathname === "/products/crm" ||
    location.pathname === "/hms" ||
    location.pathname === "/products/hms";

  const isLinkActive = (link) => {
    if (link.id === "home") {
      return (
        location.pathname === "/home" ||
        location.pathname === "/home-transition"
      );
    }
    if (link.id === "services") {
      return (
        location.pathname === "/services" ||
        location.pathname.startsWith("/services/")
      );
    }
    if (link.id === "products") {
      return isProductsActive;
    }
    if (link.id === "portfolio") {
      return (
        location.pathname === "/portfolio" ||
        location.pathname === "/case-study" ||
        location.pathname === "/case-studies"
      );
    }
    return location.pathname === link.path;
  };

  return (
    <header className="site-navbar">
      <div className="container site-navbar__container">
        {/* =================================================
            LOGO
        ================================================= */}
        <NavLink
          to="/home-transition"
          className="site-navbar__logo"
          onClick={closeNavigation}
          aria-label="DGATE Integrated Services Home"
        >
          <img src={logo} alt="DGATE Integrated Services" />
        </NavLink>

        {/* =================================================
            NAVIGATION
        ================================================= */}
        <nav
          id="main-navigation"
          className={`site-navbar__nav ${
            menuOpen ? "site-navbar__nav--open" : ""
          }`}
          aria-label="Main navigation"
        >
          <ul className="site-navbar__links">
            {navLinks.map((link) => {
              if (link.isDropdown && link.id === "products") {
                return (
                  <li
                    key={link.id}
                    ref={productsDropdownRef}
                    className={`site-navbar__products-item ${
                      productsOpen ? "site-navbar__products-item--open" : ""
                    }`}
                  >
                    <button
                      type="button"
                      className={`site-navbar__link site-navbar__products-trigger ${
                        isProductsActive ? "active" : ""
                      }`}
                      onClick={toggleProducts}
                      aria-expanded={productsOpen}
                      aria-haspopup="true"
                    >
                      Products
                    </button>

                    <div className="site-navbar__products-dropdown">
                      <div className="site-navbar__products-menu">
                        <NavLink
                          to="/crm"
                          onClick={closeNavigation}
                          className={({ isActive }) =>
                            isActive || location.pathname === "/products/crm"
                              ? "site-navbar__products-link active"
                              : "site-navbar__products-link"
                          }
                        >
                          CRM
                        </NavLink>

                        <NavLink
                          to="/hms"
                          onClick={closeNavigation}
                          className={({ isActive }) =>
                            isActive || location.pathname === "/products/hms"
                              ? "site-navbar__products-link active"
                              : "site-navbar__products-link"
                          }
                        >
                          HMS
                        </NavLink>
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={link.id}>
                  <NavLink
                    to={link.path}
                    end={link.end}
                    onClick={closeNavigation}
                    className={({ isActive }) =>
                      isActive || isLinkActive(link)
                        ? "site-navbar__link active"
                        : "site-navbar__link"
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              );
            })}

            {/* =============================================
                CONTACT
            ============================================= */}
            <li className="site-navbar__contact-item">
              <NavLink
                to="/contact"
                onClick={closeNavigation}
                className={({ isActive }) =>
                  isActive
                    ? "site-navbar__contact site-navbar__contact--active"
                    : "site-navbar__contact"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* =================================================
            MOBILE TOGGLE
        ================================================= */}
        <button
          type="button"
          className="site-navbar__toggle"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
