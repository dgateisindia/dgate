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
              20+ Years of Turning
              <span>
                {" "}Ideas Into Growth
              </span>
            </h2>


            <p>
              Across branding, technology, digital marketing and business
              transformation, we’ve spent over two decades helping brands build
              stronger foundations, sharper experiences and sustainable growth.
            </p>


            <div className="about-experience__features">

              <div className="about-experience__feature-item">
                <div className="about-experience__feature-header">
                  <FaAward aria-hidden="true" />
                  <h4>Strategic Expertise</h4>
                </div>
                <p>
                  Built on years of cross-industry experience and practical execution.
                </p>
              </div>


              <div className="about-experience__feature-item">
                <div className="about-experience__feature-header">
                  <FaHandshake aria-hidden="true" />
                  <h4>Long-Term Partnerships</h4>
                </div>
                <p>
                  We work beyond projects to create lasting value with our clients.
                </p>
              </div>


              <div className="about-experience__feature-item">
                <div className="about-experience__feature-header">
                  <FaChartLine aria-hidden="true" />
                  <h4>Growth Focused</h4>
                </div>
                <p>
                  Every solution is designed to support measurable business progress.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


export default AboutExperience;