import "./TechnologiesCTA.css";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaArrowRight } from "react-icons/fa";

import {
  ctaImage,
} from "../../../assets/images/Technologies/cta";

gsap.registerPlugin(ScrollTrigger);


function TechnologiesCTA() {
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


      /* ===============================================
         FADE ONLY
         NO X / Y / SCALE / ROTATION
      =============================================== */

      timeline
        .from(
          ".technologies-page-cta__content",
          {
            opacity: 0,
            duration: 0.55,
            ease: "power2.out",
            clearProps: "opacity",
          }
        )

        .from(
          ".technologies-page-cta__visual",
          {
            opacity: 0,
            duration: 0.55,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.3"
        );

    }, sectionRef);


    return () => ctx.revert();

  }, []);


  return (
    <section
      className="technologies-page-cta"
      ref={sectionRef}
      aria-labelledby="technologies-page-cta-title"
    >
      <div className="container">

        <div className="technologies-page-cta__wrapper">


          {/* ==========================================
              CONTENT
          ========================================== */}

          <div className="technologies-page-cta__content">

            <span className="technologies-page-cta__tag">
              CONNECTED PLATFORMS
            </span>


            <h2
              id="technologies-page-cta-title"
              className="technologies-page-cta__title"
            >
              Let’s build what’s next

              <span>
                for your brand
              </span>
            </h2>


            <p className="technologies-page-cta__text">
              Connect strategy, experience design and modern digital
              technologies to create seamless customer touchpoints and
              drive sustained momentum.
            </p>


            <Link
              to="/contact"
              className="technologies-page-cta__button"
              aria-label="Let's build what's next with D-GATE"
            >
              <span>
                Let’s Build What’s Next
              </span>

              <FaArrowRight aria-hidden="true" />
            </Link>

          </div>


          {/* ==========================================
              IMAGE
          ========================================== */}

          <div className="technologies-page-cta__visual">

            <img
              src={ctaImage}
              alt="D-GATE technology team working on digital solutions"
              className="technologies-page-cta__image"
              loading="lazy"
            />

          </div>


        </div>

      </div>
    </section>
  );
}


export default TechnologiesCTA;