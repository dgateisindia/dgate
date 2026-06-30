import "./Footer.css";

import logo from "../../assets/images/logo.webp";

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

          <p><strong>GST:</strong> 29AAJCD5329F1ZI</p>

          <p><strong>CIN:</strong> U74999KA2022PTC165544</p>

        </div>

        {/* Company Links */}

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

          <h3>Contact Us</h3>

          <p>
            <FaMapMarkerAlt className="footer-icon" />
            123 Business Park,
            Whitefield,
            Bangalore - 560066
          </p>

          <p>
            <FaPhoneAlt className="footer-icon" />
            +91 80 4712 9000
          </p>

          <p>
            <FaEnvelope className="footer-icon" />
            info@dgateis.com
          </p>

          <div className="social-icons">

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
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