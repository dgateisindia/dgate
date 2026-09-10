import "./Footer.css";

import { Link } from "react-router-dom";

import { logo } from "../../../assets/images/home/navbar";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";


/* =========================================================
   COMPANY LINKS
   Industries and Technologies removed
========================================================= */

const companyLinks = [
  {
    label: "About Us",
    to: "/about",
  },
  {
    label: "Services",
    to: "/services",
  },
  {
    label: "Portfolio",
    to: "/portfolio",
  },
  {
    label: "Blog",
    to: "/blog",
  },
  {
    label: "Achievements",
    to: "/achievements",
  },
  {
    label: "Gallery",
    to: "/gallery",
  },
  {
    label: "Careers",
    to: "/careers",
  },
  {
    label: "Insights",
    to: "/insights",
  },
  {
    label: "Contact Us",
    to: "/contact",

  },
];


/* =========================================================
   SOLUTIONS LINKS
   Old data removed
========================================================= */

const solutionLinks = [
  {
    label: "Brand Strategy & Identity",
    to: "/BrandingDesign.jsx",
  },
  {
    label: "Website & App Development",
    to: "/TechStackWeb.jsx",
  },
  {
    label: "E-Commerce Solutions",
    to: "/DevelopmentEcommerce.jsx",
  },
  {
    label: "Performance Marketing",
    to: "/DataAnalyticsPerformance.jsx",
  },
  {
    label: "AI Automations",
    to: "/SmartAIBusinessAutomation.jsx",
  },
];


function Footer() {
  return (
    <footer className="site-footer">

      <div className="container">

        <div className="site-footer__grid">

          {/* =================================================
              COMPANY INFORMATION
          ================================================= */}

          <div className="site-footer__company">

            <Link
              to="/"
              className="site-footer__logo"
              aria-label="D-GATE Home"
            >
              <img
                src={logo}
                alt="D-GATE Integrated Services"
              />
            </Link>


            <p>
              D-GATE Integrated Services is a growth-focused
              engineering solutions company helping businesses
              innovate, transform and scale through cutting-edge
              technologies.
            </p>


            <p className="site-footer__company-info">
              <strong>
                GST:
              </strong>{" "}
              29AAJCD5329F1ZI
            </p>


            <p className="site-footer__company-info">
              <strong>
                CIN:
              </strong>{" "}
              U74999KA2022PTC165544
            </p>

          </div>


          {/* =================================================
              COMPANY LINKS
          ================================================= */}

          <div className="site-footer__column">

            <h3>
              Company
            </h3>


            <ul>

              {companyLinks.map((item) => (

                <li key={item.to}>

                  <Link to={item.to}>
                    {item.label}
                  </Link>

                </li>

              ))}

            </ul>

          </div>


          {/* =================================================
              SOLUTIONS LINKS
          ================================================= */}

          <div className="site-footer__column">

            <h3>
              Solutions
            </h3>


            <ul>

              {solutionLinks.map((item) => (

                <li key={item.to}>

                  <Link to={item.to}>
                    {item.label}
                  </Link>

                </li>

              ))}

            </ul>

          </div>


          {/* =================================================
              ADDRESS & SOCIALS
          ================================================= */}

          <div className="site-footer__column site-footer__contact">

            <h3>
              Address & Socials
            </h3>


            {/* ADDRESS */}

            <div className="site-footer__contact-item">

              <FaMapMarkerAlt
                className="site-footer__contact-icon"
                aria-hidden="true"
              />


              <a
                href="https://maps.app.goo.gl/WkxFxd7u8LUEDW756"
                target="_blank"
                rel="noopener noreferrer"
              >
                218, 2nd Floor, JP Royale Complex
                <br />

                13th Cross, Sampige Rd
                <br />

                Malleshwaram
                <br />

                Bengaluru, Karnataka 560003
              </a>

            </div>


            {/* PHONE */}

            <div className="site-footer__contact-item">

              <FaPhoneAlt
                className="site-footer__contact-icon"
                aria-hidden="true"
              />


              <a href="tel:+918040907113">
                080-40907113
              </a>

            </div>


            {/* EMAIL */}

            <div className="site-footer__contact-item">

              <FaEnvelope
                className="site-footer__contact-icon"
                aria-hidden="true"
              />


              <a href="mailto:info@dgateis.com">
                info@dgateis.com
              </a>

            </div>


            {/* =================================================
                SOCIAL MEDIA
            ================================================= */}

            <div className="site-footer__socials">


              {/* INSTAGRAM */}

              <a
                href="https://www.instagram.com/dgateis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="D-GATE Instagram"
              >
                <FaInstagram />
              </a>


              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/company/dgateis/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="D-GATE LinkedIn"
              >
                <FaLinkedinIn />
              </a>


              {/* FACEBOOK */}

              <a
                href="https://www.facebook.com/p/DGate-Integrated-Services-100084928221960/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="D-GATE Facebook"
              >
                <FaFacebookF />
              </a>


              {/* YOUTUBE */}

              <a
                href="https://www.youtube.com/@dgateintegratedservices"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="D-GATE YouTube"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          FOOTER BOTTOM
      ===================================================== */}

      <div className="site-footer__bottom">

        <div className="container site-footer__bottom-inner">

          <p>
            © 2026 D-GATE Integrated Services.
            All Rights Reserved.
          </p>


          <div className="site-footer__legal">

            <span>
              Privacy Policy
            </span>

            <span>
              Terms of Use
            </span>

            <span>
              Sitemap
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}


export default Footer;