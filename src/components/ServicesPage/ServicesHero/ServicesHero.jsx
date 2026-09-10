import "./ServicesHero.css";

import {
  lazy,
  Suspense,
  useEffect,
  useRef,
} from "react";

import { Link } from "react-router-dom";

import gsap from "gsap";

import {
  servicesHeroBg,
} from "../../../assets/images/Services/hero";

const ServicesCanvas = lazy(
  () => import("./ServicesCanvas")
);

function ServicesHero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline
        .from(
          ".services-page-hero__breadcrumb",
          {
            x: -25,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          }
        )

        .from(
          ".services-page-hero__title",
          {
            y: 30,
            opacity: 0,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.2"
        )

        .from(
          ".services-page-hero__line",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.4,
          },
          "-=0.25"
        )

        .from(
          ".services-page-hero__text",
          {
            y: 20,
            opacity: 0,
            duration: 0.55,
            ease: "power2.out",
          },
          "-=0.2"
        )

        .from(
          ".services-page-hero__visual",
          {
            x: 40,
            opacity: 0,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="services-page-hero"
      ref={sectionRef}
      aria-labelledby="services-page-hero-title"
    >
      <div className="services-page-hero__container">

        {/* CONTENT */}
        <div className="services-page-hero__content">

          <nav
            className="services-page-hero__breadcrumb"
            aria-label="Breadcrumb"
          >
            <Link to="/">
              Home
            </Link>

            <span aria-hidden="true">
              ›
            </span>

            <span aria-current="page">
              Services
            </span>
          </nav>

          <h3
            id="services-page-hero-title"
            className="services-page-hero__title"
          >
            DGATE IS 
            <br /> 
            Digital Marketing Services in Bangalore 
          </h3>

          <div
            className="services-page-hero__line"
            aria-hidden="true"
          />

          <p className="services-page-hero__text">
            Branding, web & ecommerce development, SEO & analytics, and
            AI automation — all in one Bangalore agency. 250+ brands scaled.
          </p>

        </div>


        {/* VISUAL */}
        <div className="services-page-hero__visual">

          <img
            src={servicesHeroBg}
            alt="Engineering and digital technology solutions"
            className="services-page-hero__image"
          />

          <div
            className="services-page-hero__overlay"
            aria-hidden="true"
          />

          <Suspense fallback={null}>
            <ServicesCanvas />
          </Suspense>

        </div>

      </div>
    </section>
  );
}

export default ServicesHero;