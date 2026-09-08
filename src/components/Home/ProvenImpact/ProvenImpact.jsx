import "./ProvenImpact.css";

import {
  FaChartLine,
  FaBullseye,
  FaUsers,
  FaRocket,
} from "react-icons/fa";


const impactData = [
  {
    id: "roi",
    Icon: FaChartLine,
    value: "3X+",
    title: "Average ROI Delivered",
  },

  {
    id: "leads",
    Icon: FaBullseye,
    value: "4X",
    title: "Lead Growth",
  },

  {
    id: "retention",
    Icon: FaUsers,
    value: "95%+",
    title: "Client Retention",
  },

  {
    id: "brands",
    Icon: FaRocket,
    value: "250+",
    title: "Brands Supported",
  },
];


function ProvenImpact() {
  return (
    <section
      className="home-impact"
      aria-labelledby="home-impact-title"
    >
      <div className="container">

        <div className="home-impact__layout">


          <div className="home-impact__heading">

            <span>
              PROVEN IMPACT
            </span>

            <h2 id="home-impact-title">
              Numbers That Reflect
              <strong> Business Growth</strong>
            </h2>

            <p>
              Our strategies are designed around measurable
              outcomes, stronger customer journeys and
              sustainable digital performance.
            </p>

          </div>


          <div className="home-impact__grid">

            {impactData.map((item) => {

              const Icon = item.Icon;

              return (
                <div
                  className="home-impact__item"
                  key={item.id}
                >
                  <Icon aria-hidden="true" />

                  <strong>
                    {item.value}
                  </strong>

                  <span>
                    {item.title}
                  </span>
                </div>
              );

            })}

          </div>

        </div>

      </div>
    </section>
  );
}


export default ProvenImpact;