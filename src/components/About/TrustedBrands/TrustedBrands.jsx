import "./TrustedBrands.css";

import {
  FaHandshake,
  FaChartLine,
  FaGlobe,
} from "react-icons/fa";


function TrustedBrands() {

  return (
    <section className="about-trusted">

      <div className="container">

        <div className="about-trusted__box">


          <div className="about-trusted__main">

            <strong>
              250+
            </strong>

            <div>

              <span>
                TRUSTED BRANDS
              </span>

              <h2>
                We've Helped Brands
                <br />
                Build and Scale.
              </h2>

            </div>

          </div>


          <div className="about-trusted__points">

            <span>
              <FaHandshake />
              Trusted Digital Partner
            </span>

            <span>
              <FaChartLine />
              Performance Focused
            </span>

            <span>
              <FaGlobe />
              Growth Across Markets
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}


export default TrustedBrands;