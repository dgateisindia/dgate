import {
  useEffect,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  FaArrowRight,
  FaBullhorn,
  FaCode,
  FaPalette,
  FaShoppingCart,
} from "react-icons/fa";

import Navbar from "../../components/Home/Navbar/Navbar";
import Footer from "../../components/Home/Footer/Footer";

import "../Shared/InnerPages.css";


/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    id: 1,
    title: "Small Business Branding & Identity",
    category: "Branding",
    description:
      "A brand identity project focused on positioning, visual consistency and professional customer-facing communication for a growing business.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: 2,
    title: "D2C E-Commerce Website Redesign",
    category: "E-Commerce",
    description:
      "A conversion-focused e-commerce redesign created to improve product discovery, mobile usability and the overall shopping journey.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: 3,
    title: "B2B Corporate Website Development",
    category: "Web Development",
    description:
      "A professional corporate website structured around services, credibility, responsive performance and lead generation.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: 4,
    title: "Local Business Digital Marketing",
    category: "Digital Marketing",
    description:
      "A digital marketing approach focused on stronger visibility, clearer brand communication and measurable customer engagement.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: 5,
    title: "Retail Commerce Experience",
    category: "E-Commerce",
    description:
      "A modern retail commerce experience designed to improve product browsing, customer journeys and online sales.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: 6,
    title: "Startup Branding & Digital Launch",
    category: "Branding",
    description:
      "A startup-focused identity and digital presence created to establish clear positioning and a professional market launch.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
  },
];


const categories = [
  "All",
  "Branding",
  "E-Commerce",
  "Web Development",
  "Digital Marketing",
];


