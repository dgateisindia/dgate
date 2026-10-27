import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import Navbar from "../../../components/Home/Navbar/Navbar";
import Footer from "../../../components/Home/Footer/Footer";
import "./Pillars.css";

const whatWeDefine = [
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    desc: "Paid acquisition designed around clear objectives, audiences, creative testing and continuous optimisation.",
  },
  {
    id: "search",
    title: "Search",
    desc: "Build discoverability through SEO and paid search where intent is already forming.",
  },
  {
    id: "social-media",
    title: "Social Media Campaigns",
    desc: "Turn social channels into purposeful spaces for reach, relevance, conversation and demand.",
  },
  {
    id: "lead-generation",
    title: "Lead Generation & Nurturing",
    desc: "Create clearer journeys from first interest to qualified opportunity.",
  },
  {
    id: "conversion-opt",
    title: "Conversion Optimisation",
    desc: "Improve the moments where interest becomes action across landing pages, websites and digital journeys.",
  },
  {
    id: "analytics-reporting",
    title: "Analytics & Reporting",
    desc: "Bring the right signals together so decisions become less subjective and more informed.",
  },
  {
    id: "marketing-automation",
    title: "Marketing Automation & CRM",
    desc: "Reduce friction across follow-ups, customer journeys and recurring marketing processes.",
  },
  {
    id: "ai-workflows",
    title: "AI-enabled Workflows",
    desc: "Use only where D-GATE has a proven delivery capability. Position AI as an enabler, not as a headline service for its own sake.",
  },
];

const outcomes = [
  "More informed decisions.",
  "Better-connected journeys.",
  "Marketing that learns instead of repeating itself.",
];

function SolvePage() {
  const [flippedId, setFlippedId] = useState(null);

  const toggleFlip = (id) => {
    setFlippedId((prev) => (prev === id ? null : id));
  };

  const marqueeCards = [...whatWeDefine, ...whatWeDefine];

  const renderCard = (item, uniqueKey, isDuplicate = false) => {
    const isFlipped = flippedId === item.id;

    return (
      <div
        className={`think-round-card ${isFlipped ? "is-flipped" : ""}`}
        key={uniqueKey}
        tabIndex={isDuplicate ? -1 : 0}
        onClick={() => toggleFlip(item.id)}
        onKeyDown={
          isDuplicate
            ? undefined
            : (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleFlip(item.id);
                }
              }
        }
        role="button"
        aria-hidden={isDuplicate ? "true" : undefined}
        aria-label={
          isDuplicate
            ? undefined
            : `${item.title}. Click or hover to view description.`
        }
      >
        <div className="think-round-card__inner">
          {/* FRONT FACE: LUXURY WHITE WITH INNER SHADING */}
          <div className="think-round-card__face think-round-card__front">
            <h3 className="think-round-card__title">{item.title}</h3>
          </div>

          {/* BACK FACE: DESCRIPTION (SHOWN ON HOVER/CLICK) */}
          <div className="think-round-card__face think-round-card__back">
            <div className="think-round-card__back-badge">
              <span>{item.title}</span>
            </div>
            <p className="think-round-card__desc">{item.desc}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />

      <main className="pillar-detail-page">
        {/* =====================================================
            HERO SECTION
        ===================================================== */}
        <section className="pillar-hero">
          <div className="pillar-hero__container">
            <div className="pillar-hero__nav">
              <Link to="/services" className="pillar-hero__back-link">
                <FaArrowLeft /> Back to Services Overview
              </Link>
            </div>

            {/* TWO-COLUMN SPLIT: SOLVE ON LEFT, CONTENT TO THE RIGHT */}
            <div className="pillar-hero__split">
              {/* LEFT: SOLVE BRAND SECTION */}
              <div className="pillar-hero__left">
                <h1 className="pillar-hero__title">
                  SOLVE
                </h1>
                <p className="pillar-hero__subheading">
                  INITIATE
                </p>
                <div className="pillar-hero__title-line" aria-hidden="true" />
              </div>

              {/* RIGHT: HEADLINE, NARRATIVE & CTA */}
              <div className="pillar-hero__right">
                <h2 className="pillar-hero__headline">
                  Attention is only <span>the beginning.</span>
                </h2>

                <p className="pillar-hero__desc">
                  SOLVE connects the brand to the systems that create reach, demand, action and learning.
                  We use media, search, social, conversion and marketing technology to help businesses
                  understand what is working — and improve what happens next.
                </p>

                <div className="pillar-hero__cta-wrap">
                  <Link to="/contact" className="pillar-hero__cta-btn">
                    <span>Turn Marketing Into Momentum</span>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHAT WE HELP DEFINE (CONTINUOUS RIGHT-TO-LEFT MARQUEE)
        ===================================================== */}
        <section className="pillar-define-section">
          <div className="pillar-hero__container">
            <div className="pillar-section-header pillar-section-header--centered">
              <h2 className="pillar-section-title">What we help define</h2>
              <div className="pillar-section-line" aria-hidden="true" />
            </div>

            <div className="think-marquee-wrapper">
              <div
                className="think-marquee-track"
                role="region"
                aria-label="Capabilities marquee moving from right to left"
              >
                {/* FIRST COPY */}
                <div className="think-marquee-group" aria-hidden="false">
                  {marqueeCards.map((item, idx) =>
                    renderCard(item, `solve-g1-${item.id}-${idx}`, false)
                  )}
                </div>

                {/* SECOND DUPLICATE COPY FOR SEAMLESS INFINITE LOOP */}
                <div className="think-marquee-group" aria-hidden="true">
                  {marqueeCards.map((item, idx) =>
                    renderCard(item, `solve-g2-${item.id}-${idx}`, true)
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            THE OUTCOME
        ===================================================== */}
        <section className="pillar-outcome-section">
          <div className="pillar-hero__container">
            <div className="pillar-section-header pillar-section-header--centered">
              <h2 className="pillar-section-title">The outcome</h2>
              <div className="pillar-section-line" aria-hidden="true" />
            </div>

            <div className="pillar-outcome-grid">
              {outcomes.map((text, idx) => (
                <div className="pillar-outcome-box" key={idx}>
                  <div className="pillar-outcome-box__check" aria-hidden="true">
                    <FaCheck />
                  </div>
                  <p className="pillar-outcome-box__text">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default SolvePage;
