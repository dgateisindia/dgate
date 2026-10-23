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
    id: "brand-identity",
    title: "Brand Identity",
    desc: "Identity systems that make the strategy visible — from logo and typography to colour, imagery and brand behaviour.",
  },
  {
    id: "campaign-creative",
    title: "Campaign Creative",
    desc: "Concepts and creative systems built to travel across formats, channels and moments.",
  },
  {
    id: "content-design",
    title: "Content & Communication Design",
    desc: "Stories, social content, presentations, sales assets and brand communication designed for clarity and recall.",
  },
  {
    id: "web-digital",
    title: "Websites & Digital Experiences",
    desc: "Digital platforms that express the brand, make information easier to navigate and guide users toward action.",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    desc: "Commerce experiences that bring brand, product discovery and conversion together.",
  },
  {
    id: "ui-ux",
    title: "UI/UX",
    desc: "Interfaces shaped around user needs, business goals and clear journeys.",
  },
  {
    id: "video-motion",
    title: "Video & Motion",
    desc: "Movement, storytelling and dynamic content that give ideas another dimension.",
  },
];

const outcomes = [
  "A brand that feels consistent.",
  "Experiences that feel intentional.",
  "Creative that earns attention rather than merely occupying space.",
];

function BuildPage() {
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

            {/* TWO-COLUMN SPLIT: BUILD ON LEFT, CONTENT TO THE RIGHT */}
            <div className="pillar-hero__split">
              {/* LEFT: BUILD BRAND SECTION */}
              <div className="pillar-hero__left">
                <h1 className="pillar-hero__title">
                  BUILD
                </h1>
                <p className="pillar-hero__subheading">
                  INNOVATE
                </p>
                <div className="pillar-hero__title-line" aria-hidden="true" />
              </div>

              {/* RIGHT: HEADLINE, NARRATIVE & CTA */}
              <div className="pillar-hero__right">
                <h2 className="pillar-hero__headline">
                  Ideas become valuable when <span>people can experience them.</span>
                </h2>

                <p className="pillar-hero__desc">
                  BUILD is where strategy becomes identity, communication and experience. We create
                  brand and digital touchpoints designed to feel coherent wherever the customer meets them.
                </p>

                <div className="pillar-hero__cta-wrap">
                  <Link to="/contact" className="pillar-hero__cta-btn">
                    <span>Build Something Worth Remembering</span>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHAT WE HELP DEFINE (CONTINUOUS LEFT-TO-RIGHT MARQUEE)
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
                aria-label="Capabilities marquee moving from left to right"
              >
                {/* FIRST COPY */}
                <div className="think-marquee-group" aria-hidden="false">
                  {marqueeCards.map((item, idx) =>
                    renderCard(item, `build-g1-${item.id}-${idx}`, false)
                  )}
                </div>

                {/* SECOND DUPLICATE COPY FOR SEAMLESS INFINITE LOOP */}
                <div className="think-marquee-group" aria-hidden="true">
                  {marqueeCards.map((item, idx) =>
                    renderCard(item, `build-g2-${item.id}-${idx}`, true)
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

export default BuildPage;
