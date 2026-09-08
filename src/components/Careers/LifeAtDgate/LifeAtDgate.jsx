import "./LifeAtDgate.css";

import {
  useEffect,
  useRef,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaArrowRight } from "react-icons/fa";

import {
  life1,
  life2,
  life3,
  life4,
} from "../../../assets/images/Careers/LifeAtDgate";

gsap.registerPlugin(ScrollTrigger);


const galleryImages = [
  {
    id: "life-main",
    src: life1,
    alt: "DGATE team working and growing together",
    className:
      "careers-life__gallery-item careers-life__gallery-item--main",
  },
  {
    id: "life-top",
    src: life2,
    alt: "DGATE employees enjoying workplace activities",
    className:
      "careers-life__gallery-item careers-life__gallery-item--top",
  },
  {
    id: "life-bottom-left",
    src: life3,
    alt: "DGATE employees collaborating together",
    className:
      "careers-life__gallery-item careers-life__gallery-item--bottom-left",
  },
  {
    id: "life-bottom-right",
    src: life4,
    alt: "DGATE team culture and celebration",
    className:
      "careers-life__gallery-item careers-life__gallery-item--bottom-right",
  },
];


function LifeAtDgate() {
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
         NO X / Y / SCALE
      =============================================== */

      timeline
        .from(
          ".careers-life__content",
          {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            clearProps: "opacity",
          }
        )

        .from(
          ".careers-life__gallery-item",
          {
            opacity: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.2"
        );

    }, sectionRef);


    return () => ctx.revert();

  }, []);


  const scrollToPositions = () => {
    const section =
      document.getElementById("open-positions");

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  return (
    <section
      className="careers-life"
      ref={sectionRef}
      aria-labelledby="careers-life-title"
    >
      <div className="container">

        <div className="careers-life__wrapper">


          {/* ==========================================
              CONTENT
          ========================================== */}

          <div className="careers-life__content">

            <span className="careers-life__tag">
              LIFE AT DGATE
            </span>


            <h2 id="careers-life-title">
              More Than Work.

              <span>
                A Place To Grow.
              </span>
            </h2>


            <div
              className="careers-life__line"
              aria-hidden="true"
            />


            <p>
              At DGATE, work is more than just a job.
              We foster a culture of innovation,
              collaboration and belonging where people
              are encouraged to share ideas, learn new
              skills and create meaningful impact.
            </p>


            <p className="careers-life__secondary-text">
              Join a workplace where talented people
              come together to solve challenges,
              celebrate achievements and grow together.
            </p>


            <button
              type="button"
              className="careers-life__button"
              onClick={scrollToPositions}
            >
              <span>
                Join Our Team
              </span>

              <FaArrowRight aria-hidden="true" />
            </button>

          </div>


          {/* ==========================================
              GALLERY
          ========================================== */}

          <div className="careers-life__gallery">

            {galleryImages.map((image) => (
              <div
                className={image.className}
                key={image.id}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                />
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}


export default LifeAtDgate;