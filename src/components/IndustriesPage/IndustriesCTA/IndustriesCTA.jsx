import "./IndustriesCTA.css";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function IndustriesCTA() {
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
        .from(".industries-page-cta__content", {
          opacity: 0,
          duration: 0.55,
          ease: "power2.out",
          clearProps: "opacity",
        })

        .from(
          ".industries-page-cta__button",
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.2"
        )

        .from(
          ".industries-page-cta__dot",
          {
            opacity: 0,
            duration: 0.2,
            stagger: 0.025,
            ease: "power1.out",
            clearProps: "opacity",
          },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="industries-page-cta"
      ref={sectionRef}
      aria-labelledby="industries-page-cta-title"
    >
      <div className="container">

        <div className="industries-page-cta__box">

          <div className="industries-page-cta__content">

            <div
              className="industries-page-cta__icon"
              aria-hidden="true"
            >
              <FaHeadset />
            </div>

            <div className="industries-page-cta__text">

              <h2 id="industries-page-cta-title">
                Let&apos;s Build Industry-Specific
                Solutions Together
              </h2>

              <p>
                Our experts understand your industry challenges
                and deliver innovative engineering solutions
                that create measurable business impact through
                digital transformation and technology excellence.
              </p>

            </div>

          </div>


          <Link
            to="/contact"
            className="industries-page-cta__button"
          >
            <span>
              TALK TO OUR EXPERTS
            </span>

            <FaArrowRight aria-hidden="true" />
          </Link>


          <div
            className="industries-page-cta__dots"
            aria-hidden="true"
          >
            {Array.from(
              { length: 25 },
              (_, index) => (
                <span
                  className="industries-page-cta__dot"
                  key={`dot-${index + 1}`}
                />
              )
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

export default IndustriesCTA;