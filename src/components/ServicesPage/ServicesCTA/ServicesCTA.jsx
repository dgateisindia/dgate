import "./ServicesCTA.css";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaEnvelopeOpenText,
  FaArrowRight,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function ServicesCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          once: true,
        },
      });

      timeline
        .from(".services-page-cta__box", {
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          clearProps: "opacity",
        })

        .from(
          ".services-page-cta__content > *",
          {
            opacity: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.25"
        )

        .from(
          ".services-page-cta__button",
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.15"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="services-page-cta"
      ref={sectionRef}
      aria-labelledby="services-page-cta-title"
    >
      <div className="container">

        <div className="services-page-cta__box">

          <div className="services-page-cta__left">

            <div
              className="services-page-cta__icon"
              aria-hidden="true"
            >
              <FaEnvelopeOpenText />
            </div>

            <div className="services-page-cta__content">

              <span className="services-page-cta__tag">
                LET&apos;S CONNECT
              </span>

              <h2 id="services-page-cta-title">
                Ready to Transform
                <br />
                Your Business?
              </h2>

              <p>
                Talk to our engineering experts and discover
                how D-GATE can help accelerate innovation,
                digital transformation and sustainable
                business growth.
              </p>

            </div>

          </div>

          <Link
            to="/contact"
            className="services-page-cta__button"
          >
            <span>
              TALK TO OUR EXPERTS
            </span>

            <FaArrowRight aria-hidden="true" />
          </Link>

        </div>

      </div>
    </section>
  );
}

export default ServicesCTA;