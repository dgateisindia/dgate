import "./SuccessStories.css";

import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { successStories } from "./successStoriesData";

gsap.registerPlugin(ScrollTrigger);

function SuccessStories() {
  const sectionRef = useRef(null);
  const location = useLocation();
  const isPortfolioPage = location.pathname.startsWith("/portfolio");

  /* =========================================================
     GSAP ANIMATION
  ========================================================= */

  useEffect(() => {
    if (!sectionRef.current) {
      return undefined;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.from(".home-success__card", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="success-stories"
      className="home-success"
      ref={sectionRef}
      aria-labelledby="success-title"
    >
      <div className="home-success__container">
        <div className="home-success__grid">
          {/* =====================================================
              HEADER (TOP-LEFT CELL: ALIGNED TO CARD 1 ON THE RIGHT)
          ===================================================== */}
          <header className="home-success__header">
            <span className="home-success__eyebrow">
              Selected Work
            </span>
            <h2 id="success-title" className="home-success__title">
              Work that moved the business forward.
            </h2>
            <p>
              Different challenges demand different thinking. The goal is always to create work that moves the business in the right direction. 
            </p>
            <div className="home-success__cta-row">
              {isPortfolioPage ? (
                <a href="#case-study" className="home-success__case-study-btn">
                  <span>Case Study</span>
                  <FaArrowRight className="home-success__case-study-arrow" />
                </a>
              ) : (
                <Link to="/portfolio#case-study" className="home-success__case-study-btn">
                  <span>Case Studies</span>
                  <FaArrowRight className="home-success__case-study-arrow" />
                </Link>
              )}
            </div>
          </header>

          {/* =====================================================
              PROJECT CARDS:
              - Card 1 sits to the right of the header text
              - Card 2 & 3 sit in the row below
          ===================================================== */}
          {successStories.map((project) => (
            <article className="home-success__card" key={project.id}>
              <Link
                to={`/success-stories/${project.slug}`}
                className="home-success__card-link"
                aria-label={`View ${project.brand} case study`}
              >
                <img
                  src={project.image}
                  alt={`${project.brand} ${project.cardTitle}`}
                  className="home-success__image"
                  loading="lazy"
                  decoding="async"
                />

                <div
                  className="home-success__overlay"
                  aria-hidden="true"
                />

                <div className="home-success__project-copy">
                  <span className="home-success__brand">
                    {project.brand}
                  </span>

                  <h3>{project.cardTitle}</h3>
                </div>

                <div className="home-success__view-project">
                  View Project
                  <span>
                    <FaArrowRight />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;