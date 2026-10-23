import "./DgateProcess.css";
import { FaRocket } from "react-icons/fa";

/* =========================================================
   THE D-GATE PROCESS — 6 STEPS (NO NUMBERS)
========================================================= */

const processSteps = [
  {
    id: "discover",
    title: "Discover",
    description:
      "Understand the business, the audience, the category and the real challenge.",
    iconType: "search",
  },
  {
    id: "define",
    title: "Define",
    description:
      "Turn what we learn into a focused strategic direction.",
    iconType: "target",
  },
  {
    id: "create",
    title: "Create",
    description:
      "Shape the identity, ideas, stories and experiences that bring the direction to life.",
    iconType: "palette",
  },
  {
    id: "build",
    title: "Build",
    description:
      "Produce and develop the assets, platforms and systems required to take the idea to market.",
    iconType: "code",
  },
  {
    id: "activate",
    title: "Activate",
    description:
      "Launch across the right channels with intent, consistency and precision.",
    iconType: "rocket",
  },
  {
    id: "improve",
    title: "Improve",
    description:
      "Read the signals, learn from performance and keep making the work stronger.",
    iconType: "chart",
  },
];

/* Helper to render the exact pixel-perfect icon for each card */
function renderCardIcon(type) {
  switch (type) {
    case "search":
      return (
        <svg
          className="dgate-card__icon-svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="10.5" cy="10.5" r="6.5" />
          <line x1="15.5" y1="15.5" x2="21" y2="21" />
        </svg>
      );
    case "target":
      return (
        <svg
          className="dgate-card__icon-svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
        </svg>
      );
    case "palette":
      return (
        <svg
          className="dgate-card__icon-svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 3.58 8 8 8h1.25c.69 0 1.25-.56 1.25-1.25 0-.35-.14-.66-.37-.89-.23-.23-.38-.56-.38-.91 0-.69.56-1.25 1.25-1.25H16c3.31 0 6-2.69 6-6 0-4.97-4.48-9-10-9zM6.5 11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3.5-4c-.83 0-1.5-.67-1.5-1.5S9.17 4.5 10 4.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 0c-.83 0-1.5-.67-1.5-1.5S13.67 4.5 14.5 4.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3.5 4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>
      );
    case "code":
      return (
        <svg
          className="dgate-card__icon-svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="7 8 3 12 7 16" />
          <line x1="14" y1="5" x2="10" y2="19" />
          <polyline points="17 8 21 12 17 16" />
        </svg>
      );
    case "rocket":
      return <FaRocket className="dgate-card__icon-svg" />;
    case "chart":
      return (
        <svg
          className="dgate-card__icon-svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4 19h16v2H2V4h2v15z" />
          <path
            d="M7 14h2.2v5H7v-5zm4.2-5h2.2v10h-2.2V9zm4.2-4h2.2v14h-2.2V5z"
            opacity="0.65"
          />
          <path d="M6 13l4.5-4.5 3 3 5-5.5 1.4 1.4-6.4 7.1-3-3L7.4 14.4z" />
        </svg>
      );
    default:
      return null;
  }
}

