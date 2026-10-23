import "./InsightsCTA.css";

import {
  useEffect,
  useRef,
} from "react";

import {
  Link,
} from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaArrowRight,
  FaLightbulb,
} from "react-icons/fa";


gsap.registerPlugin(ScrollTrigger);


function InsightsCTA() {
  const sectionRef = useRef(null);


  /* =========================================================
     SCROLL ANIMATION
     FADE ONLY
  ========================================================= */

  useEffect(() => {
    if (!sectionRef.current) return;

    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reduceMotion) return;


    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 86%",
          once: true,
        },
      });


      timeline
        .from(
          ".insights-page-cta__box",
          {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            clearProps: "opacity",
          }
        )

        .from(
          ".insights-page-cta__content",
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.2"
        )

        .from(
          ".insights-page-cta__actions",
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.2"
        );

    }, sectionRef);


    return () => ctx.revert();

  }, []);


  /* =========================================================
     SCROLL TO TOPICS
  ========================================================= */

  const handleExploreTopics = () => {
    const exploreSection =
      document.getElementById(
        "explore-topics"
      );

    if (!exploreSection) return;

    exploreSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  return (
    <section
      className="insights-page-cta"
      ref={sectionRef}
      aria-labelledby="insights-page-cta-title"
    >
      <div className="container">

        <div className="insights-page-cta__box">


          {/* DECORATIONS */}

          <div
            className="insights-page-cta__decoration insights-page-cta__decoration--one"
            aria-hidden="true"
          />

          <div
            className="insights-page-cta__decoration insights-page-cta__decoration--two"
            aria-hidden="true"
          />

          <div
            className="insights-page-cta__dots"
            aria-hidden="true"
          />


          {/* ==========================================
              CONTENT
          ========================================== */}

          <div className="insights-page-cta__content">

            <div
              className="insights-page-cta__icon"
              aria-hidden="true"
            >
              <FaLightbulb />
            </div>


            <div className="insights-page-cta__text">

              <span className="insights-page-cta__label">
                DGATE Insights
              </span>


              <h2 id="insights-page-cta-title">
                See how we think about{" "}

                <span>
                  growth &amp; market impact
                </span>
              </h2>


              <p>
                Explore perspectives on brand positioning, creative direction
                and connected digital systems that shape lasting market momentum.
              </p>

            </div>

          </div>


          {/* ==========================================
              ACTIONS
          ========================================== */}

          <div className="insights-page-cta__actions">

            <button
              type="button"
              className="insights-page-cta__button insights-page-cta__button--primary"
              onClick={handleExploreTopics}
            >
              <span>
                See How We Think
              </span>

              <FaArrowRight aria-hidden="true" />
            </button>


            <Link
              to="/contact"
              className="insights-page-cta__button insights-page-cta__button--secondary"
            >
              <span>
                Start a Conversation
              </span>

              <FaArrowRight aria-hidden="true" />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}


export default InsightsCTA;