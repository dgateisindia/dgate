import "./ServicesCTA.css";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaEnvelopeOpenText,
  FaArrowRight,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function ServicesCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".services-cta-box", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".services-cta-icon", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        scale: 0,
        rotation: -180,
        duration: 0.8,
        delay: 0.2,
        ease: "back.out(1.8)",
      });

      gsap.from(".services-cta-content > *", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 25,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        delay: 0.35,
        ease: "power2.out",
      });

      gsap.from(".services-cta-btn", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        x: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power2.out",
      });

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (
    <section
      className="services-cta"
      ref={sectionRef}
    >
      <div className="services-cta-box">

        <div className="services-cta-left">

          <div className="services-cta-icon">
            <FaEnvelopeOpenText />
          </div>

          <div className="services-cta-content">

            <span className="services-cta-tag">
              LET'S CONNECT
            </span>

            <h2>
              Ready to Transform
              Your Business?
            </h2>

            <p>
              Talk to our engineering experts and discover
              how D-GATE can help accelerate innovation,
              digital transformation and sustainable
              business growth.
            </p>

          </div>

        </div>

        {/* Redirect to Contact Us page */}

        <Link
          to="/contact"
          className="services-cta-btn"
        >
          TALK TO OUR EXPERTS
          <FaArrowRight />
        </Link>

      </div>
    </section>
  );
}

export default ServicesCTA;