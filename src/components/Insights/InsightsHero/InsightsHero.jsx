import "./InsightsHero.css";

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
  insightsHero,
} from "../../../assets/images/Insights/hero";


const InsightsCanvas = lazy(
  () => import("./InsightsCanvas")
);


function InsightsHero() {
  const heroRef = useRef(null);


  /* =========================================================
     HERO ANIMATION
     FADE ONLY
  ========================================================= */

  useEffect(() => {
    if (!heroRef.current) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;


    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();


      timeline
        .from(
          ".insights-page-hero__breadcrumb",
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
            clearProps: "opacity",
          }
        )

        .from(
          ".insights-page-hero__title",
          {
            opacity: 0,
            duration: 0.55,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.15"
        )

        .from(
          ".insights-page-hero__line",
          {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.2"
        )

        .from(
          ".insights-page-hero__description",
          {
            opacity: 0,
            duration: 0.45,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.1"
        )

        .from(
          ".insights-page-hero__button",
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.15"
        )

        .from(
          ".insights-page-hero__visual",
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


  /* =========================================================
     SCROLL TO FEATURED ARTICLE
  ========================================================= */

  const handleExploreInsights = () => {
    const featuredSection =
      document.getElementById(
        "featured-article"
      );

    if (!featuredSection) return;

    featuredSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  return (
    <section
      className="insights-page-hero"
      ref={heroRef}
      aria-labelledby="insights-page-hero-title"
    >
      <div className="insights-page-hero__container">


        {/* ==========================================
            LEFT CONTENT
        ========================================== */}

        <div className="insights-page-hero__content">

          <nav
            className="insights-page-hero__breadcrumb"
            aria-label="Breadcrumb"
          >
            <Link to="/">
              Home
            </Link>

            <span aria-hidden="true">
              ›
            </span>

            <span aria-current="page">
              Insights
            </span>
          </nav>


          <h1
            id="insights-page-hero-title"
            className="insights-page-hero__title"
          >
            Insights that{" "}

            <span>
              Inspire
            </span>{" "}

            Innovation
          </h1>


          <div
            className="insights-page-hero__line"
            aria-hidden="true"
          />


          <p className="insights-page-hero__description">
            Stay updated with the latest trends,
            insights and expert perspectives from
            the world of engineering and technology.
          </p>


          <button
            type="button"
            className="insights-page-hero__button"
            onClick={handleExploreInsights}
          >
            <span>
              Explore Insights
            </span>

            <FaArrowRight aria-hidden="true" />
          </button>

        </div>


        {/* ==========================================
            RIGHT VISUAL
        ========================================== */}

        <div className="insights-page-hero__visual">

          <img
            src={insightsHero}
            alt="DGATE engineering and technology insights"
            className="insights-page-hero__image"
          />


          <div
            className="insights-page-hero__overlay"
            aria-hidden="true"
          />


          <Suspense fallback={null}>
            <InsightsCanvas />
          </Suspense>

        </div>

      </div>
    </section>
  );
}


export default InsightsHero;