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
    title: "Visibility → Relevance",
    description:
      "Every solution begins with clear business objectives, research and a focused digital strategy.",
  },
  {
    id: "technology",
    Icon: FaRocket,
    title: "Traffic → Demand",
    description:
      "Modern digital platforms built for performance, scalability and changing business needs.",
  },
  {
    id: "performance",
    Icon: FaChartLine,
    title: "Websites → Experiences",
    description:
      "Marketing and optimisation focused on measurable outcomes, leads and business growth.",
  },
  {
    id: "creative",
    Icon: FaPalette,
    title: "Campaigns → Growth",
    description:
      "Strong branding and user experiences designed to make businesses stand out.",
  },
  {
    id: "data",
    Icon: FaDatabase,
    title: "Technology → Advantage",
    description:
      "Analytics and performance insights that help improve campaigns and customer journeys.",
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
            Your Business Has Evolved.
          </span>

          <h2 id="home-expertise-title">
            Has Your Brand Kept Up?
            <strong></strong>
          </h2>

          <p>
            Markets shift. Customer expectations rise. Technology changes the way people discover, evaluate and choose businesses.
What worked yesterday may not create the same advantage tomorrow.
A brand cannot exist separately from the experience it creates.
A digital experience cannot exist separately from the business behind it.
And growth cannot be separated from either.
<br></br>
<strong>D-GATE connects the pieces.</strong>
<h3>We help businesses move from:</h3>

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