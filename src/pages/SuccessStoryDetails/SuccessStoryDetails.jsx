import "./SuccessStoryDetails.css";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Link,
  Navigate,
  useParams,
} from "react-router-dom";

import {
  FaCheckCircle,
  FaChevronDown,
} from "react-icons/fa";

import Navbar from "../../components/Home/Navbar/Navbar";
import Footer from "../../components/Home/Footer/Footer";

import {
  successStories,
} from "../../components/Home/SuccessStories/successStoriesData";


function SuccessStoryDetails() {
  const { slug } = useParams();

  const [openFaq, setOpenFaq] =
    useState(0);


  /* =========================================================
     CURRENT PROJECT
  ========================================================= */

  const projectIndex =
    useMemo(
      () =>
        successStories.findIndex(
          (story) =>
            story.slug === slug
        ),
      [slug]
    );


  const project =
    projectIndex >= 0
      ? successStories[projectIndex]
      : null;


  /* =========================================================
     PREVIOUS PROJECT
  ========================================================= */

  const previousProject =
    projectIndex >= 0
      ? successStories[
          (
            projectIndex -
            1 +
            successStories.length
          ) %
            successStories.length
        ]
      : null;


  /* =========================================================
     NEXT PROJECT
  ========================================================= */

  const nextProject =
    projectIndex >= 0
      ? successStories[
          (
            projectIndex +
            1
          ) %
            successStories.length
        ]
      : null;


  /* =========================================================
     ROUTE CHANGE
  ========================================================= */

  useEffect(() => {
    setOpenFaq(0);

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [slug]);


  /* =========================================================
     SEO
  ========================================================= */

  useEffect(() => {
    if (!project) {
      return;
    }


    document.title =
      `${project.brand} Case Study | DGATE Integrated Services`;


    const description =
      `${project.brand} case study by DGATE Integrated Services. ${project.heroDescription}`;


    let meta =
      document.querySelector(
        'meta[name="description"]'
      );


    if (!meta) {
      meta =
        document.createElement(
          "meta"
        );

      meta.setAttribute(
        "name",
        "description"
      );

      document.head.appendChild(
        meta
      );
    }


    meta.setAttribute(
      "content",
      description
    );


    let canonical =
      document.querySelector(
        'link[rel="canonical"]'
      );


    if (!canonical) {
      canonical =
        document.createElement(
          "link"
        );

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
      `${window.location.origin}/success-stories/${project.slug}`
    );

  }, [project]);


  /* =========================================================
     INVALID PROJECT
  ========================================================= */

  if (!project) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }


  /* =========================================================
     PROJECT IMAGES
  ========================================================= */

  const logoImage =
    project.images?.logo ||
    project.image;


  const heroImage =
    project.images?.hero ||
    project.image;


  const brandAssetsImage =
    project.images?.brandAssets ||
    project.image;


  const galleryOneImage =
    project.images?.galleryOne ||
    project.image;


  const galleryTwoImage =
    project.images?.galleryTwo ||
    project.image;


  const largeShowcaseImage =
    project.images?.largeShowcase ||
    project.image;


  /* =========================================================
     THEME
  ========================================================= */

  const theme = {
    "--case-background":
      project.theme.background,

    "--case-accent":
      project.theme.accent,
  };


  return (
    <>
      <Navbar />


      <main
        className="case-study"
        style={theme}
      >

        {/* =================================================
            INTRO
        ================================================= */}

        <section className="case-study__intro">

          <div
            className="case-study__shape"
            aria-hidden="true"
          />


          <div className="case-study__container">

            <div className="case-study__intro-grid">

              <div className="case-study__intro-heading">

                <div
                  className="case-study__sun"
                  aria-hidden="true"
                />


                <h1>
                  {project.heroTitle}
                </h1>

              </div>


              <p className="case-study__intro-description">
                {project.heroDescription}
              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            BREADCRUMB
        ================================================= */}

        <div className="case-study__breadcrumb-section">

          <div className="case-study__container">

            <nav
              className="case-study__breadcrumb"
              aria-label="Breadcrumb"
            >

              <Link to="/">
                Home
              </Link>


              <span>
                ●
              </span>


              <strong>
                {project.brand}
              </strong>

            </nav>

          </div>

        </div>


        {/* =================================================
            HERO IMAGE
        ================================================= */}

        <section
          className="case-study__visual-section"
          style={{
            background:
              project.theme.background,
          }}
        >

          <div className="case-study__visual">

            <a
              href={heroImage}
              className="case-study__image-anchor"
              target="_blank"
              rel="noopener noreferrer"
            >

              <img
                src={heroImage}
                alt={`${project.brand} project`}
                loading="eager"
                decoding="async"
              />

            </a>

          </div>


          

        </section>


        {/* =================================================
            SETTING THE STAGE
        ================================================= */}

        <section
          id="project-story"
          className="case-study__story"
        >

          <div className="case-study__content-container">

            <h2 className="case-study__heading">
              Setting the Stage
            </h2>


            <div className="case-study__stage-grid">

              <div>

                {
                  project.stage.paragraphs.map(
                    (
                      paragraph,
                      index
                    ) => (

                      <p key={index}>
                        {paragraph}
                      </p>

                    )
                  )
                }

              </div>


              <div>

                <h3>
                  Challenge We Faced.
                </h3>


                <p>
                  {
                    project
                      .stage
                      .challenge
                  }
                </p>

              </div>

            </div>


            {/* =================================================
                APPROACH
            ================================================= */}

            <div className="case-study__approach-grid">

              <div>

                <h3>
                  Our Approach & Process
                </h3>


                <div className="case-study__approach-list">

                  {
                    project.approach.map(
                      (step) => (

                        <div
                          className="case-study__approach-item"
                          key={step.title}
                        >

                          <FaCheckCircle />


                          <p>

                            <strong>
                              {step.title}
                            </strong>

                            {" — "}

                            {step.description}

                          </p>

                        </div>

                      )
                    )
                  }

                </div>

              </div>


              {/* =================================================
                  BRAND ASSETS
              ================================================= */}

              <div className="case-study__brand-assets">

                <div className="case-study__asset-title">

                  <span />

                  Brand Assets

                  <span />

                </div>


                <div className="case-study__asset-box">


                  {/* =============================================
                      BRAND ASSETS IMAGE
                  ============================================= */}

                  <a
                    href={brandAssetsImage}
                    className="case-study__image-anchor"
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    <img
                      src={brandAssetsImage}
                      alt={`${project.brand} brand assets`}
                      loading="lazy"
                      decoding="async"
                    />

                  </a>


                  <div className="case-study__asset-info">


                    {/* ===========================================
                        PROJECT LOGO

                        Kanaja = Kanaja logo
                        Hexad = Hexad logo
                        Uniheal = Uniheal logo
                        Hiyath = Hiyath logo
                    =========================================== */}

                    <div className="case-study__project-logo">

                      <img
                        src={logoImage}
                        alt={`${project.brand} logo`}
                        loading="lazy"
                        decoding="async"
                      />

                    </div>


                    <strong>
                      {project.brand}
                    </strong>


                    <span>
                      Aa Bb Cc Dd Ee Ff Gg
                    </span>


                    <div className="case-study__asset-colors">

                      <i />

                      <i />

                      <i />

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            OUTCOME
        ================================================= */}

        <section className="case-study__outcome">

          <div className="case-study__content-container">

            <h2 className="case-study__heading">
              Project Outcome
            </h2>


            <div className="case-study__outcome-grid">

              <p>
                {
                  project
                    .outcome
                    .description
                }
              </p>


              <div className="case-study__metrics">

                {
                  project.outcome.metrics.map(
                    (metric) => (

                      <article
                        className="case-study__metric"
                        key={metric.label}
                      >

                        <strong>
                          {metric.value}
                        </strong>


                        <span>
                          {metric.label}
                        </span>

                      </article>

                    )
                  )
                }

              </div>

            </div>


            {/* =================================================
                GALLERY
            ================================================= */}

            <div className="case-study__gallery">


              {/* GALLERY IMAGE 1 */}

              <div>

                <a
                  href={galleryOneImage}
                  className="case-study__image-anchor"
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <img
                    src={galleryOneImage}
                    alt={`${project.brand} project presentation`}
                    loading="lazy"
                    decoding="async"
                  />

                </a>

              </div>


              {/* GALLERY IMAGE 2 */}

              <div>

                <a
                  href={galleryTwoImage}
                  className="case-study__image-anchor"
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <img
                    src={galleryTwoImage}
                    alt={`${project.brand} responsive project`}
                    loading="lazy"
                    decoding="async"
                  />

                </a>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            PREVIOUS / NEXT
        ================================================= */}

        <section className="case-study__navigation-section">

          <div className="case-study__content-container">

            <div className="case-study__navigation">


              {/* PREVIOUS */}

              <Link
                to={`/success-stories/${previousProject.slug}`}
                className="case-study__navigation-project"
              >

                <img
                  src={
                    previousProject.images?.logo ||
                    previousProject.image
                  }
                  alt={`${previousProject.brand} logo`}
                  loading="lazy"
                  decoding="async"
                />

                <div>

                  <span>
                    Previous ↗
                  </span>


                  <strong>
                    {previousProject.brand}
                  </strong>


                  <small>
                    {previousProject.cardTitle}
                  </small>

                </div>

              </Link>


              {/* CENTER DOTS */}

              <div
                className="case-study__dots"
                aria-hidden="true"
              >

                {
                  Array.from({
                    length: 9,
                  }).map(
                    (_, index) => (

                      <span key={index} />

                    )
                  )
                }

              </div>


              {/* NEXT */}

              <Link
                to={`/success-stories/${nextProject.slug}`}
                className="
                  case-study__navigation-project
                  case-study__navigation-project--next
                "
              >

                <div>

                  <span>
                    Next ↗
                  </span>


                  <strong>
                    {nextProject.brand}
                  </strong>


                  <small>
                    {nextProject.cardTitle}
                  </small>

                </div>


                <img
                  src={
                    nextProject.images?.logo ||
                    nextProject.image
                  }
                  alt={`${nextProject.brand} logo`}
                  loading="lazy"
                  decoding="async"
                />

              </Link>

            </div>

          </div>

        </section>


        {/* =================================================
            LARGE SHOWCASE
        ================================================= */}

        <section
          className="case-study__large-showcase"
          style={{
            background:
              project.theme.background,
          }}
        >

          <div className="case-study__large-showcase-inner">

            <a
              href={largeShowcaseImage}
              className="case-study__image-anchor"
              target="_blank"
              rel="noopener noreferrer"
            >

              <img
                src={largeShowcaseImage}
                alt={`${project.brand} website project`}
                loading="lazy"
                decoding="async"
              />

            </a>

          </div>

        </section>


        {/* =================================================
            FAQ
        ================================================= */}

        <section className="case-study__faq">

          <div className="case-study__faq-container">

            <div className="case-study__faq-badge">

              <span />

              Project FAQs

            </div>


            <h2>
              {project.faqTitle}
            </h2>


            <div className="case-study__accordion">

              {
                project.faqs.map(
                  (
                    faq,
                    index
                  ) => {

                    const isOpen =
                      openFaq === index;


                    return (

                      <article
                        className={`case-study__faq-item ${
                          isOpen
                            ? "case-study__faq-item--open"
                            : ""
                        }`}
                        key={faq.question}
                      >

                        <button
                          type="button"
                          onClick={() =>
                            setOpenFaq(
                              isOpen
                                ? -1
                                : index
                            )
                          }
                          aria-expanded={isOpen}
                        >

                          <span>
                            {faq.question}
                          </span>


                          <FaChevronDown />

                        </button>


                        <div className="case-study__faq-answer">

                          <div>

                            <p>
                              {faq.answer}
                            </p>

                          </div>

                        </div>

                      </article>

                    );

                  }
                )
              }

            </div>

          </div>

        </section>

      </main>


      <Footer />
    </>
  );
}


export default SuccessStoryDetails;