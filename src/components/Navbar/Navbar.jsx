import "./Navbar.css";
import logo from "../../assets/images/logo.webp";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-container">

        <div className="logo">
          <img src={logo} alt="D-GATE" />
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT US</a></li>
          <li><a href="#">SERVICES</a></li>
          <li><a href="#">INDUSTRIES</a></li>
          <li><a href="#">TECHNOLOGIES</a></li>
          <li><a href="#">CAREERS</a></li>
          <li><a href="#">INSIGHTS</a></li>
          <li><a href="#">CONTACT US</a></li>
        </ul>

        <button className="talk-btn">
          LET'S TALK
        </button>

        <div
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </header>
  );
}

export default Navbar;