function Portfolio() {
  const [activeCategory, setActiveCategory] =
    useState("All");


  /* =========================================================
     SEO
  ========================================================= */

  useEffect(() => {
    document.title =
      "Digital Marketing Agency Portfolio Bangalore | DGATE IS";


    const description =
      "Explore DGATE IS digital marketing agency portfolio in Bangalore including branding case studies, ecommerce website redesigns, web development and digital marketing projects.";


    let metaDescription =
      document.querySelector(
        'meta[name="description"]'
      );


    if (!metaDescription) {
      metaDescription =
        document.createElement("meta");

      metaDescription.setAttribute(
        "name",
        "description"
      );

      document.head.appendChild(
        metaDescription
      );
    }


    metaDescription.setAttribute(
      "content",
      description
    );


    let canonical =
      document.querySelector(
        'link[rel="canonical"]'
      );


    if (!canonical) {
      canonical =
        document.createElement("link");

      canonical.setAttribute(
        "rel",
        "canonical"
      );

      document.head.appendChild(
        canonical
      );
    }


    canonical.setAttribute(
      "href",
      `${window.location.origin}/portfolio`
    );

  }, []);


  /* =========================================================
     FILTER
  ========================================================= */

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category ===
            activeCategory
        );


  return (
    <>
      <Navbar />


      <main className="dgate-page">


        {/* =====================================================
            PREMIUM PORTFOLIO HERO
        ===================================================== */}

        <section
          className="
            dgate-inner-hero
            dgate-inner-hero--premium
            dgate-inner-hero--portfolio
          "
        >

          <div
            className="dgate-inner-hero__pattern"
            aria-hidden="true"
          />


          <div className="dgate-container">

            <div className="dgate-inner-hero__layout">


              {/* LEFT CONTENT */}

              <div className="dgate-inner-hero__content">


                {/* BREADCRUMB */}

                <nav
                  className="dgate-inner-hero__breadcrumb"
                  aria-label="Breadcrumb"
                >

                  <Link to="/">
                    Home
                  </Link>


                  <span aria-hidden="true">
                    ›
                  </span>


                  <span aria-current="page">
                    Portfolio
                  </span>

                </nav>


                {/* EYEBROW */}

                <div className="dgate-eyebrow">

                  <span className="dgate-eyebrow__dot" />

                  DGATE PORTFOLIO

                </div>


                {/* TITLE */}

                <h1>

                  Digital Marketing
                  Agency Portfolio{" "}

                  <span>
                    Bangalore.
                  </span>

                </h1>


                {/* ACCENT */}

                <div
                  className="dgate-inner-hero__line"
                  aria-hidden="true"
                />


                {/* DESCRIPTION */}

                <p>

                  Explore branding case studies,
                  e-commerce transformations,
                  website development and digital
                  marketing work built around real
                  business challenges and measurable
                  growth.

                </p>


                {/* ACTIONS */}

                <div className="dgate-inner-hero__actions">

                  <a
                    href="#portfolio-projects"
                    className="dgate-inner-hero__button"
                  >

                    Explore Our Work

                    <FaArrowRight
                      aria-hidden="true"
                    />

                  </a>


                  <Link
                    to="/contact"
                    className="
                      dgate-inner-hero__button
                      dgate-inner-hero__button--ghost
                    "
                  >

                    Start a Project

                  </Link>

                </div>


                {/* STATS */}

                <div className="dgate-inner-hero__stats">

                  <div>

                    <strong>
                      250+
                    </strong>

                    <span>
                      Brands Supported
                    </span>

                  </div>


                  <div>

                    <strong>
                      360°
                    </strong>

                    <span>
                      Digital Approach
                    </span>

                  </div>


                  <div>

                    <strong>
                      4+
                    </strong>

                    <span>
                      Core Capabilities
                    </span>

                  </div>

                </div>

              </div>


              {/* =================================================
                  RIGHT ANIMATED VISUAL
              ================================================= */}

              <div
                className="dgate-inner-hero__scene"
                aria-hidden="true"
              >

                <div className="dgate-hero-orbit dgate-hero-orbit--one" />

                <div className="dgate-hero-orbit dgate-hero-orbit--two" />


                <div className="dgate-hero-panel">


                  <div className="dgate-hero-panel__top">

                    <div>

                      <span />
                      <span />
                      <span />

                    </div>


                    <small>
                      DGATE / PORTFOLIO
                    </small>

                  </div>


                  <div className="dgate-hero-panel__body">

                    <span className="dgate-hero-panel__label">

                      FEATURED DIGITAL WORK

                    </span>


                    <strong>

                      Strategy.
                      <br />

                      Design.
                      <br />

                      Growth.

                    </strong>


                    <div className="dgate-hero-bars">

                      <span />
                      <span />
                      <span />

                    </div>

                  </div>

                </div>


                <div className="dgate-hero-chip dgate-hero-chip--one">

                  Branding

                </div>


                <div className="dgate-hero-chip dgate-hero-chip--two">

                  E-Commerce

                </div>


                <div className="dgate-hero-chip dgate-hero-chip--three">

                  Digital Growth

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            PROJECTS
        ===================================================== */}

        <section
          id="portfolio-projects"
          className="dgate-section"
        >

          <div className="dgate-container">

            <div className="dgate-section-heading">

              <div className="dgate-section-label">
                Selected Work
              </div>


              <h2>

                Solutions built around
                real business needs.

              </h2>


              <p>

                From brand identity and e-commerce
                experiences to business websites
                and digital marketing campaigns,
                every project is approached with
                strategy, usability and measurable
                growth in mind.

              </p>

            </div>


            {/* FILTER */}

            <div className="dgate-filters">

              {categories.map(
                (category) => (

                  <button
                    key={category}
                    type="button"
                    className={`dgate-filter-btn ${
                      activeCategory === category
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      setActiveCategory(
                        category
                      )
                    }
                    aria-pressed={
                      activeCategory === category
                    }
                  >

                    {category}

                  </button>

                )
              )}

            </div>


            {/* PROJECT GRID */}

            <div className="portfolio-grid">

              {filteredProjects.map(
                (project) => (

                  <article
                    className="portfolio-card"
                    key={project.id}
                  >

                    <div className="portfolio-card__image">

                      <img
                        src={project.image}
                        alt={`${project.title} in Bangalore`}
                        loading="lazy"
                      />


                      <span className="portfolio-card__type">

                        {project.category}

                      </span>

                    </div>


                    <div className="portfolio-card__body">

                      <h3>
                        {project.title}
                      </h3>


                      <p>
                        {project.description}
                      </p>


                      <Link
                        to="/contact"
                        className="dgate-link"
                      >

                        Discuss a Similar Project

                        <FaArrowRight />

                      </Link>

                    </div>

                  </article>

                )
              )}

            </div>

          </div>

        </section>


        {/* =====================================================
            EXPERTISE
        ===================================================== */}

        <section className="dgate-section dgate-section--dark">

          <div className="dgate-container">

            <div className="dgate-section-heading dgate-section-heading--center">

              <div className="dgate-section-label">
                Our Expertise
              </div>


              <h2>

                Integrated digital
                capabilities built for growth.

              </h2>


              <p>

                Strategy, technology, design
                and marketing come together
                under one integrated DGATE
                approach.

              </p>

            </div>


            <div className="dgate-stats-grid">

              <div className="dgate-stat">

                <strong>
                  <FaPalette />
                </strong>

                <span>
                  Branding
                </span>

              </div>


              <div className="dgate-stat">

                <strong>
                  <FaCode />
                </strong>

                <span>
                  Web Development
                </span>

              </div>


              <div className="dgate-stat">

                <strong>
                  <FaShoppingCart />
                </strong>

                <span>
                  E-Commerce
                </span>

              </div>


              <div className="dgate-stat">

                <strong>
                  <FaBullhorn />
                </strong>

                <span>
                  Digital Marketing
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="dgate-page-cta">

          <div className="dgate-container">

            <div className="dgate-page-cta__content">

              <div>

                <h2>
                  Have a project in mind?
                </h2>


                <p>

                  Tell us what you want to build
                  and our team will help you shape
                  the right digital solution.

                </p>

              </div>


              <Link
                to="/contact"
                className="dgate-page-cta__button"
              >

                Start a Project

                <FaArrowRight />

              </Link>

            </div>

          </div>

        </section>

      </main>


      <Footer />
    </>
  );
}


export default Portfolio;