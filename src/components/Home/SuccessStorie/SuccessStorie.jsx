import "./SuccessStorie.css";

import {
  useEffect,
  useRef,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  FaArrowRight,
} from "react-icons/fa";

import gsap from "gsap";

import {
  ScrollTrigger,
} from "gsap/ScrollTrigger";

import {
  successStories,
} from "./successStoriesData";


gsap.registerPlugin(
  ScrollTrigger
);


function SuccessStories() {
  const sectionRef =
    useRef(null);


  /* =========================================================
     SCROLL ANIMATION
  ========================================================= */

  useEffect(() => {
    if (!sectionRef.current) {
      return undefined;
    }


    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;


    if (reduceMotion) {
      return undefined;
    }


    const ctx =
      gsap.context(
        () => {

          gsap.fromTo(
            ".home-success__card",

            {
              opacity: 0,
              y: 35,
            },

            {
              opacity: 1,
              y: 0,

              duration: 0.7,

              stagger: 0.1,

              ease:
                "power3.out",

              clearProps:
                "opacity,transform",

              scrollTrigger: {
                trigger:
                  sectionRef.current,

                start:
                  "top 80%",

                once:
                  true,
              },
            }
          );

        },

        sectionRef
      );


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

      <div className="container">


        {/* =================================================
            HEADER
        ================================================= */}

        <header className="home-success__header">

          <span className="home-success__eyebrow">
            OUR WORK
          </span>


          <h2
            id="success-title"
            className="home-success__title"
          >

            Digital{" "}

            <span>
              Success Stories
            </span>

          </h2>


          <p>
            Explore selected brand,
            development and growth projects
            created around real business
            objectives.
          </p>

        </header>


        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <div className="home-success__list">

          {successStories.map(
            (project) => (

              <article
                className="home-success__card"
                key={project.id}
              >

                <Link
                  to={`/success-stories/${project.slug}`}
                  className="home-success__card-link"
                  aria-label={`View ${project.brand} case study`}
                >


                  {/* =======================================
                      IMAGE
                  ======================================= */}

                  <img
                    src={project.image}
                    alt={`${project.brand} ${project.cardTitle}`}
                    className="home-success__image"
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                  />


                  {/* =======================================
                      DARK OVERLAY
                  ======================================= */}

                  <div
                    className="home-success__overlay"
                    aria-hidden="true"
                  />


                  {/* =======================================
                      PROJECT TITLE
                  ======================================= */}

                  <div className="home-success__project-copy">

                    <span className="home-success__brand">
                      {project.brand}
                    </span>


                    <h3>
                      {project.cardTitle}
                    </h3>

                  </div>


                  {/* =======================================
                      VIEW PROJECT
                  ======================================= */}

                  <div className="home-success__view-project">

                    <span className="home-success__view-text">
                      View Project
                    </span>


                    <span className="home-success__view-icon">
                      <FaArrowRight />
                    </span>

                  </div>

                </Link>

              </article>

            )
          )}

        </div>

      </div>

    </section>
  );
}


export default SuccessStories;