import "./Footer.css";

import { logo } from "../../assets/images/navbar";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company */}

        <div className="footer-column company">
          <img src={logo} alt="DGATE Logo" className="footer-logo" />

          <p>
            D-GATE Integrated Services is a growth-focused engineering
            solutions company helping businesses innovate, transform,
            and scale through cutting-edge technologies.
          </p>

          <p>
            <strong>GST:</strong> 29AAJCD5329F1ZI
          </p>

          <p>
            <strong>CIN:</strong> U74999KA2022PTC165544
          </p>
        </div>

        {/* Company */}

        <div className="footer-column">
          <h3>Company</h3>

          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Industries</li>
            <li>Technologies</li>
            <li>Careers</li>
            <li>Insights</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Solutions */}

        <div className="footer-column">
          <h3>Solutions</h3>

          <ul>
            <li>AI & ML</li>
            <li>Cloud</li>
            <li>Data Analytics</li>
            <li>DevOps</li>
            <li>IoT</li>
            <li>Cyber Security</li>
          </ul>
        </div>

        {/* Contact */}

        <div className="footer-column">

          <h3>Address & Socials</h3>

          <div className="contact-item">
            <FaMapMarkerAlt className="footer-icon" />

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

          <div className="contact-item">
            <FaPhoneAlt className="footer-icon" />

            <a href="tel:+918040907113">
              080-40907113
            </a>
          </div>

          <div className="contact-item">
            <FaEnvelope className="footer-icon" />

            <a href="mailto:info@dgateis.com">
              info@dgateis.com
            </a>
          </div>

          <div className="social-icons">

            <a
              href="https://www.instagram.com/dgateis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/dgateis/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.facebook.com/p/DGate-Integrated-Services-100084928221960/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.youtube.com/@dgateintegratedservices"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 D-GATE Integrated Services. All Rights Reserved.
        </p>

        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>|</span>
          <span>Terms of Use</span>
          <span>|</span>
          <span>Sitemap</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;