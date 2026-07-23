import "./CareersCTA.css";

import { useEffect, useRef } from "react";

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

    const ctx = gsap.context(() => {

      gsap.from(".career-cta-box", {

        y: 35,
        opacity: 0,

        duration: 0.8,

        ease: "power3.out",

        scrollTrigger: {

          trigger: sectionRef.current,

          start: "top 88%",

          once: true,

        },

      });

    }, sectionRef);

    return () => ctx.revert();

  }, []);


  /* ==========================================
     SCROLL TO OPEN POSITIONS
  ========================================== */

  const scrollToPositions = () => {

    const section =
      document.getElementById("open-positions");

    if (section) {

      section.scrollIntoView({

        behavior: "smooth",

        block: "start",

      });

    }

  };


  return (

    <section
      className="career-cta-section"
      ref={sectionRef}
    >

      <div className="career-cta-container">

        <div className="career-cta-box">


          {/* LEFT SIDE */}

          <div className="career-cta-left">


            {/* ICON */}

            <div className="career-cta-icon">

              <FaPaperPlane />

            </div>


            {/* TEXT */}

            <div className="career-cta-content">

              <h3>

                Ready to shape the future with us?

              </h3>

              <p>

                Find the right opportunity and grow
                your career with DGATE.

              </p>

            </div>

          </div>


          {/* BUTTON */}

          <button
            type="button"
            className="career-cta-btn"
            onClick={scrollToPositions}
          >

            Browse Open Positions

            <FaArrowRight />

          </button>

        </div>

      </div>

    </section>

  );

}

export default CareersCTA;