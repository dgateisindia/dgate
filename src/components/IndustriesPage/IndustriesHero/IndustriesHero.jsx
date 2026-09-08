import "./IndustriesHero.css";

import {
  lazy,
  Suspense,
  useEffect,
  useRef,
} from "react";

import { Link } from "react-router-dom";

import gsap from "gsap";

import {
  industriesHeroBg,
} from "../../../assets/images/Industries/hero";

const IndustriesCanvas = lazy(
  () => import("./IndustriesCanvas")
);

function IndustriesHero() {
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
          ".industries-page-hero__breadcrumb",
          {
            opacity: 0,
            duration: 0.45,
            ease: "power2.out",
            clearProps: "opacity",
          }
        )

        .from(
          ".industries-page-hero__title",
          {
            opacity: 0,
            duration: 0.55,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.2"
        )

        .from(
          ".industries-page-hero__line",
          {
            opacity: 0,
            duration: 0.35,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.2"
        )

        .from(
          ".industries-page-hero__text",
          {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.2"
        )

        .from(
          ".industries-page-hero__visual",
          {
            opacity: 0,
            duration: 0.65,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.35"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="industries-page-hero"
      ref={heroRef}
      aria-labelledby="industries-page-hero-title"
    >
      <div className="industries-page-hero__container">

        {/* CONTENT */}
        <div className="industries-page-hero__content">

          <nav
            className="industries-page-hero__breadcrumb"
            aria-label="Breadcrumb"
          >
            <Link to="/">
              Home
            </Link>

            <span aria-hidden="true">
              ›
            </span>

            <span aria-current="page">
              Industries
            </span>
          </nav>

          <h1
            id="industries-page-hero-title"
            className="industries-page-hero__title"
          >
            Empowering

            <span>
              Industries Worldwide
            </span>
          </h1>

          <div
            className="industries-page-hero__line"
            aria-hidden="true"
          />

          <p className="industries-page-hero__text">
            We partner with organizations across diverse
            industries to deliver innovative engineering
            solutions that accelerate digital transformation,
            improve operational efficiency, and create
            sustainable business value.
          </p>

        </div>


        {/* VISUAL */}
        <div className="industries-page-hero__visual">

          <img
            src={industriesHeroBg}
            alt="Digital engineering across global industries"
            className="industries-page-hero__image"
          />

          <div
            className="industries-page-hero__overlay"
            aria-hidden="true"
          />

          <Suspense fallback={null}>
            <div className="industries-page-hero__canvas">
              <IndustriesCanvas />
            </div>
          </Suspense>

        </div>

      </div>
    </section>
  );
}

export default IndustriesHero;