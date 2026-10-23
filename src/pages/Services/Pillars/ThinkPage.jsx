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
    id: "positioning",
    title: "Brand Strategy & Positioning",
    desc: "Clarify the space the brand should own, the value it creates and the reason people should choose it.",
  },
  {
    id: "messaging",
    title: "Messaging & Communication",
    desc: "Turn complex business value into a clear story people can understand and remember.",
  },
  {
    id: "marketing",
    title: "Marketing Strategy",
    desc: "Define priorities, audiences, channels and the role each activity should play in growth.",
  },
  {
    id: "campaign",
    title: "Campaign Strategy",
    desc: "Build the central idea, audience logic, message architecture and channel journey before execution begins.",
  },
  {
    id: "content",
    title: "Content Strategy",
    desc: "Create a useful system for what the brand should say, where it should say it and why it matters.",
  },
  {
    id: "creative",
    title: "Creative Direction",
    desc: "Set the strategic and creative standard that keeps execution coherent across touchpoints.",
  },
];

const outcomes = [
  "A clearer business story.",
  "A sharper creative brief.",
  "More confident decisions.",
  "Less disconnected execution.",
];

function ThinkPage() {
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

            {/* TWO-COLUMN SPLIT: THINK ON LEFT, CONTENT TO THE RIGHT */}
            <div className="pillar-hero__split">
              {/* LEFT: THINK BRAND SECTION */}
              <div className="pillar-hero__left">
                <h1 className="pillar-hero__title">
                  THINK
                </h1>
                <p className="pillar-hero__subheading">
                  IDEATE
                </p>
                <div className="pillar-hero__title-line" aria-hidden="true" />
              </div>

              {/* RIGHT: HEADLINE, NARRATIVE & CTA */}
              <div className="pillar-hero__right">
                <h2 className="pillar-hero__headline">
                  Better work starts with a <span>better question.</span>
                </h2>

                <p className="pillar-hero__desc">
                  Before we design, build or promote anything, we clarify what the business is trying
                  to change. THINK is where ambition becomes direction — through positioning,
                  audience understanding, messaging and a sharper point of view.
                </p>

                <div className="pillar-hero__cta-wrap">
                  <Link to="/contact" className="pillar-hero__cta-btn">
                    <span>Bring Us the Challenge</span>
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
                    renderCard(item, `think-g1-${item.id}-${idx}`, false)
                  )}
                </div>

                {/* SECOND DUPLICATE COPY FOR SEAMLESS INFINITE LOOP */}
                <div className="think-marquee-group" aria-hidden="true">
                  {marqueeCards.map((item, idx) =>
                    renderCard(item, `think-g2-${item.id}-${idx}`, true)
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

export default ThinkPage;
