import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  NavLink,
  useLocation,
} from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

import {
  logo,
} from "../../../assets/images/home/navbar";

import "./Navbar.css";


/* =========================================================
   NAVIGATION BEFORE SERVICES
========================================================= */

const beforeServiceLinks = [
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
];


/* =========================================================
   SERVICES DROPDOWN LINKS
========================================================= */

const serviceLinks = [
  {
    id: "branding",
    label: "Branding Design",
    path: "/BrandingDesign.jsx",
  },
  {
    id: "development",
    label: "Development & E-Commerce Solutions",
    path: "/DevelopmentEcommerce.jsx",
  },
  {
    id: "technology",
    label: "Tech Stack & Web Experience",
    path: "/TechStackWeb.jsx",
  },
  {
    id: "analytics",
    label: "Data Analytics & Performance Growth",
    path: "/DataAnalyticsPerformance.jsx",
  },
  {
    id: "social",
    label: "Social Media Marketing",
    path: "/SocialMediaMarketing.jsx",
  },
  {
    id: "automation",
    label: "Smart AI & Business Automation",
    path: "/SmartAIBusinessAutomation.jsx",
  },
];


/* =========================================================
   NAVIGATION AFTER SERVICES
========================================================= */

const afterServiceLinks = [
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
  const [menuOpen, setMenuOpen] =
    useState(false);

  const [servicesOpen, setServicesOpen] =
    useState(false);

  const location =
    useLocation();

  const servicesRef =
    useRef(null);


  /* =========================================================
     CHECK WHETHER SERVICES IS ACTIVE
  ========================================================= */

  const servicesActive =
    location.pathname === "/services" ||
    serviceLinks.some(
      (service) =>
        service.path === location.pathname
    );


  /* =========================================================
     CLOSE NAVIGATION
  ========================================================= */

  const closeNavigation = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };


  /* =========================================================
     CLOSE AFTER ROUTE CHANGE
  ========================================================= */

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);


  /* =========================================================
     ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };


    window.addEventListener(
      "keydown",
      handleEscape
    );


    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);


  /* =========================================================
     CLICK OUTSIDE SERVICES
  ========================================================= */

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(
          event.target
        )
      ) {
        setServicesOpen(false);
      }
    };


    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );


    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);


  /* =========================================================
     WINDOW RESIZE
  ========================================================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1180) {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };


    window.addEventListener(
      "resize",
      handleResize
    );


    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);


  /* =========================================================
     SERVICES TOGGLE
  ========================================================= */

  const toggleServices = () => {
    setServicesOpen(
      (current) => !current
    );
  };


  return (
    <header className="site-navbar">

      <div className="container site-navbar__container">

        {/* =================================================
            LOGO
        ================================================= */}

        <NavLink
          to="/"
          className="site-navbar__logo"
          onClick={closeNavigation}
          aria-label="DGATE Integrated Services Home"
        >

          <img
            src={logo}
            alt="DGATE Integrated Services"
          />

        </NavLink>


        {/* =================================================
            NAVIGATION
        ================================================= */}

        <nav
          id="main-navigation"
          className={`site-navbar__nav ${
            menuOpen
              ? "site-navbar__nav--open"
              : ""
          }`}
          aria-label="Main navigation"
        >

          <ul className="site-navbar__links">

            {/* =============================================
                HOME + ABOUT
            ============================================= */}

            {beforeServiceLinks.map(
              (link) => (

                <li key={link.id}>

                  <NavLink
                    to={link.path}
                    end={link.end}
                    onClick={closeNavigation}
                    className={({
                      isActive,
                    }) =>
                      isActive
                        ? "site-navbar__link active"
                        : "site-navbar__link"
                    }
                  >

                    {link.label}

                  </NavLink>

                </li>

              )
            )}


            {/* =============================================
                SERVICES
            ============================================= */}

            <li
              ref={servicesRef}
              className={`site-navbar__services-item ${
                servicesOpen
                  ? "site-navbar__services-item--open"
                  : ""
              }`}
            >

              <button
                type="button"
                className={`site-navbar__link site-navbar__services-trigger ${
                  servicesActive
                    ? "active"
                    : ""
                }`}
                onClick={toggleServices}
                aria-expanded={servicesOpen}
                aria-controls="services-dropdown"
                aria-haspopup="true"
              >

                <span>
                  SERVICES
                </span>


                <FaChevronDown
                  className="site-navbar__services-chevron"
                  aria-hidden="true"
                />

              </button>


              {/* ===========================================
                  DROPDOWN

                  No inner SERVICES / PORTFOLIO header.
              =========================================== */}

              <div
                id="services-dropdown"
                className="site-navbar__services-dropdown"
              >

                <div className="site-navbar__services-menu">

                  <nav
                    className="site-navbar__services-list"
                    aria-label="Services navigation"
                  >

                    {serviceLinks.map(
                      (service) => (

                        <NavLink
                          key={service.id}
                          to={service.path}
                          onClick={closeNavigation}
                          className={({
                            isActive,
                          }) =>
                            isActive
                              ? "site-navbar__service-option site-navbar__service-option--active"
                              : "site-navbar__service-option"
                          }
                        >

                          <span>
                            {service.label}
                          </span>

                        </NavLink>

                      )
                    )}

                  </nav>

                </div>

              </div>

            </li>


            {/* =============================================
                LINKS AFTER SERVICES
            ============================================= */}

            {afterServiceLinks.map(
              (link) => (

                <li key={link.id}>

                  <NavLink
                    to={link.path}
                    onClick={closeNavigation}
                    className={({
                      isActive,
                    }) =>
                      isActive
                        ? "site-navbar__link active"
                        : "site-navbar__link"
                    }
                  >

                    {link.label}

                  </NavLink>

                </li>

              )
            )}


            {/* =============================================
                CONTACT
            ============================================= */}

            <li className="site-navbar__contact-item">

              <NavLink
                to="/contact"
                onClick={closeNavigation}
                className={({
                  isActive,
                }) =>
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


        {/* =================================================
            MOBILE TOGGLE
        ================================================= */}

        <button
          type="button"
          className="site-navbar__toggle"
          onClick={() => {
            setMenuOpen(
              (current) => !current
            );

            setServicesOpen(false);
          }}
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