import "./CTA.css";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaHandshake, FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function CTA() {
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-banner", {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".cta-icon", {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
        },
        scale: 0,
        rotation: -180,
        duration: 0.8,
        delay: 0.2,
        ease: "back.out(1.7)",
      });

      gsap.from(".cta-content > *", {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
        },
        y: 25,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      });

      gsap.from(".cta-btn", {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power2.out",
      });
    }, ctaRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="cta" ref={ctaRef}>
      <div className="cta-banner">

        <div className="cta-left">

          <div className="cta-icon">
            <FaHandshake />
          </div>

          <div className="cta-content">

            <h2>
              Ready to Build the Future Together?
            </h2>

            <p>
              Let's create powerful engineering and technology
              solutions that accelerate innovation and drive
              your business forward.
            </p>

          </div>

        </div>

        <Link to="/contact" className="cta-btn">
          LET'S TALK TO OUR EXPERTS
          <FaArrowRight />
        </Link>

      </div>
    </section>
  );
}

export default CTA;