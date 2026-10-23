import "./VisionMission.css";

import {
  FaEye,
  FaGem,
} from "react-icons/fa";

import missionIcon from "../../../assets/images/about/mission-icon.png";


const items = [
  {
    id: "mission",
    iconSrc: missionIcon,
    title: "Our Mission",
    text:
      "To help businesses grow through stronger brands, smarter digital experiences, and performance-driven marketing that create measurable impact.",
  },

  {
    id: "vision",
    Icon: FaEye,
    title: "Our Vision",
    text:
      "To become a trusted growth partner for ambitious businesses by bringing strategy, creativity, technology, and marketing together under one integrated approach.",
  },

  {
    id: "values",
    Icon: FaGem,
    title: "Our Values",
    text:
      "We believe in clarity, accountability, collaboration, and continuous improvement-creating work that is purposeful, transparent, and built for long-term value.",
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
            WHAT DRIVES D-GATE
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
                  {item.iconSrc ? (
                    <img
                      src={item.iconSrc}
                      alt={item.title}
                      className="about-principles__custom-icon"
                    />
                  ) : (
                    <Icon />
                  )}
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
