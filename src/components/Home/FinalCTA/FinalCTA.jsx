import "./FinalCTA.css";
import { Link } from "react-router-dom";
import { FaArrowRight, FaHandshake, FaChartLine, FaGlobe } from "react-icons/fa";
import { REUSABLE_CTAS } from "../../../data/ctaSystem";

function FinalCTA() {
  return (
    <section className="home-final-cta" aria-labelledby="final-cta-heading">
      <div className="container">
        <div className="home-final-cta__box">
          {/* Subtle Decorative Concentric Background Arcs */}
          <div className="home-final-cta__bg-rings" aria-hidden="true">
            <svg viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="460" cy="230" r="170" stroke="rgba(0, 0, 0, 0.085)" strokeWidth="1.5" />
              <circle cx="460" cy="230" r="280" stroke="rgba(0, 0, 0, 0.085)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="home-final-cta__content">
            <span className="home-final-cta__eyebrow">
              READY TO GROW?
            </span>

            <h2 id="final-cta-heading" className="home-final-cta__title">
              What should your business become next?
            </h2>

            <p className="home-final-cta__description">
              If the answer needs sharper strategy, stronger creativity or a more connected path to growth, we should talk.
            </p>

            <div className="home-final-cta__points">
              <span>
                <FaHandshake aria-hidden="true" />
                Trusted Digital Partner
              </span>
              <span>
                <FaChartLine aria-hidden="true" />
                Performance Focused
              </span>
              <span>
                <FaGlobe aria-hidden="true" />
                Growth Across Markets
              </span>
            </div>
          </div>

          <div className="home-final-cta__action">
            <Link
              to="/contact"
              className="home-final-cta__btn"
              aria-label="Start a conversation with D-GATE"
            >
              <span>{REUSABLE_CTAS.START_CONVERSATION}</span>
              <FaArrowRight aria-hidden="true" className="home-final-cta__btn-icon" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
