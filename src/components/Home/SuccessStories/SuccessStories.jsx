import "./SuccessStories.css";

import {
  useEffect,
  useRef,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
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
  const sectionRef = useRef(null);
  const listRef = useRef(null);


  /* =========================================================
     GSAP ANIMATION
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
      gsap.context(() => {

        gsap.from(
          ".home-success__card",
          {
            opacity: 0,
            y: 35,

            duration: 0.7,

            stagger: 0.12,

            ease:
              "power3.out",

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

      }, sectionRef);

    return () => {
      ctx.revert();
    };

  }, []);


  /* =========================================================
     SCROLL LEFT / RIGHT
  ========================================================= */

  const scrollStories = (direction) => {
    const list = listRef.current;

    if (!list) return;

    const firstCard =
      list.querySelector(
        ".home-success__card"
      );

    if (!firstCard) return;

    const cardWidth =
      firstCard.getBoundingClientRect().width;

    const styles =
      window.getComputedStyle(list);

    const gap =
      parseFloat(styles.columnGap) ||
      parseFloat(styles.gap) ||
      20;

    const scrollAmount =
      cardWidth + gap;

    list.scrollBy({
      left:
        direction === "left"
          ? -scrollAmount
          : scrollAmount,

      behavior: "smooth",
    });
  };


  return (
    <section
      id="success-stories"
      className="home-success"
      ref={sectionRef}
      aria-labelledby="success-title"
    >

      <div className="container">


        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="home-success__header">

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


        {/* =====================================================
            CAROUSEL
        ===================================================== */}

        <div className="home-success__carousel">


          {/* LEFT ARROW */}

          <button
            type="button"
            className="
              home-success__nav
              home-success__nav--left
            "
            onClick={() =>
              scrollStories("left")
            }
            aria-label="Previous success stories"
          >
            <FaChevronLeft />
          </button>


          {/* STORIES LIST */}

          <div
            className="home-success__list"
            ref={listRef}
          >

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


                    <div className="home-success__top">

                      <div className="home-success__tags">

                        {project.categories.map(
                          (category) => (

                            <span key={category}>
                              {category}
                            </span>

                          )
                        )}

                      </div>


                      <span className="home-success__year">
                        {project.year}
                      </span>

                    </div>


                    <div className="home-success__project-copy">

                      <span className="home-success__brand">
                        {project.brand}
                      </span>


                      <h3>
                        {project.cardTitle}
                      </h3>

                    </div>


                    <div className="home-success__view-project">

                      View Project

                      <span>
                        <FaArrowRight />
                      </span>

                    </div>

                  </Link>

                </article>

              )
            )}

          </div>


          {/* RIGHT ARROW */}

          <button
            type="button"
            className="
              home-success__nav
              home-success__nav--right
            "
            onClick={() =>
              scrollStories("right")
            }
            aria-label="Next success stories"
          >
            <FaChevronRight />
          </button>


        </div>

      </div>

    </section>
  );
}


export default SuccessStories;