import "./AboutPartnership.css";

import {
  FaShieldAlt,
} from "react-icons/fa";


/* =========================================================
   VERIFIED PROOF POINTS
========================================================= */

const proofPoints = [
  {
    id: "experience",
    metric: "20+",
    label: "Years Of Team Experience",
    detail: "Over two decades of continuous cross-industry strategic execution",
  },
  {
    id: "brands",
    metric: "50+",
    label: "Brands Served",
    detail: "Trusted across consumer, enterprise and growth-stage brands",
  },
  {
    id: "retention",
    metric: "80%",
    label: "Client Retention",
    detail: "Hands-on, transparent and long-term client relationships",
  },
  {
    id: "presence",
    metric: "India • UAE",
    label: "Operational Hubs",
    detail: "Substantiated operational presence in Bengaluru & Dubai",
  },
];



/* =========================================================
   ABOUT PARTNERSHIP COMPONENT
========================================================= */

function AboutPartnership() {
  return (
    <section
      className="about-partnership"
      aria-labelledby="about-partnership-title"
    >
      <div className="container">

        {/* =====================================================
            HEADER / PARTNERSHIP STATEMENT
        ===================================================== */}
        <div className="about-partnership__header">

          <span className="about-partnership__eyebrow">
            Partnership
          </span>

          <h2 id="about-partnership-title" className="about-partnership__title">
            Not a vendor at the edge of the business.
            <br />
            <span>A thinking partner in the room.</span>
          </h2>

          <div className="about-partnership__line" aria-hidden="true" />

          <p className="about-partnership__lead">
            We work best with teams that value clarity, collaboration and the
            courage to improve what already exists. The relationship is hands-on,
            transparent and focused on building work both sides can stand behind.
          </p>

        </div>


        {/* =====================================================
            PROOF / CREDENTIALS BLOCK
        ===================================================== */}
        <div className="about-partnership__proof">

          <div className="about-partnership__proof-header">

            <div
              className="about-partnership__proof-icon"
              aria-hidden="true"
            >
              <FaShieldAlt />
            </div>

            <div className="about-partnership__proof-headings">
              <span className="about-partnership__proof-eyebrow">
                Proof &amp; Credentials
              </span>

              <h3 className="about-partnership__proof-title">
                Verified proof points built on trust and measurable outcomes
              </h3>
            </div>

          </div>


          {/* PROOF GRID */}
          <div className="about-partnership__proof-grid">
            {proofPoints.map((point) => (
              <div
                key={point.id}
                className="about-partnership__proof-card"
              >
                <div className="about-partnership__proof-metric">
                  {point.metric}
                </div>

                <div className="about-partnership__proof-label">
                  {point.label}
                </div>

                <p className="about-partnership__proof-detail">
                  {point.detail}
                </p>
              </div>
            ))}
          </div>




        </div>

      </div>
    </section>
  );
}

export default AboutPartnership;
