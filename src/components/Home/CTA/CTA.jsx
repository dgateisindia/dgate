import "./CTA.css";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaHandshake,
  FaArrowRight,
  FaRocket,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function CTA() {
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
        .from(".home-cta__banner", {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })

        .from(
          ".home-cta__icon",
          {
            scale: 0,
            rotation: -90,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        )

        .from(
          ".home-cta__content > *",
          {
            y: 20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
          },
          "-=0.3"
        )

        .from(
          ".home-cta__feature",
          {
            y: 15,
            opacity: 0,
            stagger: 0.08,
            duration: 0.45,
          },
          "-=0.25"
        )

        .from(
          ".home-cta__action",
          {
            x: 35,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="home-cta"
      ref={sectionRef}
      aria-labelledby="home-cta-title"
    >
      <div className="container">

        <div className="home-cta__banner">

          <div className="home-cta__decoration home-cta__decoration--one" />
          <div className="home-cta__decoration home-cta__decoration--two" />

          <div className="home-cta__main">

            <div className="home-cta__heading">

              <div
                className="home-cta__icon"
                aria-hidden="true"
              >
                <FaHandshake />
              </div>

              <div className="home-cta__content">

                <span className="home-cta__label">
                  LET&apos;S COLLABORATE
                </span>

                <h2 id="home-cta-title">
                  Ready to Build the{" "}
                  <span>Future Together?</span>
                </h2>

                <p>
                  Turn your ideas into powerful engineering
                  and technology solutions that accelerate
                  innovation and move your business forward.
                </p>

              </div>

            </div>

            <div className="home-cta__features">

              <div className="home-cta__feature">
                <span
                  className="home-cta__feature-icon"
                  aria-hidden="true"
                >
                  <FaRocket />
                </span>

                <span>Innovative Solutions</span>
              </div>

              <div className="home-cta__feature">
                <span
                  className="home-cta__feature-icon"
                  aria-hidden="true"
                >
                  <FaShieldAlt />
                </span>

                <span>Reliable Support</span>
              </div>

              <div className="home-cta__feature">
                <span
                  className="home-cta__feature-icon"
                  aria-hidden="true"
                >
                  <FaChartLine />
                </span>

                <span>Result Driven</span>
              </div>

            </div>

          </div>

          <div className="home-cta__action">

            <p className="home-cta__action-label">
              HAVE A PROJECT IN MIND?
            </p>

            <h3>
              Let&apos;s turn your vision into reality.
            </h3>

            <Link
              to="/contact"
              className="home-cta__button"
            >
              <span>
                LET&apos;S TALK TO OUR EXPERTS
              </span>

              <FaArrowRight aria-hidden="true" />
            </Link>

            <p className="home-cta__note">
              Tell us about your requirements and our team
              will get in touch.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CTA;