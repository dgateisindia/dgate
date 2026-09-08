import "./AboutExperience.css";

import {
  FaAward,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";


function AboutExperience() {
  return (
    <section
      className="about-experience"
      aria-labelledby="about-experience-title"
    >
      <div className="container">

        <div className="about-experience__box">


          {/* ================================
              EXPERIENCE NUMBER
          ================================= */}

          <div className="about-experience__number">

            <strong>
              20+
            </strong>

            <span>
              Years of Experience
            </span>

          </div>


          {/* DIVIDER */}

          <div
            className="about-experience__divider"
            aria-hidden="true"
          />


          {/* ================================
              CONTENT
          ================================= */}

          <div className="about-experience__content">

            <span className="about-experience__eyebrow">
              EXPERIENCE THAT DELIVERS
            </span>


            <h2 id="about-experience-title">
              Two Decades of Building
              <span>
                {" "}Business Growth
              </span>
            </h2>


            <p>
              Our experience spans branding, technology,
              digital marketing and performance growth,
              helping businesses build stronger digital
              foundations and scale with confidence.
            </p>


            <div className="about-experience__features">

              <div>
                <FaAward aria-hidden="true" />

                <span>
                  Proven Experience
                </span>
              </div>


              <div>
                <FaHandshake aria-hidden="true" />

                <span>
                  Long-Term Partnerships
                </span>
              </div>


              <div>
                <FaChartLine aria-hidden="true" />

                <span>
                  Growth Focused
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


export default AboutExperience;