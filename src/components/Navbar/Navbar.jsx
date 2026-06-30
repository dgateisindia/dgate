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
  <li><button>HOME</button></li>
  <li><button>ABOUT US</button></li>
  <li><button>SERVICES</button></li>
  <li><button>INDUSTRIES</button></li>
  <li><button>TECHNOLOGIES</button></li>
  <li><button>CAREERS</button></li>
  <li><button>INSIGHTS</button></li>
  <li><button>CONTACT US</button></li>
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