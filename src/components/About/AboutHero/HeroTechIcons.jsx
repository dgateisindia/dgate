import "./HeroTechIcons.css";

import {
  FaBrain,
  FaCloud,
  FaGlobe,
  FaChartBar,
  FaShieldAlt,
  FaCog,
} from "react-icons/fa";

function HeroTechIcons() {
  return (
    <div className="hero-tech">

      <div className="circle brain">
        <FaBrain />
        <span>AI</span>
      </div>

      <div className="circle cloud">
        <FaCloud />
        <span>Cloud</span>
      </div>

      <div className="circle gear">
        <FaCog />
        <span>Engineering</span>
      </div>

      <div className="circle globe">
        <FaGlobe />
        <span>Global</span>
      </div>

      <div className="circle chart">
        <FaChartBar />
        <span>Analytics</span>
      </div>

      <div className="circle shield">
        <FaShieldAlt />
        <span>Security</span>
      </div>

    </div>
  );
}

export default HeroTechIcons;