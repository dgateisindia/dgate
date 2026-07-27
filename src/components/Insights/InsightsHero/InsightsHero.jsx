import "./InsightsHero.css";

import {
  useEffect,
  useRef,
} from "react";

import { Link } from "react-router-dom";

import gsap from "gsap";

import { FaArrowRight } from "react-icons/fa";

import InsightsCanvas from "./InsightsCanvas";

import {
  insightsHero,
} from "../../../assets/images/Insights/hero";


function InsightsHero() {

  const heroRef = useRef(null);


  /* =========================================================
     GSAP HERO ENTRANCE
  ========================================================= */

  useEffect(() => {

    const ctx = gsap.context(() => {

      const timeline = gsap.timeline({

        defaults: {
          ease: "power3.out",
        },

      });


      /* Breadcrumb */

      timeline.from(
        ".insights-breadcrumb",
        {
          x: -25,
          opacity: 0,
          duration: 0.55,
        }
      );


      /* Title */

      timeline.from(
        ".insights-title",
        {
          y: 35,
          opacity: 0,
          duration: 0.75,
        },
        "-=0.2"
      );


      /* Yellow Line */

      timeline.from(
        ".insights-title-line",
        {
          width: 0,
          duration: 0.45,
        },
        "-=0.2"
      );


      /* Description */

      timeline.from(
        ".insights-description",
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.15"
      );


      /* Explore Button */

      timeline.from(
        ".insights-explore-btn",
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.2"
      );


      /* Right Image */

      timeline.from(
        ".insights-image-side",
        {
          x: 45,
          opacity: 0,
          duration: 0.9,
        },
        "-=0.7"
      );

    }, heroRef);


    return () => {

      ctx.revert();

    };

  }, []);


  /* =========================================================
     SCROLL TO FEATURED ARTICLE
  ========================================================= */

  const handleExploreInsights = () => {

    const featuredSection =
      document.getElementById(
        "featured-article"
      );

    if (featuredSection) {

      featuredSection.scrollIntoView({

        behavior: "smooth",

        block: "start",

      });

    }

  };


  return (

    <section
      className="insights-hero"
      ref={heroRef}
    >

      <div className="insights-hero-container">


        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="insights-content-side">


          {/* Breadcrumb */}

          <div className="insights-breadcrumb">

            <Link to="/">
              Home
            </Link>

            <span>
              ›
            </span>

            <span>
              Insights
            </span>

          </div>


          {/* Main Heading */}

          <h1 className="insights-title">

            Insights that{" "}

            <span>
              Inspire
            </span>{" "}

            Innovation

          </h1>


          {/* Yellow Underline */}

          <div className="insights-title-line" />


          {/* Description */}

          <p className="insights-description">

            Stay updated with the latest trends,
            insights and expert perspectives from
            the world of engineering and technology.

          </p>


          {/* Explore Insights Button */}

          <button

            type="button"

            className="insights-explore-btn"

            onClick={handleExploreInsights}

          >

            <span>
              Explore Insights
            </span>

            <FaArrowRight />

          </button>


        </div>


        {/* =================================================
            RIGHT IMAGE + THREE.JS
        ================================================= */}

        <div className="insights-image-side">


          {/* Hero Image */}

          <img

            src={insightsHero}

            alt="DGATE engineering and technology insights"

            className="insights-hero-image"

          />


          {/* Image Overlay */}

          <div className="insights-image-overlay" />


          {/* Three.js Network */}

          <InsightsCanvas />


        </div>


      </div>

    </section>

  );

}

export default InsightsHero;