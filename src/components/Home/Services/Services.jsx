import "./Services.css";

import {
  useEffect,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";

import {
  FaLayerGroup,
  FaRocket,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import ThinkLightbulbIcon from "../../Shared/ThinkLightbulbIcon";


/* =========================================================
   SERVICES DATA
========================================================= */

const services = [

  {
    id: "branding-creative",
    Icon: ThinkLightbulbIcon,
    category: "IDEATE",
    title: "THINK",
    subheading: "Shape the idea into a clear direction worth pursuing.",
    ctaText: "EXPLORE THINK",
    ctaLink: "/services/think",

    items: [
      "Brand strategy & positioning",
      "Marketing & campaign strategy",
      "Content & communication strategy",
      "Audience & market insight",
      "Creative direction",
    ],

  },

  {
    id: "app-development",
    Icon: FaLayerGroup,
    category: "INNOVATE",
    title: "BUILD",
    subheading: "Turn the idea into experiences people notice and remember.",
    ctaText: "EXPLORE BUILD",
    ctaLink: "/services/build",

    items: [
      "Brand identity & visual systems",
      "Campaign creative",
      "Content creation",
      "Websites & digital experiences",
      "UI/UX",
      "Video & motion",
    ],

  },

  {
    id: "web-development",
    Icon: FaRocket,
    category: "INITIATE",
    title: "SOLVE",
    subheading: "Turn attention into powerful, sustained business momentum.",
    ctaText: "EXPLORE SOLVE",
    ctaLink: "/services/solve",

    items: [
      "Performance marketing",
      "SEO & search",
      "Social media campaigns",
      "Lead generation",
      "Conversion optimisation",
      "Marketing automation & analytics",
    ],

  },
];



/* =========================================================
   COMPONENT
========================================================= */

function Services() {
  const servicesTrackRef =
    useRef(null);


  const [canScrollLeft, setCanScrollLeft] =
    useState(false);


  const [canScrollRight, setCanScrollRight] =
    useState(true);


  /* =========================================================
     UPDATE ARROW STATES
  ========================================================= */

  const updateScrollState = () => {
    const track =
      servicesTrackRef.current;


    if (!track) {
      return;
    }


    const maxScroll =
      track.scrollWidth -
      track.clientWidth;


    const tolerance = 4;


    setCanScrollLeft(
      track.scrollLeft > tolerance
    );


    setCanScrollRight(
      track.scrollLeft <
        maxScroll - tolerance
    );
  };


  /* =========================================================
     INITIALIZE SCROLL STATE
  ========================================================= */

  useEffect(() => {
    const track =
      servicesTrackRef.current;


    if (!track) {
      return undefined;
    }


    const handleScroll = () => {
      updateScrollState();
    };


    const handleResize = () => {
      updateScrollState();
    };


    /*
     * Check after browser layout is complete.
     */
    const frame =
      window.requestAnimationFrame(
        updateScrollState
      );


    track.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );


    window.addEventListener(
      "resize",
      handleResize
    );


    /*
     * ResizeObserver also catches container/card
     * size changes without relying only on window resize.
     */
    const resizeObserver =
      new ResizeObserver(
        updateScrollState
      );


    resizeObserver.observe(track);


    return () => {
      window.cancelAnimationFrame(
        frame
      );


      track.removeEventListener(
        "scroll",
        handleScroll
      );


      window.removeEventListener(
        "resize",
        handleResize
      );


      resizeObserver.disconnect();
    };

  }, []);


  /* =========================================================
     SCROLL ONE CARD LEFT / RIGHT
  ========================================================= */

  const scrollServices = (direction) => {
    const track =
      servicesTrackRef.current;


    if (!track) {
      return;
    }


    const card =
      track.querySelector(
        ".home-services__card"
      );


    if (!card) {
      return;
    }


    const cardWidth =
      card.getBoundingClientRect().width;


    const trackStyle =
      window.getComputedStyle(track);


    const gap =
      parseFloat(
        trackStyle.columnGap ||
        trackStyle.gap ||
        "18"
      );


    const distance =
      cardWidth + gap;


    track.scrollBy({
      left:
        direction === "next"
          ? distance
          : -distance,

      behavior:
        "smooth",
    });
  };


  /* =========================================================
     KEYBOARD SUPPORT
  ========================================================= */

  const handleKeyDown = (event) => {
    if (
      event.key === "ArrowRight"
    ) {
      event.preventDefault();

      scrollServices("next");
    }


    if (
      event.key === "ArrowLeft"
    ) {
      event.preventDefault();

      scrollServices("previous");
    }
  };


  return (
    <section
      id="services"
      className="home-services"
      aria-labelledby="home-services-title"
    >

      <div className="container">


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="home-services__header">

          <div className="home-services__header-copy">

            <span className="home-services__eyebrow">

              Our Role

            </span>


            <h2
              id="home-services-title"
              className="home-services__title"
            >
              From business ambition to market impact.
            </h2>

          </div>


          <p className="home-services__intro">

            D-GATE brings strategy, brand, creative, digital and growth thinking into one connected system. We work across the moments that shape perception, consideration and action-so every part of the brand moves in the same direction.

          </p>

        </div>


        <div
          className="home-services__title-line"
          aria-hidden="true"
        />


        {/* =================================================
            CAROUSEL
        ================================================= */}

        <div className="home-services__slider-shell">


          {/* =================================================
              LEFT ARROW
          ================================================= */}

          <button
            type="button"
            className="
              home-services__slider-arrow
              home-services__slider-arrow--left
            "
            onClick={() =>
              scrollServices(
                "previous"
              )
            }
            disabled={!canScrollLeft}
            aria-label="Previous service"
          >

            <FaChevronLeft
              aria-hidden="true"
            />

          </button>


          {/* =================================================
              SERVICES TRACK
          ================================================= */}

          <div
            ref={servicesTrackRef}
            className="home-services__grid"
            tabIndex="0"
            onKeyDown={handleKeyDown}
            aria-label="DGATE services carousel"
          >

            {services.map(
              (service) => {

                const Icon =
                  service.Icon;
                const isSolveCard =
                  service.id === "web-development";

                return (

                  <article
                    className={`home-services__card home-services__card--${service.id}`}
                    key={service.id}
                  >

                    {/* =====================================
                        HEADER: ICON ON LEFT, CATEGORY+ARROW & TITLE ON RIGHT
                    ===================================== */}

                    <div className="home-services__card-header">

                      <div
                        className="home-services__icon"
                        aria-hidden="true"
                      >

                        <Icon />

                      </div>


                      <div className="home-services__heading">
                        {service.category && (
                          <div className="home-services__category-row">
                            <span className="home-services__category">
                              {service.category}
                            </span>
                            <span
                              className="home-services__category-arrow"
                              aria-hidden="true"
                            >
                              <svg
                                width="42"
                                height="12"
                                viewBox="0 0 42 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <defs>
                                  <linearGradient
                                    id={`arrow-fade-${service.id}`}
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="0%"
                                  >
                                    <stop
                                      offset="0%"
                                      stopColor="#fdb913"
                                      stopOpacity="0"
                                    />
                                    <stop
                                      offset="25%"
                                      stopColor="#fdb913"
                                      stopOpacity="0.25"
                                    />
                                    <stop
                                      offset="65%"
                                      stopColor="#fdb913"
                                      stopOpacity="0.9"
                                    />
                                    <stop
                                      offset="80%"
                                      stopColor="#fdb913"
                                      stopOpacity="1"
                                    />
                                    <stop
                                      offset="100%"
                                      stopColor="#fdb913"
                                      stopOpacity="1"
                                    />
                                  </linearGradient>
                                </defs>
                                <path
                                  d="M0 6H38.5M34 1.4L38.5 6L34 10.6"
                                  stroke={`url(#arrow-fade-${service.id})`}
                                  strokeWidth="1.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </div>
                        )}
                        <h3 className="home-services__card-title">
                          {service.title}
                        </h3>
                      </div>

                    </div>


                    {/* =====================================
                        SUBHEADING OF TITLE
                    ===================================== */}

                    {service.subheading && (
                      <h4 className="home-services__subheading">
                        {service.subheading}
                      </h4>
                    )}


                    {/* =====================================
                        SERVICES LIST
                    ===================================== */}

                    <ul className="home-services__list">

                      {service.items.map(
                        (item) => (

                          <li key={item}>

                            <span
                              className="home-services__bullet"
                              aria-hidden="true"
                            />


                            <span>
                              {item}
                            </span>

                          </li>

                        )
                      )}

                    </ul>


                    {/* =====================================
                        BOTTOM ACTION / EXPLORE LINK
                    ===================================== */}

                    <div className="home-services__action">
                      <Link
                        to={service.ctaLink}
                        className="home-services__cta-btn"
                      >
                        <span className="home-services__cta-text">
                          {service.ctaText}
                        </span>
                        <span
                          className="home-services__cta-circle"
                          aria-hidden="true"
                        >
                          <FaChevronRight />
                        </span>
                      </Link>
                    </div>


                    {/* =====================================
                        CORNER GLOW / DECORATIVE WATERMARK
                    ===================================== */}

                    <div
                      className={`home-services__corner-glow ${
                        isSolveCard
                          ? "home-services__corner-glow--solve"
                          : ""
                      }`}
                      aria-hidden="true"
                    >
                      {isSolveCard && (
                        <svg
                          className="home-services__corner-svg"
                          viewBox="0 0 140 140"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="140"
                            cy="140"
                            r="125"
                            stroke="#fdb913"
                            strokeWidth="1.2"
                            strokeOpacity="0.25"
                          />
                          <circle
                            cx="140"
                            cy="140"
                            r="85"
                            stroke="#fdb913"
                            strokeWidth="1.5"
                            strokeOpacity="0.32"
                          />
                          <circle
                            cx="140"
                            cy="140"
                            r="45"
                            fill="#fdb913"
                            fillOpacity="0.4"
                          />
                        </svg>
                      )}
                    </div>

                  </article>

                );

              }
            )}

          </div>


          {/* =================================================
              RIGHT ARROW
          ================================================= */}

          <button
            type="button"
            className="
              home-services__slider-arrow
              home-services__slider-arrow--right
            "
            onClick={() =>
              scrollServices(
                "next"
              )
            }
            disabled={!canScrollRight}
            aria-label="Next service"
          >

            <FaChevronRight
              aria-hidden="true"
            />

          </button>

        </div>


        {/* =================================================
            CAROUSEL FOOTER
        ================================================= */}

        <div className="home-services__carousel-footer">

          <div
            className="home-services__progress"
            aria-hidden="true"
          >

            <span
              className={
                canScrollLeft
                  ? "active"
                  : ""
              }
            />

            <span
              className={
                canScrollRight
                  ? "active"
                  : ""
              }
            />

          </div>

        </div>

      </div>

    </section>
  );
}


export default Services;