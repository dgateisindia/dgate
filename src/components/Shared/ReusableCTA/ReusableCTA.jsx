import "./ReusableCTA.css";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { CTA_PRESETS, REUSABLE_CTAS } from "../../../data/ctaSystem";

/**
 * ReusableCTA - Global Reusable CTA Component
 * Built in accordance with Brand Guideline 16.
 *
 * @param {Object} props
 * @param {string} [props.preset="conversation"] - One of "conversation" | "work" | "challenge" | "remembering" | "momentum" | "thinking" | "buildNext"
 * @param {string} [props.eyebrow] - Overrides preset eyebrow
 * @param {string} [props.title] - Overrides preset headline
 * @param {string} [props.description] - Overrides preset copy
 * @param {string} [props.buttonText] - Overrides preset CTA action text
 * @param {string} [props.to] - Target link URL
 * @param {string[]} [props.points] - Optional array of value points
 * @param {string} [props.className] - Optional container class
 */
function ReusableCTA({
  preset = "conversation",
  eyebrow,
  title,
  description,
  buttonText,
  to,
  points,
  className = "",
}) {
  const selectedPreset = CTA_PRESETS[preset] || CTA_PRESETS.conversation;

  const finalEyebrow = eyebrow || selectedPreset.eyebrow;
  const finalTitle = title || selectedPreset.title;
  const finalDescription = description || selectedPreset.description;
  const finalButtonText = buttonText || selectedPreset.buttonText;
  const finalTo = to || selectedPreset.to || "/contact";
  const finalPoints = points || selectedPreset.points || [];

  return (
    <section
      className={`reusable-cta ${className}`.trim()}
      aria-labelledby={`cta-title-${selectedPreset.id}`}
    >
      <div className="container">
        <div className="reusable-cta__box">
          <div className="reusable-cta__content">
            {finalEyebrow && (
              <span className="reusable-cta__eyebrow">{finalEyebrow}</span>
            )}

            <h2
              id={`cta-title-${selectedPreset.id}`}
              className="reusable-cta__title"
            >
              {finalTitle}
            </h2>

            {finalDescription && (
              <p className="reusable-cta__description">{finalDescription}</p>
            )}

            {finalPoints.length > 0 && (
              <div className="reusable-cta__points">
                {finalPoints.map((point) => (
                  <span key={point} className="reusable-cta__point">
                    <FaCheckCircle
                      aria-hidden="true"
                      className="reusable-cta__point-icon"
                    />
                    {point}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="reusable-cta__action">
            <Link
              to={finalTo}
              className="reusable-cta__btn"
              aria-label={finalButtonText}
            >
              <span>{finalButtonText}</span>
              <FaArrowRight
                aria-hidden="true"
                className="reusable-cta__btn-icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export { REUSABLE_CTAS, CTA_PRESETS };
export default ReusableCTA;
