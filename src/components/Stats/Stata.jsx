import "./Stats.css";

import {
  FaUsers,
  FaGlobe,
  FaAward,
  FaBuilding,
  FaBriefcase,
} from "react-icons/fa";

function Stats() {
  return (
    <section className="stats">
      <div className="stats-container">

        <div className="stat-card">
          <FaBriefcase className="stat-icon" />
          <div>
            <h3>20+</h3>
            <p>Years Experience</p>
          </div>
        </div>

        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <div>
            <h3>2500+</h3>
            <p>Engineering Experts</p>
          </div>
        </div>

        <div className="stat-card">
          <FaBuilding className="stat-icon" />
          <div>
            <h3>500+</h3>
            <p>Global Clients</p>
          </div>
        </div>

        <div className="stat-card">
          <FaGlobe className="stat-icon" />
          <div>
            <h3>25+</h3>
            <p>Countries Served</p>
          </div>
        </div>

        <div className="stat-card">
          <FaAward className="stat-icon" />
          <div>
            <h3>98%</h3>
            <p>Client Retention</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Stats;