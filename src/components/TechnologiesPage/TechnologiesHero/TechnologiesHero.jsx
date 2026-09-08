import "./TechnologiesHero.css";

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
  heroBg,
} from "../../../assets/images/Technologies/hero";

const TechnologiesCanvas = lazy(
  () => import("./TechnologiesCanvas")
);

function TechnologiesHero() {
  const heroRef = useRef(null);

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
          ".technologies-page-hero__breadcrumb",
          {
            opacity: 0,
            duration: 0.45,
            ease: "power2.out",
            clearProps: "opacity",
          }
        )

        .from(
          ".technologies-page-hero__title",
          {
            opacity: 0,
            duration: 0.55,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.2"
        )

        .from(
          ".technologies-page-hero__line",
          {
            opacity: 0,
            duration: 0.35,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.2"
        )

        .from(
          ".technologies-page-hero__text",
          {
            opacity: 0,
            duration: 0.45,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.15"
        )

        .from(
          ".technologies-page-hero__buttons",
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.15"
        )

        .from(
          ".technologies-page-hero__visual",
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

  const handleExploreStack = () => {
    const technologySection =
      document.getElementById("technology-stack");

    if (!technologySection) return;

    technologySection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      className="technologies-page-hero"
      ref={heroRef}
      aria-labelledby="technologies-page-hero-title"
    >
      <div className="technologies-page-hero__container">

        <div className="technologies-page-hero__content">

          <nav
            className="technologies-page-hero__breadcrumb"
            aria-label="Breadcrumb"
          >
            <Link to="/">
              Home
            </Link>

            <span aria-hidden="true">
              ›
            </span>

            <span aria-current="page">
              Technologies
            </span>
          </nav>


          <h1
            id="technologies-page-hero-title"
            className="technologies-page-hero__title"
          >
            Technologies

            <span>
              We Leverage
            </span>
          </h1>


          <div
            className="technologies-page-hero__line"
            aria-hidden="true"
          />


          <p className="technologies-page-hero__text">
            We harness modern technologies, cloud-native
            platforms, artificial intelligence, enterprise
            frameworks and intelligent automation to build
            secure, scalable and future-ready digital
            solutions that accelerate business innovation.
          </p>


          <div className="technologies-page-hero__buttons">

            <button
              type="button"
              className="technologies-page-hero__button"
              onClick={handleExploreStack}
            >
              Explore Stack

              <FaArrowRight aria-hidden="true" />
            </button>

          </div>

        </div>


        <div className="technologies-page-hero__visual">

          <img
            src={heroBg}
            alt="Modern technology and digital engineering"
            className="technologies-page-hero__image"
          />

          <div
            className="technologies-page-hero__overlay"
            aria-hidden="true"
          />

          <Suspense fallback={null}>
            <div className="technologies-page-hero__canvas">
              <TechnologiesCanvas />
            </div>
          </Suspense>

        </div>

      </div>
    </section>
  );
}

export default TechnologiesHero;