import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../../components/Home/Navbar/Navbar";
import Footer from "../../components/Home/Footer/Footer";
import CaseStudySection from "../../components/CaseStudy/CaseStudySection";
import { successStories } from "../../components/Home/SuccessStories/successStoriesData";
import portfolioHeroBg from "../../assets/images/portfolio/portfolio-hero-bg.jpg";
import "./Portfolio.css";

function Portfolio() {
  const [showCaseStudies, setShowCaseStudies] = useState(false);
  const projectsSectionRef = useRef(null);
  const location = useLocation();

  /* Listen for hash or open case studies */
  useEffect(() => {
    document.title = "Our Work | DGATE Integrated Services";

    if (
      window.location.hash === "#case-study" ||
      window.location.hash === "#case-studies"
    ) {
      setShowCaseStudies(true);
      setTimeout(() => {
        projectsSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location.hash]);

  const handleToggleCaseStudies = () => {
    setShowCaseStudies(true);
    setTimeout(() => {
      projectsSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 120);
  };

  return (
    <div className="portfolio-page">
      {/* =====================================================
          NAVIGATION BAR
      ===================================================== */}
      <Navbar />

      <main>
        {/* =====================================================
            1. PORTFOLIO HERO WITH BACKGROUND HERO IMAGE
        ===================================================== */}
        <section className="portfolio-hero">
          <img
            src={portfolioHeroBg}
            alt=""
            aria-hidden="true"
            className="portfolio-hero__bg"
            loading="eager"
            fetchPriority="high"
          />

          <div className="portfolio-hero__content">
            <h1 className="portfolio-hero__title">
              Work that moved the business forward.
            </h1>

            <p className="portfolio-hero__description">
              Different challenges demand different thinking. The goal is always to create work that moves the business in the right direction.
            </p>

            <div className="portfolio-hero__cta-wrap">
              <button
                type="button"
                className="portfolio-hero__case-study-btn"
                onClick={handleToggleCaseStudies}
                aria-expanded={showCaseStudies}
                aria-controls="portfolio-case-studies"
              >
                Case Studies
                <span className={`portfolio-hero__arrow ${showCaseStudies ? "is-open" : ""}`} aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </section>

        {/* =====================================================
            2. REVEALED PROJECTS (HIYATH, UNIHEAL, HEXAD)
               OPENS ONLY WHEN CASE STUDY BUTTON IS CLICKED
        ===================================================== */}
        {showCaseStudies && (
          <section
            id="portfolio-case-studies"
            className="portfolio-projects-reveal"
            ref={projectsSectionRef}
          >
            <div className="portfolio-container">
              <div className="portfolio-projects-reveal__header">
                <span className="portfolio-projects-reveal__eyebrow">
                  Featured Case Studies
                </span>
                <h2 className="portfolio-projects-reveal__title">
                  Explore Proven Results
                </h2>
              </div>

              <div className="portfolio-projects-grid">
                {successStories.map((project) => (
                  <article className="portfolio-project-card" key={project.id}>
                    <Link
                      to={`/success-stories/${project.slug}`}
                      className="portfolio-project-card__link"
                      aria-label={`View ${project.brand} case study`}
                    >
                      <img
                        src={project.image}
                        alt={`${project.brand} ${project.cardTitle}`}
                        className="portfolio-project-card__img"
                        loading="lazy"
                        decoding="async"
                      />

                      <div className="portfolio-project-card__overlay" aria-hidden="true" />

                      <div className="portfolio-project-card__info">
                        <span className="portfolio-project-card__brand">
                          {project.brand}
                        </span>
                        <h3 className="portfolio-project-card__title">
                          {project.cardTitle}
                        </h3>
                      </div>

                      <div className="portfolio-project-card__btn">
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
        )}

        {/* =====================================================
            3. CASE STUDY FRAMEWORK SECTION (THE CHALLENGE, ETC.)
        ===================================================== */}
        <CaseStudySection />
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <Footer />
    </div>
  );
}

export default Portfolio;
