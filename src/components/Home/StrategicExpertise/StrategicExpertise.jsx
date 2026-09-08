import "./StrategicExpertise.css";

import {
  FaLightbulb,
  FaRocket,
  FaChartLine,
  FaPalette,
  FaDatabase,
  FaHandshake,
} from "react-icons/fa";


const expertise = [
  {
    id: "strategy",
    Icon: FaLightbulb,
    title: "Strategic Expertise",
    description:
      "Every solution begins with clear business objectives, research and a focused digital strategy.",
  },

  {
    id: "technology",
    Icon: FaRocket,
    title: "Future-Ready Technology",
    description:
      "Modern digital platforms built for performance, scalability and changing business needs.",
  },

  {
    id: "performance",
    Icon: FaChartLine,
    title: "Performance-Driven Growth",
    description:
      "Marketing and optimisation focused on measurable outcomes, leads and business growth.",
  },

  {
    id: "creative",
    Icon: FaPalette,
    title: "Creative Solutions",
    description:
      "Strong branding and user experiences designed to make businesses stand out.",
  },

  {
    id: "data",
    Icon: FaDatabase,
    title: "Data-Driven Decisions",
    description:
      "Analytics and performance insights that help improve campaigns and customer journeys.",
  },

  {
    id: "partnership",
    Icon: FaHandshake,
    title: "Long-Term Partnership",
    description:
      "A collaborative approach focused on consistent value beyond individual projects.",
  },
];


function StrategicExpertise() {
  return (
    <section
      className="home-expertise"
      aria-labelledby="home-expertise-title"
    >
      <div className="container">

        <div className="home-expertise__heading">

          <span>
            WHY DGATE
          </span>

          <h2 id="home-expertise-title">
            Expertise Built Around
            <strong> Business Growth</strong>
          </h2>

          <p>
            Strategy, creativity, technology and performance
            working together as one integrated digital
            ecosystem.
          </p>

        </div>


        <div className="home-expertise__grid">

          {expertise.map((item) => {

            const Icon = item.Icon;

            return (
              <article
                className="home-expertise__card"
                key={item.id}
              >
                <div
                  className="home-expertise__icon"
                  aria-hidden="true"
                >
                  <Icon />
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>
              </article>
            );

          })}

        </div>

      </div>
    </section>
  );
}


export default StrategicExpertise;