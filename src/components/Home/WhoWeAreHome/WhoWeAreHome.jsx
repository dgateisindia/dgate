import "./WhoWeAreHome.css";

import { Link } from "react-router-dom";

import {
  FaPalette,
  FaLaptopCode,
  FaChartLine,
  FaRobot,
  FaArrowRight,
} from "react-icons/fa";


const capabilities = [
  {
    id: "branding",
    Icon: FaPalette,
    title: "Branding",
  },
  {
    id: "development",
    Icon: FaLaptopCode,
    title: "Web & E-Commerce",
  },
  {
    id: "marketing",
    Icon: FaChartLine,
    title: "Performance Marketing",
  },
  {
    id: "automation",
    Icon: FaRobot,
    title: "AI & Automation",
  },
];


function WhoWeAreHome() {
  return (
    <section
      className="home-about-intro"
      aria-labelledby="home-about-intro-title"
    >
      <div className="container">

        <div className="home-about-intro__grid">


          {/* LEFT */}

          <div className="home-about-intro__heading">

            <span className="home-about-intro__eyebrow">
              WHO WE ARE
            </span>

            <h2 id="home-about-intro-title">
              Building Brands.
              <br />

              Creating Digital
              <span> Growth.</span>
            </h2>

            <div
              className="home-about-intro__line"
              aria-hidden="true"
            />

          </div>


          {/* RIGHT */}

          <div className="home-about-intro__content">

            <p className="home-about-intro__lead">
              DGATE Integrated Services is a digital
              solutions agency helping businesses build
              stronger brands, high-performing digital
              platforms and measurable growth.
            </p>

            <p>
              We bring branding, web development,
              e-commerce, performance marketing, analytics
              and intelligent automation together under one
              integrated digital strategy.
            </p>


            <div className="home-about-intro__capabilities">

              {capabilities.map((item) => {
                const Icon = item.Icon;

                return (
                  <div
                    className="home-about-intro__capability"
                    key={item.id}
                  >
                    <Icon aria-hidden="true" />

                    <span>
                      {item.title}
                    </span>
                  </div>
                );
              })}

            </div>


            <div className="home-about-intro__bottom">

              <div className="home-about-intro__stat">
                <strong>20+</strong>
                <span>Years Experience</span>
              </div>

              <div className="home-about-intro__stat">
                <strong>250+</strong>
                <span>Trusted Brands</span>
              </div>


              <Link
                to="/about"
                className="home-about-intro__button"
              >
                KNOW MORE ABOUT US

                <FaArrowRight aria-hidden="true" />
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


export default WhoWeAreHome;