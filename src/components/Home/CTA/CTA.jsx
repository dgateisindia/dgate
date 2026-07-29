import "./CTA.css";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaHandshake,
  FaArrowRight,
  FaRocket,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function CTA() {
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });

      timeline
        .from(".cta-banner", {
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        })
        .from(
          ".cta-icon",
          {
            scale: 0,
            rotation: -120,
            duration: 0.7,
            ease: "back.out(1.7)",
          },
          "-=0.45"
        )
        .from(
          ".cta-content > *",
          {
            y: 24,
            opacity: 0,
            stagger: 0.12,
            duration: 0.65,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          ".cta-feature",
          {
            y: 18,
            opacity: 0,
            stagger: 0.1,
            duration: 0.55,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          ".cta-action",
          {
            x: 45,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.55"
        );
    }, ctaRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="cta" ref={ctaRef}>
      <div className="cta-banner">
        <div className="cta-decoration cta-decoration-one" />
        <div className="cta-decoration cta-decoration-two" />

        <div className="cta-main">
          <div className="cta-heading-area">
            <div className="cta-icon" aria-hidden="true">
              <FaHandshake />
            </div>

            <div className="cta-content">
              <span className="cta-label">LET&apos;S COLLABORATE</span>

              <h2>
                Ready to Build the{" "}
                <span>Future Together?</span>
              </h2>

              <p>
                Turn your ideas into powerful engineering and technology
                solutions that accelerate innovation and move your business
                forward.
              </p>
            </div>
          </div>

          <div className="cta-features">
            <div className="cta-feature">
              <span className="cta-feature-icon">
                <FaRocket />
              </span>

              <span>Innovative Solutions</span>
            </div>

            <div className="cta-feature">
              <span className="cta-feature-icon">
                <FaShieldAlt />
              </span>

              <span>Reliable Support</span>
            </div>

            <div className="cta-feature">
              <span className="cta-feature-icon">
                <FaChartLine />
              </span>

              <span>Result Driven</span>
            </div>
          </div>
        </div>

        <div className="cta-action">
          <p className="cta-action-label">Have a project in mind?</p>

          <h3>Let&apos;s turn your vision into reality.</h3>

          <Link to="/contact" className="cta-btn">
            <span>LET&apos;S TALK TO OUR EXPERTS</span>
            <FaArrowRight />
          </Link>

          <p className="cta-note">
            Tell us about your requirements and our team will get in touch.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CTA;