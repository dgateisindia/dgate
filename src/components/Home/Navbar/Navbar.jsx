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
    path: "/home",
    end: true,
  },

  {
    id: "about",
    label: "ABOUT US",
    path: "/about",
  },

  {
    id: "homes",
    label: "HOMES",
    path: "/homes",
  },

];


/* =========================================================
   SERVICES DROPDOWN
========================================================= */

const serviceLinks = [

  {
    id: "all-services",
    label: "All Services",
    path: "/services",
  },

  {
    id: "branding-design",
    label: "Branding Design",
    path: "/branding-design",
  },

  {
    id: "development-ecommerce",
    label: "Development & E-Commerce Solutions",
    path: "/development-ecommerce",
  },

  {
    id: "tech-stack-web",
    label: "Technology Stack & Web Experience",
    path: "/tech-stack-web",
  },

  {
    id: "data-analytics-performance",
    label: "Data Analytics & Performance Growth",
    path: "/data-analytics-performance",
  },

  {
    id: "smart-ai-business-automation",
    label: "Smart AI & Business",
    path: "/smart-ai-business-automation",
  },

  /*{
    id: "digital-marketing-course",
    label: "Digital Marketing Courses [Offline/Online]",
    path: "/digital-marketing-course",
  }, */

];


/* =========================================================
   LINKS AFTER SERVICES
========================================================= */

const afterServiceLinks = [

  {
    id: "portfolio",
    label: "PORTFOLIO",
    path: "/portfolio",
  },

  {
    id: "achievements",
    label: "CERTIFICATES",
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


/* =========================================================
   NAVBAR
========================================================= */

function Navbar() {

  const [
    menuOpen,
    setMenuOpen,
  ] = useState(false);


  const [
    servicesOpen,
    setServicesOpen,
  ] = useState(false);


  const location =
    useLocation();


  const servicesRef =
    useRef(null);


  /* =========================================================
     SERVICES ACTIVE STATE
  ========================================================= */

  const servicesActive =
    serviceLinks.some(
      (service) =>
        location.pathname ===
        service.path
    );


  /* =========================================================
     CLOSE NAVIGATION
  ========================================================= */

  const closeNavigation =
    () => {

      setMenuOpen(false);

      setServicesOpen(false);

    };


  /* =========================================================
     CLOSE MENU AFTER ROUTE CHANGE
  ========================================================= */

  useEffect(
    () => {

      setMenuOpen(false);

      setServicesOpen(false);

    },
    [
      location.pathname,
    ]
  );


  /* =========================================================
     ESC KEY
  ========================================================= */

  useEffect(
    () => {

      const handleEscape =
        (event) => {

          if (
            event.key ===
            "Escape"
          ) {

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

    },
    []
  );


  /* =========================================================
     OUTSIDE CLICK
  ========================================================= */

  useEffect(
    () => {

      const handleOutsideClick =
        (event) => {

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

    },
    []
  );


  /* =========================================================
     CLOSE MOBILE MENU ON DESKTOP
  ========================================================= */

  useEffect(
    () => {

      const handleResize =
        () => {

          if (
            window.innerWidth >
            1180
          ) {

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

    },
    []
  );


  /* =========================================================
     SERVICES TOGGLE
  ========================================================= */

  const toggleServices =
    () => {

      setServicesOpen(
        (current) =>
          !current
      );

    };


  /* =========================================================
     UI
  ========================================================= */

  return (

    <header
      className="site-navbar"
    >


      <div
        className="container site-navbar__container"
      >


        {/* =================================================
            LOGO
        ================================================= */}

        <NavLink
          to="/home"

          className="site-navbar__logo"

          onClick={
            closeNavigation
          }

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

          className={`
            site-navbar__nav
            ${
              menuOpen
                ? "site-navbar__nav--open"
                : ""
            }
          `}

          aria-label="Main navigation"
        >


          <ul
            className="site-navbar__links"
          >


            {/* =============================================
                HOME / ABOUT / HOMES
            ============================================= */}

            {beforeServiceLinks.map(
              (link) => (

                <li
                  key={
                    link.id
                  }
                >

                  <NavLink
                    to={
                      link.path
                    }

                    end={
                      link.end
                    }

                    onClick={
                      closeNavigation
                    }

                    className={({
                      isActive,
                    }) =>

                      isActive

                        ? "site-navbar__link active"

                        : "site-navbar__link"

                    }
                  >

                    {
                      link.label
                    }

                  </NavLink>

                </li>

              )
            )}


            {/* =============================================
                SERVICES
            ============================================= */}

            <li
              ref={
                servicesRef
              }

              className={`
                site-navbar__services-item
                ${
                  servicesOpen
                    ? "site-navbar__services-item--open"
                    : ""
                }
              `}
            >


              <button
                type="button"

                className={`
                  site-navbar__link
                  site-navbar__services-trigger
                  ${
                    servicesActive
                      ? "active"
                      : ""
                  }
                `}

                onClick={
                  toggleServices
                }

                aria-expanded={
                  servicesOpen
                }

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
                  SERVICES DROPDOWN
              =========================================== */}

              <div
                id="services-dropdown"

                className="site-navbar__services-dropdown"
              >

                <div
                  className="site-navbar__services-menu"
                >

                  <nav
                    className="site-navbar__services-list"

                    aria-label="Services navigation"
                  >


                    {serviceLinks.map(
                      (service) => (

                        <NavLink
                          key={
                            service.id
                          }

                          to={
                            service.path
                          }

                          onClick={
                            closeNavigation
                          }

                          className={({
                            isActive,
                          }) =>

                            isActive

                              ? "site-navbar__service-option site-navbar__service-option--active"

                              : "site-navbar__service-option"

                          }
                        >

                          <span>

                            {
                              service.label
                            }

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

                <li
                  key={
                    link.id
                  }
                >

                  <NavLink
                    to={
                      link.path
                    }

                    onClick={
                      closeNavigation
                    }

                    className={({
                      isActive,
                    }) =>

                      isActive

                        ? "site-navbar__link active"

                        : "site-navbar__link"

                    }
                  >

                    {
                      link.label
                    }

                  </NavLink>

                </li>

              )
            )}


            {/* =============================================
                CONTACT
            ============================================= */}

            <li
              className="site-navbar__contact-item"
            >

              <NavLink
                to="/contact"

                onClick={
                  closeNavigation
                }

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

          onClick={
            () => {

              setMenuOpen(
                (current) =>
                  !current
              );

              setServicesOpen(
                false
              );

            }
          }

          aria-label={
            menuOpen

              ? "Close navigation menu"

              : "Open navigation menu"
          }

          aria-expanded={
            menuOpen
          }

          aria-controls="main-navigation"
        >


          {menuOpen ? (

            <FaTimes
              aria-hidden="true"
            />

          ) : (

            <FaBars
              aria-hidden="true"
            />

          )}


        </button>


      </div>


    </header>

  );

}


export default Navbar;