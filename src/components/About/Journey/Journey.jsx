import "./Journey.css";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaFlag,
  FaBuilding,
  FaUsers,
  FaHandshake,
  FaRocket,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function Journey() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".journey-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".journey-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".journey-line",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".journey-item", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.18,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: ".journey-items",
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="journey" ref={sectionRef}>
      <div className="journey-container">
        <div className="journey-title">
          <h2>OUR JOURNEY</h2>
          <div className="journey-line-small"></div>
        </div>

        <div className="journey-wrapper">
          <div className="journey-line"></div>

          <div className="journey-items">
            <div className="journey-item">
              <div className="journey-icon">
                <FaFlag />
              </div>

              <div className="journey-content">
                <h3>2003</h3>
                <p>
                  Company
                  <br />
                  Founded
                </p>
              </div>
            </div>

            <div className="journey-item">
              <div className="journey-icon">
                <FaBuilding />
              </div>

              <div className="journey-content">
                <h3>2008</h3>
                <p>
                  Global Delivery
                  <br />
                  Centers
                </p>
              </div>
            </div>

            <div className="journey-item">
                <div className="journey-icon">
                    <FaUsers />
                </div>

                <div className="journey-content">
                    <h3>2013</h3>
                    <p>
                    Expansion to
                    <br />
                    New Markets
                    </p>
                </div>
            </div>

            <div className="journey-item">
              <div className="journey-icon">
                <FaHandshake />
              </div>

              <div className="journey-content">
                <h3>2018</h3>
                <p>
                  100+ Global
                  <br />
                  Clients
                </p>
              </div>
            </div>

            <div className="journey-item">
              <div className="journey-icon">
                <FaRocket />
              </div>

              <div className="journey-content">
                <h3>2023+</h3>
                <p>
                  Continuing the
                  <br />
                  Journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;