import "./AboutHero.css";

import { Link } from "react-router-dom";

import { aboutHero } from "../../../assets/images/about";

function AboutHero() {

  const scrollToOurStory = () => {
    const section = document.getElementById("our-story");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      className="about-hero"
      style={{ backgroundImage: `url(${aboutHero})` }}
    >
      <div className="about-container">

        {/* Left Content */}

        <div className="about-content">

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>About Us</span>
          </div>

          <h1>
            ABOUT <span>D-GATE</span>
          </h1>

          <div className="hero-line"></div>

          <h3>
            Engineering a Better Tomorrow
          </h3>

          <p>
            We design, build and support innovative engineering
            solutions that empower businesses through technology,
            product development and digital transformation.
          </p>

          <button
            type="button"
            onClick={scrollToOurStory}
          >
            OUR STORY →
          </button>

        </div>

      </div>
    </section>
  );
}

export default AboutHero;