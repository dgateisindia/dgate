import "./WhoWeAreHome.css";

import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";


const capabilities = [
  {
    id: "branding",
    title: "Brand Direction",
  },
  {
    id: "development",
    title: "Digital Experiences",
  },
  {
    id: "marketing",
    title: "Growth Systems",
  },
  {
    id: "automation",
    title: "Intelligent Operations",
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
              Point of View
            </span>

            <h2 id="home-about-intro-title">
              The market does not stand still.

              <br />

               Neither should your brand.
              <span> </span>
            </h2>

            <div
              className="home-about-intro__line"
              aria-hidden="true"
            />

          </div>


          {/* RIGHT */}

          <div className="home-about-intro__content">

            <p className="home-about-intro__lead">
              Customers change. Categories evolve. New platforms alter how decisions are made. The businesses that stay relevant are the ones willing to rethink how they show up, how they communicate and how they create value.
            </p>

            <p>
              That is where transformation begins — not with another campaign, but with a clearer idea of what needs to change.
            </p>


            <div className="home-about-intro__capabilities">

              {capabilities.map((item) => (
                <div
                  className="home-about-intro__capability"
                  key={item.id}
                >
                  <span>
                    {item.title}
                  </span>
                </div>
              ))}

            </div>


            <div className="home-about-intro__bottom">
              <Link
                to="/about"
                className="home-about-intro__button"
              >
                Know More About Us

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
