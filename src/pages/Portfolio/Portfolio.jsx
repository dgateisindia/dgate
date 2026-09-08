import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaCode,
  FaMobileAlt,
  FaShoppingCart,
  FaRocket,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

import Navbar from "../../components/Home/Navbar/Navbar";
import Footer from "../../components/Home/Footer/Footer";

import "../Shared/InnerPages.css";


const projects = [
  {
    id: 1,
    title: "Enterprise CRM Solution",
    category: "Web Development",
    description:
      "A centralized CRM platform designed to manage leads, employees, follow-ups, reports and business operations efficiently.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    title: "Modern E-Commerce Platform",
    category: "E-Commerce",
    description:
      "A conversion-focused online shopping experience with responsive design, streamlined checkout and product management.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    title: "Business Mobile Application",
    category: "Mobile Apps",
    description:
      "A scalable mobile application designed to connect customers, operations and real-time business services.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    title: "Corporate Digital Experience",
    category: "Web Development",
    description:
      "A professional corporate website focused on strong branding, responsive performance and clear service communication.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 5,
    title: "Retail Commerce Experience",
    category: "E-Commerce",
    description:
      "A modern retail platform created to improve product discovery, customer engagement and online sales.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 6,
    title: "Service Management App",
    category: "Mobile Apps",
    description:
      "A user-friendly service application that simplifies customer requests, tracking and communication.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=85",
  },
];


const categories = [
  "All",
  "Web Development",
  "E-Commerce",
  "Mobile Apps",
];


function Portfolio() {
  const [activeCategory, setActiveCategory] =
    useState("All");


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

        {/* HERO */}

        <section className="dgate-inner-hero">
          <div className="dgate-container">

            <div className="dgate-inner-hero__content">

              <div className="dgate-eyebrow">
                <span className="dgate-eyebrow__dot" />
                Our Portfolio
              </div>

              <h1>
                Ideas transformed into
                {" "}
                <span>
                  digital experiences.
                </span>
              </h1>

              <p>
                Explore selected projects that
                demonstrate how DGATE combines
                technology, design and strategy
                to create meaningful digital
                solutions.
              </p>

            </div>

          </div>
        </section>


        {/* PROJECTS */}

        <section className="dgate-section">
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
                From corporate platforms to
                commerce and mobile experiences,
                our approach focuses on usability,
                performance and measurable value.
              </p>

            </div>


            <div className="dgate-filters">

              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`dgate-filter-btn ${
                    activeCategory === category
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setActiveCategory(category)
                  }
                >
                  {category}
                </button>
              ))}

            </div>


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
                        alt={project.title}
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
                        Discuss a similar project
                        <FaArrowRight />
                      </Link>

                    </div>

                  </article>

                )
              )}

            </div>

          </div>
        </section>


        {/* STATS */}

        <section className="dgate-section dgate-section--dark">
          <div className="dgate-container">

            <div className="dgate-section-heading dgate-section-heading--center">

              <div className="dgate-section-label">
                Our Expertise
              </div>

              <h2>
                Technology that supports growth.
              </h2>

              <p>
                We combine digital strategy,
                technology and execution under
                one integrated approach.
              </p>

            </div>


            <div className="dgate-stats-grid">

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
                  <FaMobileAlt />
                </strong>
                <span>
                  Mobile Solutions
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
                <strong>360°</strong>
                <span>
                  Digital Solutions
                </span>
              </div>

            </div>

          </div>
        </section>


        {/* CTA */}

        <section className="dgate-page-cta">
          <div className="dgate-container">

            <div className="dgate-page-cta__content">

              <div>
                <h2>
                  Have a project in mind?
                </h2>

                <p>
                  Tell us what you want to build
                  and our team will help you turn
                  the idea into the right digital
                  solution.
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