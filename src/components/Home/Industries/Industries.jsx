import "./Industries.css";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import realestate
  from "../../../assets/images/home/industries/realestate.png";

import healthcare
  from "../../../assets/images/home/industries/healthcare.png";

import fmcg
  from "../../../assets/images/home/industries/fmcg.png";

import banking
  from "../../../assets/images/home/industries/banking.png";

import retail
  from "../../../assets/images/home/industries/retail.png";

import telecom
  from "../../../assets/images/home/industries/telecom.png";


/* =========================================================
   INDUSTRIES DATA
========================================================= */

const industries = [
  {
    id: "real-estate",
    title: "Real Estate",
    image: realestate,
  },

  {
    id: "healthcare",
    title: "Healthcare",
    image: healthcare,
  },

  {
    id: "fmcg",
    title: "FMCG",
    image: fmcg,
  },

  {
    id: "banking",
    title: "Banking & Finance",
    image: banking,
  },

  {
    id: "retail",
    title: "Retail & E-Commerce",
    image: retail,
  },

  {
    id: "telecom",
    title: "Telecom",
    image: telecom,
  },
];


/* =========================================================
   COMPONENT
========================================================= */

function Industries() {

  const railRef = useRef(null);

  const [
    canScrollLeft,
    setCanScrollLeft,
  ] = useState(false);

  const [
    canScrollRight,
    setCanScrollRight,
  ] = useState(true);


  /* =========================================================
     REDUCED MOTION
  ========================================================= */

  const prefersReducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


  /* =========================================================
     UPDATE SCROLL STATE
  ========================================================= */

  const updateScrollState = () => {

    const rail =
      railRef.current;

    if (!rail) {
      return;
    }

    const maxScroll =
      rail.scrollWidth -
      rail.clientWidth;

    setCanScrollLeft(
      rail.scrollLeft > 2
    );

    setCanScrollRight(
      rail.scrollLeft <
        maxScroll - 2
    );
  };


  /* =========================================================
     SCROLL LISTENERS
  ========================================================= */

  useEffect(() => {

    const rail =
      railRef.current;

    if (!rail) {
      return undefined;
    }

    updateScrollState();

    rail.addEventListener(
      "scroll",
      updateScrollState,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      updateScrollState
    );

    return () => {

      rail.removeEventListener(
        "scroll",
        updateScrollState
      );

      window.removeEventListener(
        "resize",
        updateScrollState
      );
    };

  }, []);


  /* =========================================================
     SCROLL INDUSTRIES
  ========================================================= */

  const scrollIndustries = (
    direction
  ) => {

    const rail =
      railRef.current;

    if (!rail) {
      return;
    }

    const card =
      rail.querySelector(
        ".home-industries__card"
      );

    if (!card) {
      return;
    }

    const cardWidth =
      card.getBoundingClientRect()
        .width;

    const railStyles =
      getComputedStyle(rail);

    const gap =
      parseFloat(
        railStyles.columnGap ||
        railStyles.gap
      ) || 20;

    rail.scrollBy({
      left:
        direction *
        (cardWidth + gap),

      behavior:
        prefersReducedMotion()
          ? "auto"
          : "smooth",
    });
  };


  /* =========================================================
     JSX
  ========================================================= */

  return (

    <section
      className="home-industries"
    >

      <div
        className="home-industries__container"
      >


        {/* ===============================================
            HEADER
        =============================================== */}

        <div
          className="home-industries__header"
        >

          <div
            className="home-industries__heading"
          >

            <span
              className="home-industries__eyebrow"
            >
              INDUSTRIES
            </span>


            <h2>
              Industries We Serve
            </h2>


            <p>
              Tailored digital solutions
              designed for the unique
              challenges of every industry.
            </p>

          </div>


          <Link
            to="/industries#industries-grid"
            className="home-industries__view-all"
          >

            VIEW ALL INDUSTRIES

            <FaArrowRight />

          </Link>

        </div>


        {/* ===============================================
            SLIDER
        =============================================== */}

        <div
          className="home-industries__slider"
        >


          {/* LEFT NAVIGATION */}

          <button
            type="button"
            className="
              home-industries__nav
              home-industries__nav--left
            "
            onClick={() =>
              scrollIndustries(-1)
            }
            disabled={
              !canScrollLeft
            }
            aria-label="Scroll industries left"
          >

            <FaArrowLeft />

          </button>


          {/* =============================================
              INDUSTRY CARDS
          ============================================= */}

          <div
            ref={railRef}
            className="home-industries__rail"
          >

            {industries.map(
              (industry) => (

                <Link
                  key={industry.id}
                  to={`/industries/${industry.id}`}
                  className="home-industries__card"
                >

                  <img
                    src={industry.image}
                    alt={`${industry.title} industry`}
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                  />


                  <div
                    className="home-industries__overlay"
                    aria-hidden="true"
                  />


                  <div
                    className="home-industries__card-content"
                  >

                    <span>
                      INDUSTRY
                    </span>


                    <div
                      className="home-industries__card-bottom"
                    >

                      <h3>
                        {industry.title}
                      </h3>

                    </div>

                  </div>

                </Link>

              )
            )}

          </div>


          {/* RIGHT NAVIGATION */}

          <button
            type="button"
            className="
              home-industries__nav
              home-industries__nav--right
            "
            onClick={() =>
              scrollIndustries(1)
            }
            disabled={
              !canScrollRight
            }
            aria-label="Scroll industries right"
          >

            <FaArrowRight />

          </button>


        </div>

      </div>

    </section>
  );
}


export default Industries;