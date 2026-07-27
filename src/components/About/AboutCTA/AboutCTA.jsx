import "./AboutCTA.css";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaHandshake, FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function AboutCTA() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".cta-box", {

        y: 50,

        opacity: 0,

        duration: 0.9,

        ease: "power3.out",

        scrollTrigger: {

          trigger: sectionRef.current,

          start: "top 80%",

          once: true,

        },

      });

      gsap.from(".cta-icon", {

        scale: 0,

        duration: 0.6,

        ease: "back.out(1.7)",

        scrollTrigger: {

          trigger: sectionRef.current,

          start: "top 80%",

          once: true,

        },

      });

      gsap.from(".cta-btn", {

        x: 40,

        opacity: 0,

        duration: 0.8,

        ease: "power3.out",

        scrollTrigger: {

          trigger: sectionRef.current,

          start: "top 80%",

          once: true,

        },

      });

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (

    <section
      className="about-cta"
      ref={sectionRef}
    >

      <div className="cta-box">

        {/* Left */}

        <div className="cta-left">

          <div className="cta-icon">

            <FaHandshake />

          </div>

          <div className="cta-content">

            <h2>

              Let's Build Something Great Together

            </h2>

            <p>

              Partner with D-GATE to accelerate your digital
              transformation journey.

            </p>

          </div>

        </div>

        {/* Right - Redirect to Contact Us */}

        <Link
          to="/contact"
          className="cta-btn"
        >

          GET IN TOUCH

          <FaArrowRight />

        </Link>

      </div>

    </section>

  );

}

export default AboutCTA;