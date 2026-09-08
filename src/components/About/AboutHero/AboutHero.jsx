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
      className="about-page-hero"
      style={{
        backgroundImage: `url(${aboutHero})`,
      }}
      aria-labelledby="about-page-hero-title"
    >
      <div className="container about-page-hero__container">

        <div className="about-page-hero__content">

          <nav
            className="about-page-hero__breadcrumb"
            aria-label="Breadcrumb"
          >
            <Link to="/">
              Home
            </Link>

            <span aria-hidden="true">
              ›
            </span>

            <span aria-current="page">
              About Us
            </span>
          </nav>

          <h1 id="about-page-hero-title">
            ABOUT{" "}
            <span>D-GATE</span>
          </h1>

          <div
            className="about-page-hero__line"
            aria-hidden="true"
          />

          <h2>
            Engineering a Better Tomorrow
          </h2>

          <p>
            We design, build and support innovative engineering
            solutions that empower businesses through technology,
            product development and digital transformation.
          </p>

          <button
            type="button"
            className="about-page-hero__button"
            onClick={scrollToOurStory}
          >
            OUR STORY
            <span aria-hidden="true">→</span>
          </button>

        </div>

      </div>
    </section>
  );
}

export default AboutHero;