function DgateProcess() {
  const stepMap = {};
  processSteps.forEach((s) => {
    stepMap[s.id] = s;
  });

  return (
    <section
      className="dgate-process-section"
      id="process"
      aria-labelledby="dgate-process-heading"
    >
      <div className="dgate-process__container">
        <div className="dgate-process__grid">
          {/* =========================================================
              LEFT COLUMN: CONTENT (HEADING & NARRATIVE)
          ========================================================= */}
          <div className="dgate-process__heading-col">
            <span className="dgate-process__eyebrow">
              PROCESS & METHODOLOGY
            </span>

            <h2 id="dgate-process-heading" className="dgate-process__title">
              A clear process for meaningful progress.
            </h2>

            <p className="dgate-process__intro">
              From insight to impact, our process brings structure, creativity
              and momentum together — built to turn big ideas into real results.
            </p>
          </div>

          {/* =========================================================
              RIGHT COLUMN: COMPACT CIRCULAR CHART (TOP-ALIGNED)
          ========================================================= */}
          <div className="dgate-process__chart-col">
            <div className="dgate-chart-wrapper">
              <div className="dgate-chart">
                {/* SVG DOTTED ORBIT & SPOKES */}
                <svg
                  className="dgate-chart__svg"
                  viewBox="0 0 680 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  {/* Single Clean Dotted Orbit Circle */}
                  <circle
                    cx="340"
                    cy="200"
                    r="115"
                    className="dgate-orbit-outer"
                  />

                  {/* Connecting Spoke Lines (Nodes to Cards) */}
                  {/* Spoke 01: Discover (Top Left) */}
                  <line
                    x1="252"
                    y1="126"
                    x2="190"
                    y2="82"
                    className="dgate-spoke-line"
                  />
                  {/* Spoke 02: Define (Top Right) */}
                  <line
                    x1="428"
                    y1="126"
                    x2="490"
                    y2="82"
                    className="dgate-spoke-line"
                  />
                  {/* Spoke 03: Create (Mid Right) */}
                  <line
                    x1="455"
                    y1="200"
                    x2="490"
                    y2="200"
                    className="dgate-spoke-line"
                  />
                  {/* Spoke 04: Build (Bottom Right) */}
                  <line
                    x1="428"
                    y1="274"
                    x2="490"
                    y2="318"
                    className="dgate-spoke-line"
                  />
                  {/* Spoke 05: Activate (Bottom Left) */}
                  <line
                    x1="252"
                    y1="274"
                    x2="190"
                    y2="318"
                    className="dgate-spoke-line"
                  />
                  {/* Spoke 06: Improve (Mid Left) */}
                  <line
                    x1="225"
                    y1="200"
                    x2="190"
                    y2="200"
                    className="dgate-spoke-line"
                  />

                  {/* 6 ORBITAL GLOWING NODES */}
                  {/* Node 01 - Discover (~140°) */}
                  <g className="dgate-orbit-node" transform="translate(252, 126)">
                    <circle r="5.5" className="dgate-node-halo" />
                    <circle r="3.2" className="dgate-node-dot" />
                  </g>

                  {/* Node 02 - Define (~40°) */}
                  <g className="dgate-orbit-node" transform="translate(428, 126)">
                    <circle r="5.5" className="dgate-node-halo" />
                    <circle r="3.2" className="dgate-node-dot" />
                  </g>

                  {/* Node 03 - Create (0° / 3 o'clock) */}
                  <g className="dgate-orbit-node" transform="translate(455, 200)">
                    <circle r="5.5" className="dgate-node-halo" />
                    <circle r="3.2" className="dgate-node-dot" />
                  </g>

                  {/* Node 04 - Build (~320°) */}
                  <g className="dgate-orbit-node" transform="translate(428, 274)">
                    <circle r="5.5" className="dgate-node-halo" />
                    <circle r="3.2" className="dgate-node-dot" />
                  </g>

                  {/* Node 05 - Activate (~220°) */}
                  <g className="dgate-orbit-node" transform="translate(252, 274)">
                    <circle r="5.5" className="dgate-node-halo" />
                    <circle r="3.2" className="dgate-node-dot" />
                  </g>

                  {/* Node 06 - Improve (180° / 9 o'clock) */}
                  <g className="dgate-orbit-node" transform="translate(225, 200)">
                    <circle r="5.5" className="dgate-node-halo" />
                    <circle r="3.2" className="dgate-node-dot" />
                  </g>
                </svg>

                {/* =========================================================
                    CENTER HUB: "The D-GATE Process"
                ========================================================= */}
                <div className="dgate-center-hub">
                  <div className="dgate-center-hub__disc">
                    <span className="dgate-center-hub__subtitle">The</span>
                    <span className="dgate-center-hub__brand">D-GATE</span>
                    <span className="dgate-center-hub__process">Process</span>
                    <span
                      className="dgate-center-hub__accent-bar"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* =========================================================
                    COMPACT CARDS (TOP-ALIGNED, NO NUMBERS)
                ========================================================= */}

                {/* Card 01: Discover (Top Left) */}
                <article className="dgate-card dgate-card--discover">
                  <div
                    className="dgate-card__icon-wrapper"
                    aria-hidden="true"
                  >
                    {renderCardIcon(stepMap.discover.iconType)}
                  </div>
                  <div className="dgate-card__body">
                    <h3 className="dgate-card__title">
                      {stepMap.discover.title}
                    </h3>
                    <p className="dgate-card__desc">
                      {stepMap.discover.description}
                    </p>
                  </div>
                </article>

                {/* Card 06: Improve (Middle Left) */}
                <article className="dgate-card dgate-card--improve">
                  <div
                    className="dgate-card__icon-wrapper"
                    aria-hidden="true"
                  >
                    {renderCardIcon(stepMap.improve.iconType)}
                  </div>
                  <div className="dgate-card__body">
                    <h3 className="dgate-card__title">
                      {stepMap.improve.title}
                    </h3>
                    <p className="dgate-card__desc">
                      {stepMap.improve.description}
                    </p>
                  </div>
                </article>

                {/* Card 05: Activate (Bottom Left) */}
                <article className="dgate-card dgate-card--activate">
                  <div
                    className="dgate-card__icon-wrapper"
                    aria-hidden="true"
                  >
                    {renderCardIcon(stepMap.activate.iconType)}
                  </div>
                  <div className="dgate-card__body">
                    <h3 className="dgate-card__title">
                      {stepMap.activate.title}
                    </h3>
                    <p className="dgate-card__desc">
                      {stepMap.activate.description}
                    </p>
                  </div>
                </article>

                {/* Card 02: Define (Top Right) */}
                <article className="dgate-card dgate-card--define">
                  <div
                    className="dgate-card__icon-wrapper"
                    aria-hidden="true"
                  >
                    {renderCardIcon(stepMap.define.iconType)}
                  </div>
                  <div className="dgate-card__body">
                    <h3 className="dgate-card__title">
                      {stepMap.define.title}
                    </h3>
                    <p className="dgate-card__desc">
                      {stepMap.define.description}
                    </p>
                  </div>
                </article>

                {/* Card 03: Create (Middle Right) */}
                <article className="dgate-card dgate-card--create">
                  <div
                    className="dgate-card__icon-wrapper"
                    aria-hidden="true"
                  >
                    {renderCardIcon(stepMap.create.iconType)}
                  </div>
                  <div className="dgate-card__body">
                    <h3 className="dgate-card__title">
                      {stepMap.create.title}
                    </h3>
                    <p className="dgate-card__desc">
                      {stepMap.create.description}
                    </p>
                  </div>
                </article>

                {/* Card 04: Build (Bottom Right) */}
                <article className="dgate-card dgate-card--build">
                  <div
                    className="dgate-card__icon-wrapper"
                    aria-hidden="true"
                  >
                    {renderCardIcon(stepMap.build.iconType)}
                  </div>
                  <div className="dgate-card__body">
                    <h3 className="dgate-card__title">
                      {stepMap.build.title}
                    </h3>
                    <p className="dgate-card__desc">
                      {stepMap.build.description}
                    </p>
                  </div>
                </article>
              </div>
            </div>

            {/* =========================================================
                MOBILE VIEW FOR SMALL SCREENS (< 992px)
            ========================================================= */}
            <div className="dgate-process__mobile">
              <div className="dgate-process__mobile-hub">
                <div className="dgate-center-hub__disc">
                  <span className="dgate-center-hub__subtitle">The</span>
                  <span className="dgate-center-hub__brand">D-GATE</span>
                  <span className="dgate-center-hub__process">Process</span>
                  <span
                    className="dgate-center-hub__accent-bar"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div className="dgate-process__mobile-list">
                {processSteps.map((step) => (
                  <article key={step.id} className="dgate-process__mobile-card">
                    <div className="dgate-process__mobile-node" aria-hidden="true">
                      <span className="dgate-process__mobile-dot" />
                    </div>
                    <div className="dgate-card">
                      <div
                        className="dgate-card__icon-wrapper"
                        aria-hidden="true"
                      >
                        {renderCardIcon(step.iconType)}
                      </div>
                      <div className="dgate-card__body">
                        <h3 className="dgate-card__title">{step.title}</h3>
                        <p className="dgate-card__desc">{step.description}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DgateProcess;
