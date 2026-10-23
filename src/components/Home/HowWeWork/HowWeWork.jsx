import "./HowWeWork.css";

import {
  FaSearch,
  FaBullseye,
  FaPalette,
  FaCode,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";

/* =========================================================
   HOW WE WORK - 6 STEPS DATA
======================================================== */

const steps = [
  {
    id: "discover",
    title: "Discover",
    description:
      "Understand the business, the audience, the category and the real challenge.",
    Icon: FaSearch,
  },
  {
    id: "define",
    title: "Define",
    description:
      "Turn what we learn into a focused strategic direction.",
    Icon: FaBullseye,
  },
  {
    id: "create",
    title: "Create",
    description:
      "Shape the identity, ideas, stories and experiences that bring the direction to life.",
    Icon: FaPalette,
  },
  {
    id: "build",
    title: "Build",
    description:
      "Produce and develop the assets, platforms and systems required to take the idea to market.",
    Icon: FaCode,
  },
  {
    id: "activate",
    title: "Activate",
    description:
      "Launch across the right channels with intent, consistency and precision.",
    Icon: FaRocket,
  },
  {
    id: "improve",
    title: "Improve",
    description:
      "Read the signals, learn from performance and keep making the work stronger.",
    Icon: FaChartLine,
  },
];

/* =========================================================
   COMPONENT
========================================================= */

function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="home-how-we-work"
      aria-labelledby="how-we-work-title"
    >
      <div className="home-how-we-work__container">
        <div className="home-how-we-work__grid">

          {/* LEFT: HEADING & NARRATIVE */}
          <div className="home-how-we-work__heading">
            <span className="home-how-we-work__eyebrow">
              How We Work
            </span>

            <h2
              id="how-we-work-title"
              className="home-how-we-work__title"
            >
              Clarity before creativity.{" "}
              <span>Purpose before production.</span>
            </h2>

            <p className="home-how-we-work__intro">
              A disciplined approach that connects insight to execution. We shape the strategy, build the foundation, and launch with precision so every step delivers real impact.
            </p>
          </div>

          {/* RIGHT: SINGLE CARD WITH ALL 6 PHASES (NO NUMBERING) */}
          <div className="home-how-we-work__card-wrapper">
            <div className="home-how-we-work__card">
              <div className="home-how-we-work__card-header">
                <span className="home-how-we-work__card-badge">
                  Process & Methodology
                </span>
              </div>

              <ul className="home-how-we-work__list">
                {steps.map((step) => {
                  const Icon = step.Icon;

                  return (
                    <li
                      key={step.id}
                      className="home-how-we-work__list-item"
                    >
                      <div
                        className="home-how-we-work__item-icon"
                        aria-hidden="true"
                      >
                        <Icon />
                      </div>

                      <div className="home-how-we-work__item-body">
                        <h3 className="home-how-we-work__item-title">
                          {step.title}
                        </h3>

                        <p className="home-how-we-work__item-desc">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
