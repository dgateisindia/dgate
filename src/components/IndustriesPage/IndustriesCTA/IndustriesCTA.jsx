import "./IndustriesCTA.css";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function IndustriesCTA() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".industries-cta-content", {

        y: 50,

        opacity: 0,

        duration: 0.8,

        ease: "power3.out",

        scrollTrigger: {

          trigger: sectionRef.current,

          start: "top 80%",

          once: true,

        },

      });

      gsap.from(".industries-cta-button", {

        x: 40,

        opacity: 0,

        duration: 0.8,

        delay: 0.2,

        ease: "power3.out",

        scrollTrigger: {

          trigger: sectionRef.current,

          start: "top 80%",

          once: true,

        },

      });

      gsap.from(".industries-cta-dots span", {

        scale: 0,

        opacity: 0,

        stagger: 0.05,

        duration: 0.3,

        ease: "back.out(1.8)",

        scrollTrigger: {

          trigger: sectionRef.current,

          start: "top 80%",

          once: true,

        },

      });

    }, sectionRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();

  }, []);

  return (

    <section
      className="industries-cta"
      ref={sectionRef}
    >

      <div className="industries-cta-container">

        {/* Left */}

        <div className="industries-cta-content">

          <div className="industries-cta-icon">

            <FaHeadset />

          </div>

          <div>

            <h2>

              Let's Build Industry-Specific Solutions Together

            </h2>

            <p>

              Our experts understand your industry challenges
              and deliver innovative engineering solutions
              that create measurable business impact through
              digital transformation and technology excellence.

            </p>

          </div>

        </div>

        {/* Right */}

        <button className="industries-cta-button">

          TALK TO OUR EXPERTS

          <FaArrowRight />

        </button>

        {/* Decorative Dots */}

        <div className="industries-cta-dots">

          {Array.from({ length: 25 }).map((_, index) => (

            <span key={index}></span>

          ))}

        </div>

      </div>

    </section>

  );

}

export default IndustriesCTA;