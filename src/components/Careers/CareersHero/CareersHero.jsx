import "./CareersHero.css";

import {
  lazy,
  Suspense,
  useEffect,
  useRef,
} from "react";

import { Link } from "react-router-dom";

import gsap from "gsap";

import { FaArrowRight } from "react-icons/fa";

import {
  careersHero,
} from "../../../assets/images/Careers/hero";


const CareersCanvas = lazy(
  () => import("./CareersCanvas")
);


function CareersHero() {
  const heroRef = useRef(null);


  useEffect(() => {
    if (!heroRef.current) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;


    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();


      /* ===============================================
         FADE ONLY
         NO X / Y / SCALE
      =============================================== */

      timeline
        .from(
          ".careers-page-hero__breadcrumb",
          {
            opacity: 0,
            duration: 0.45,
            ease: "power2.out",
            clearProps: "opacity",
          }
        )

        .from(
          ".careers-page-hero__title",
          {
            opacity: 0,
            duration: 0.55,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.2"
        )

        .from(
          ".careers-page-hero__line",
          {
            opacity: 0,
            duration: 0.35,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.2"
        )

        .from(
          ".careers-page-hero__description",
          {
            opacity: 0,
            duration: 0.45,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.15"
        )

        .from(
          ".careers-page-hero__button",
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.15"
        )

        .from(
          ".careers-page-hero__visual",
          {
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.35"
        );

    }, heroRef);


    return () => ctx.revert();

  }, []);


  const scrollToPositions = () => {
    const section =
      document.getElementById("open-positions");

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  return (
    <section
      className="careers-page-hero"
      ref={heroRef}
      aria-labelledby="careers-page-hero-title"
    >
      <div className="careers-page-hero__container">


        {/* ==========================================
            CONTENT
        ========================================== */}

        <div className="careers-page-hero__content">

          <nav
            className="careers-page-hero__breadcrumb"
            aria-label="Breadcrumb"
          >
            <Link to="/">
              Home
            </Link>

            <span aria-hidden="true">
              ›
            </span>

            <span aria-current="page">
              Careers
            </span>
          </nav>


          <h1
            id="careers-page-hero-title"
            className="careers-page-hero__title"
          >
            Build Your Future

            <span>
              With DGATE
            </span>
          </h1>


          <div
            className="careers-page-hero__line"
            aria-hidden="true"
          />


          <p className="careers-page-hero__description">
            At DGATE, we believe our people are our
            greatest strength. Join a team that inspires
            you to innovate, grow and make a meaningful
            impact.
          </p>


          <button
            type="button"
            className="careers-page-hero__button"
            onClick={scrollToPositions}
          >
            <span>
              Explore Opportunities
            </span>

            <FaArrowRight aria-hidden="true" />
          </button>

        </div>


        {/* ==========================================
            VISUAL
        ========================================== */}

        <div className="careers-page-hero__visual">

          <img
            src={careersHero}
            alt="DGATE team collaborating at work"
            className="careers-page-hero__image"
          />


          <div
            className="careers-page-hero__overlay"
            aria-hidden="true"
          />


          <Suspense fallback={null}>
            <CareersCanvas />
          </Suspense>

        </div>

      </div>
    </section>
  );
}


export default CareersHero;