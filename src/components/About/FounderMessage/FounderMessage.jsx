import "./FounderMessage.css";

import {
  FaQuoteLeft,
} from "react-icons/fa";


function FounderMessage() {

  return (
    <section className="about-founder">

      <div className="container">

        <div className="about-founder__grid">


          <div className="about-founder__title">

            <span>
              FOUNDER'S MESSAGE
            </span>

            <h2>
              Building Brands
              <br />

              <strong>
                That Last
              </strong>
            </h2>

          </div>


          <div className="about-founder__message">

            <FaQuoteLeft
              className="about-founder__quote"
              aria-hidden="true"
            />


            <p>
              At D-GATE Integrated Services, our philosophy
              is simple — focus on clarity before scale,
              systems before speed, and value before volume.
              We partner with brands not just to execute
              campaigns, but to build strong digital
              foundations that compound growth over time.
            </p>


            <p>
              Every strategy we design is rooted in real
              business goals, every solution is built for
              performance, and every relationship is treated
              as a long-term partnership.
            </p>


            <div className="about-founder__author">

              <strong>
                Yousuf Alfalah
              </strong>

              <span>
                Founder &amp; CEO,
                D-GATE Integrated Services
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}


export default FounderMessage;