import "./CareersCTA.css";

import {
  useEffect,
  useRef,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaPaperPlane,
  FaArrowRight,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);


function CareersCTA() {
  const sectionRef = useRef(null);


  useEffect(() => {
    if (!sectionRef.current) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;


    const ctx = gsap.context(() => {
      gsap.from(
        ".careers-cta__box",
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          clearProps: "opacity",

          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 88%",
            once: true,
          },
        }
      );
    }, sectionRef);


    return () => ctx.revert();

  }, []);


  const scrollToPositions = () => {
    const section =
      document.getElementById(
        "open-positions"
      );

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  return (
    <section
      className="careers-cta"
      ref={sectionRef}
      aria-labelledby="careers-cta-title"
    >
      <div className="container">

        <div className="careers-cta__box">


          {/* ==========================================
              LEFT CONTENT
          ========================================== */}

          <div className="careers-cta__left">

            <div
              className="careers-cta__icon"
              aria-hidden="true"
            >
              <FaPaperPlane />
            </div>


            <div className="careers-cta__content">

              <h3 id="careers-cta-title">
                Ready to shape the future with us?
              </h3>

              <p>
                Find the right opportunity and grow
                your career with DGATE.
              </p>

            </div>

          </div>


          {/* ==========================================
              BUTTON
          ========================================== */}

          <button
            type="button"
            className="careers-cta__button"
            onClick={scrollToPositions}
          >
            <span>
              Browse Open Positions
            </span>

            <FaArrowRight aria-hidden="true" />
          </button>

        </div>

      </div>
    </section>
  );
}


export default CareersCTA;