import "./VisionMission.css";

import {
  FaBullseye,
  FaEye,
  FaGem,
} from "react-icons/fa";


const items = [
  {
    id: "mission",
    Icon: FaBullseye,
    title: "Our Mission",
    text:
      "To build impactful brands, high-performing websites, and result-driven digital marketing solutions that help businesses grow with clarity, consistency, and measurable success.",
  },

  {
    id: "vision",
    Icon: FaEye,
    title: "Our Vision",
    text:
      "To become a trusted digital growth partner, uniting branding, technology, and marketing to help businesses stand out and scale globally.",
  },

  {
    id: "values",
    Icon: FaGem,
    title: "Our Values",
    text:
      "We believe in strategic thinking, transparency, and collaboration — aligning branding, web, and marketing efforts with real business goals and long-term value.",
  },
];


function VisionMission() {

  return (
    <section
      className="about-principles"
      aria-labelledby="about-principles-title"
    >

      <div className="container">

        <div className="about-principles__heading">

          <span>
            WHAT DRIVES DGATE
          </span>

          <h2 id="about-principles-title">
            Mission Vision
            <strong>
              {" "}Values
            </strong>
          </h2>

        </div>


        <div className="about-principles__grid">

          {items.map((item) => {

            const Icon = item.Icon;

            return (
              <article
                className="about-principles__card"
                key={item.id}
              >

                <div
                  className="about-principles__icon"
                  aria-hidden="true"
                >
                  <Icon />
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </article>
            );

          })}

        </div>

      </div>

    </section>
  );
}


export default VisionMission;