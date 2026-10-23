import "./Leadership.css";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaLinkedinIn,
  FaUserTie,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const leaders = [
  {
    id: "managing-director",
    name: "Leader Name",
    role: "Managing Director",
    linkedin: null,
  },
  {
    id: "ceo",
    name: "Leader Name",
    role: "Chief Executive Officer",
    linkedin: null,
  },
  {
    id: "cto",
    name: "Leader Name",
    role: "Chief Technology Officer",
    linkedin: null,
  },
  {
    id: "coo",
    name: "Leader Name",
    role: "Chief Operations Officer",
    linkedin: null,
  },
];

function Leadership() {
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
          start: "top 80%",
          once: true,
        },
      });

      timeline
        .from(".about-leadership__heading", {
          y: 30,
          opacity: 0,
          duration: 0.55,
          stagger: 0.1,
          ease: "power2.out",
        })

        .from(
          ".about-leadership__card",
          {
            y: 30,
            opacity: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="about-leadership"
      ref={sectionRef}
    >
      <div className="container">

        <div className="about-leadership__layout">

          {/* LEADERSHIP */}
          <div className="about-leadership__section">

            <div className="about-leadership__heading">

              <h2>
                Leadership Team
              </h2>

              <div
                className="about-leadership__line"
                aria-hidden="true"
              />

              <p>
                Experienced leaders driving innovation and growth.
              </p>

            </div>

            <div className="about-leadership__grid">

              {leaders.map((leader) => (
                <article
                  className="about-leadership__card"
                  key={leader.id}
                >

                  <div
                    className="about-leadership__photo"
                    aria-hidden="true"
                  >
                    <FaUserTie />
                  </div>

                  <h3>
                    {leader.name}
                  </h3>

                  <p className="about-leadership__role">
                    {leader.role}
                  </p>

                  {leader.linkedin && (
                    <a
                      className="about-leadership__linkedin"
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${leader.name} LinkedIn profile`}
                    >
                      <FaLinkedinIn />
                    </a>
                  )}

                </article>
              ))}

            </div> 
            

            <Link
              to="/contact"
              className="about-leadership__button"
            >
              Meet The Team
            </Link>

          </div>

          {/* RIGHT SIDE EMPTY CARD */}
          <div
            className="about-leadership__section about-leadership__section--empty"
            aria-label="Empty card"
          />

        </div>
      </div>
    </section>
  );
}

export default Leadership;