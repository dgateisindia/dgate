import "./LifeAtDgate.css";

import { useEffect, useRef } from "react";

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


function LifeAtDgate() {

  const sectionRef = useRef(null);


  /* =========================================================
     GSAP ANIMATIONS
  ========================================================= */

  useEffect(() => {

    const ctx = gsap.context(() => {


      /* LEFT CONTENT */

      gsap.from(".life-dgate-content", {

        x: -45,

        opacity: 0,

        duration: 0.9,

        ease: "power3.out",

        scrollTrigger: {

          trigger: sectionRef.current,

          start: "top 80%",

          once: true,

        },

      });


      /* IMAGES */

      gsap.from(".life-gallery-item", {

        y: 40,

        opacity: 0,

        duration: 0.8,

        stagger: 0.12,

        ease: "power3.out",

        scrollTrigger: {

          trigger: ".life-dgate-gallery",

          start: "top 85%",

          once: true,

        },

      });


    }, sectionRef);


    return () => ctx.revert();

  }, []);


  /* =========================================================
     SCROLL TO OPEN POSITIONS
  ========================================================= */

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
      className="life-dgate-section"
      ref={sectionRef}
    >

      <div className="life-dgate-container">


        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}

        <div className="life-dgate-content">


          {/* TAG */}

          <span className="life-dgate-tag">

            LIFE AT DGATE

          </span>


          {/* HEADING */}

          <h2>

            More Than Work.

            <span>

              A Place To Grow.

            </span>

          </h2>


          {/* YELLOW LINE */}

          <div className="life-dgate-line"></div>


          {/* DESCRIPTION */}

          <p>

            At DGATE, work is more than just a job.
            We foster a culture of innovation,
            collaboration and belonging where people
            are encouraged to share ideas, learn new
            skills and create meaningful impact.

          </p>


          <p className="life-dgate-secondary-text">

            Join a workplace where talented people
            come together to solve challenges,
            celebrate achievements and grow together.

          </p>


          {/* BUTTON */}

          <button
            type="button"
            className="life-dgate-btn"
            onClick={scrollToPositions}
          >

            Join Our Team

            <FaArrowRight />

          </button>


        </div>


        {/* =====================================================
            RIGHT IMAGE COLLAGE
        ===================================================== */}

        <div className="life-dgate-gallery">


          {/* LARGE IMAGE */}

          <div
            className="
              life-gallery-item
              life-gallery-main
            "
          >

            <img
              src={life1}
              alt="DGATE team working and growing together"
            />

          </div>


          {/* TOP RIGHT IMAGE */}

          <div
            className="
              life-gallery-item
              life-gallery-top
            "
          >

            <img
              src={life2}
              alt="DGATE employees enjoying workplace activities"
            />

          </div>


          {/* BOTTOM MIDDLE IMAGE */}

          <div
            className="
              life-gallery-item
              life-gallery-bottom-left
            "
          >

            <img
              src={life3}
              alt="DGATE employees collaborating together"
            />

          </div>


          {/* BOTTOM RIGHT IMAGE */}

          <div
            className="
              life-gallery-item
              life-gallery-bottom-right
            "
          >

            <img
              src={life4}
              alt="DGATE team culture and celebration"
            />

          </div>


        </div>


      </div>

    </section>

  );

}


export default LifeAtDgate;