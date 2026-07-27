import "./InsightsCTA.css";

import { useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaArrowRight,
  FaLightbulb,
} from "react-icons/fa";


gsap.registerPlugin(ScrollTrigger);


function InsightsCTA() {

  const sectionRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(
        ".insights-cta-box",
        {

          y: 35,

          opacity: 0,

          duration: 0.8,

          ease: "power3.out",

          scrollTrigger: {

            trigger: sectionRef.current,

            start: "top 88%",

            once: true,

          },

        }
      );


      gsap.from(
        ".insights-cta-content",
        {

          x: -25,

          opacity: 0,

          duration: 0.7,

          delay: 0.15,

          ease: "power3.out",

          scrollTrigger: {

            trigger: sectionRef.current,

            start: "top 88%",

            once: true,

          },

        }
      );


      gsap.from(
        ".insights-cta-actions",
        {

          x: 25,

          opacity: 0,

          duration: 0.7,

          delay: 0.2,

          ease: "power3.out",

          scrollTrigger: {

            trigger: sectionRef.current,

            start: "top 88%",

            once: true,

          },

        }
      );

    }, sectionRef);


    return () => {

      ctx.revert();

    };

  }, []);

  const handleExploreTopics = () => {

    const exploreSection =
      document.getElementById("explore-topics");


    if (exploreSection) {

      exploreSection.scrollIntoView({

        behavior: "smooth",

        block: "start",

      });

    }

  };

  const handleContact = () => {

    navigate("/contact");

  };


  return (

    <section

      className="insights-cta-section"

      ref={sectionRef}

    >

      <div className="insights-cta-container">

        <div className="insights-cta-box">

          <div className="insights-cta-decoration insights-cta-decoration-top">

            <span />
            <span />
            <span />
            <span />
            <span />

            <span />
            <span />
            <span />
            <span />
            <span />

            <span />
            <span />
            <span />
            <span />
            <span />

          </div>


          <div className="insights-cta-circle" />


          <div className="insights-cta-content">

            <div className="insights-cta-icon">

              <FaLightbulb />

            </div>


            <div className="insights-cta-text">

              <h2>

                Discover More Engineering{" "}

                <span>

                  Insights

                </span>

              </h2>


              <p>

                Explore ideas, technologies and engineering
                trends shaping the future of innovation.

              </p>

            </div>

          </div>

          <div className="insights-cta-actions">

            <button

              type="button"

              className="insights-cta-primary"

              onClick={handleExploreTopics}

            >

              <span>

                Explore Topics

              </span>

              <FaArrowRight />

            </button>

            <button

              type="button"

              className="insights-cta-secondary"

              onClick={handleContact}

            >

              <span>

                Contact Our Experts

              </span>

              <FaArrowRight />

            </button>

          </div>

        </div>

      </div>

    </section>

  );

}

export default InsightsCTA;