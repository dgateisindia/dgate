import "./AboutHero.css";

import { Link } from "react-router-dom";

import { aboutHero } from "../../../assets/images/about";

function AboutHero() {
  return (
    <section
      className="about-page-hero"
      style={{
        backgroundImage: `url(${aboutHero})`,
      }}
      aria-labelledby="about-page-hero-title"
    >
      <div className="container about-page-hero__container">
        <div className="about-page-hero__content">

          <h1 id="about-page-hero-title">
            DGATE
            <br />
            Transformative Marketing
            <br />
            Agency in Bangalore
          </h1>
          <br></br>

          <p>
            D-GATE Integrated Services is a technology, creative and growth
            solutions company helping businesses build brands, digital
            products and measurable growth systems.
          </p>
          

          <Link
            to="/portfolio"
            className="about-page-hero__button"
            aria-label="View D-GATE portfolio"
          >
            OUR STORY
            <span aria-hidden="true">→</span>
          </Link>

        </div>
      </div>
    </section>
  );
}

export default AboutHero;