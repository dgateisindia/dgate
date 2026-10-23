import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CaseStudySection.css";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   CASE STUDY FRAMEWORK CARDS
   (Matching exact copy & structure from design)
========================================================= */
const frameworkCards = [
  {
    id: "challenge",
    title: "The Challenge",
    desc: "What business problem or opportunity brought the client to D-GATE?",
  },
  {
    id: "insight",
    title: "The Insight",
    desc: "What did we understand that changed the direction?",
  },
  {
    id: "idea",
    title: "The Idea",
    desc: "What central strategic or creative move did we make?",
  },
  {
    id: "work",
    title: "The Work",
    desc: "What did we actually create, build or activate?",
  },
  {
    id: "impact",
    title: "The Impact",
    desc: "What changed? Use quantified outcomes only when evidence is available.",
  },
  {
    id: "capabilities",
    title: "Capabilities",
    desc: "Show only the disciplines that genuinely contributed.",
  },
];

function CaseStudySection() {
  const sectionRef = useRef(null);

  /* GSAP entrance animations */
  useEffect(() => {
    if (!sectionRef.current) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".case-study-hero__anim", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".case-study-card", {
        opacity: 0,
        y: 20,
        duration: 0.45,
        stagger: 0.08,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: ".case-study-framework__grid",
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="case-study" className="case-study-section" ref={sectionRef}>
      {/* =====================================================
          HERO / HEADER SECTION
      ===================================================== */}
      <div className="case-study-hero">
        <div className="case-study-container">
          {/* MAIN HEADING */}
          <h2 className="case-study-hero__title case-study-hero__anim">
            Case <span>Study</span>
          </h2>

          <div className="case-study-hero__line case-study-hero__anim" />

          {/* DESCRIPTION */}
          <p className="case-study-hero__description case-study-hero__anim">
            Different businesses come to us with different problems: relevance, trust,
            clarity, experience, demand, scale. Our work brings the right mix of strategy,
            creativity, digital and growth to each one.
          </p>
        </div>
      </div>

      {/* =====================================================
          CARDS GRID SECTION
      ===================================================== */}
      <div className="case-study-framework">
        <div className="case-study-container">
          <div className="case-study-framework__grid">
            {frameworkCards.map((card) => (
              <article className="case-study-card" key={card.id}>
                <div className="case-study-card__header">
                  <h3 className="case-study-card__title">
                    {card.title}
                  </h3>
                </div>
                <p className="case-study-card__desc">
                  {card.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudySection;
