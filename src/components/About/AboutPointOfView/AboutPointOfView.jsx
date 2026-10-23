import "./AboutPointOfView.css";

import { FaLightbulb } from "react-icons/fa";

const thinkPrinciples = [
  {
    id: "curious",
    title: "Stay curious",
    desc: "Assumptions are easy. Better questions create better work.",
  },
  {
    id: "relevant",
    title: "Make it relevant",
    desc: "Creativity only matters when it means something to the people it is designed for.",
  },
  {
    id: "system",
    title: "Connect the system",
    desc: "Brand, experience and growth should reinforce each other.",
  },
  {
    id: "outcome",
    title: "Respect the outcome",
    desc: "Beautiful work is stronger when it also performs.",
  },
  {
    id: "evolving",
    title: "Keep evolving",
    desc: "Markets change. Good partners keep learning with them.",
  },
];

function AboutPointOfView() {
  return (
    <section className="about-pov" aria-labelledby="about-pov-title">
      <div className="container">
        <span className="about-pov__eyebrow">
          Our Point of View
        </span>

        <div className="about-pov__grid">

          {/* =====================================================
              LEFT COLUMN: OUR POINT OF VIEW
          ===================================================== */}
          <div className="about-pov__left">
            <h2 id="about-pov-title" className="about-pov__title">
              Marketing has become noisier.
              <br />
              <span>We make it clearer.</span>
            </h2>

            <div className="about-pov__line" aria-hidden="true" />

            <p className="about-pov__lead">
              We help businesses cut through complexity by finding the right idea, message, experience and growth system.
            </p>

            <div className="about-pov__transformation">
              <h3 className="about-pov__trans-title">
                What Transformation Means to Us
              </h3>

              <p className="about-pov__trans-p">
                Transformation is not about looking new. It is about creating meaningful change in how a business is understood, experienced and chosen.
              </p>

              <p className="about-pov__trans-p">
                Our role is to identify where change matters most and build around it.
              </p>
            </div>
          </div>

          {/* =====================================================
              RIGHT COLUMN: HOW WE THINK (HOME SERVICES CARD DESIGN)
          ===================================================== */}
          <div className="about-pov__right">
            <article className="home-services__card about-pov__card">
              {/* CARD HEADER */}
              <div className="home-services__card-header">
                <div className="home-services__icon" aria-hidden="true">
                  <FaLightbulb />
                </div>
                <div className="home-services__heading">
                  <h3>How We Think</h3>
                </div>
              </div>

              {/* CLEAN LIST (NO BULLET POINTS) */}
              <ul className="home-services__list about-pov__list">
                {thinkPrinciples.map((item) => (
                  <li key={item.id} className="about-pov__list-item">
                    <div className="about-pov__item-text">
                      <strong className="about-pov__item-title">{item.title}</strong>
                      <span className="about-pov__item-sep"> — </span>
                      <span className="about-pov__item-desc">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* CORNER ACCENT CIRCLE */}
              <div className="home-services__corner" aria-hidden="true" />
            </article>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutPointOfView;
