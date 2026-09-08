import "./FeaturedArticle.css";

import {
  useEffect,
  useRef,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaCalendarAlt,
  FaClock,
  FaUser,
} from "react-icons/fa";

import featuredAI from "../../../assets/images/Insights/articles/featured-ai.png";

gsap.registerPlugin(ScrollTrigger);


function FeaturedArticle() {
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
          start: "top 86%",
          once: true,
        },
      });


      /* ===============================================
         FADE ONLY
         NO X / Y / SCALE / ROTATION
      =============================================== */

      timeline
        .from(
          ".insights-featured__heading",
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
            clearProps: "opacity",
          }
        )

        .from(
          ".insights-featured__card",
          {
            opacity: 0,
            duration: 0.5,
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
      id="featured-article"
      className="insights-featured"
      ref={sectionRef}
      aria-labelledby="insights-featured-title"
    >
      <div className="container">


        {/* ==========================================
            HEADING
        ========================================== */}

        <div className="insights-featured__heading">

          <h2 id="insights-featured-title">
            Featured Article
          </h2>


          <div
            className="insights-featured__line"
            aria-hidden="true"
          />

        </div>


        {/* ==========================================
            ARTICLE
        ========================================== */}

        <article className="insights-featured__card">


          {/* IMAGE */}

          <div className="insights-featured__image-wrapper">

            <img
              src={featuredAI}
              alt="Artificial Intelligence transforming engineering"
              className="insights-featured__image"
              loading="lazy"
            />

          </div>


          {/* CONTENT */}

          <div className="insights-featured__content">

            <span className="insights-featured__badge">
              Featured
            </span>


            <h3>
              AI in Engineering: Transforming Ideas into
              Intelligent Solutions
            </h3>


            <p className="insights-featured__description">
              Explore how Artificial Intelligence is reshaping
              engineering workflows, improving decision-making,
              and driving innovation across industries.
            </p>


            <div className="insights-featured__meta">

              <span>
                <FaCalendarAlt aria-hidden="true" />
                May 10, 2024
              </span>


              <span>
                <FaClock aria-hidden="true" />
                6 min read
              </span>


              <span>
                <FaUser aria-hidden="true" />
                By DGATE Team
              </span>

            </div>

          </div>

        </article>

      </div>
    </section>
  );
}


export default FeaturedArticle;