import "./TrustProof.css";

import {
  FaGoogle,
  FaHandshake,
  FaBuilding,
  FaAward,
} from "react-icons/fa";


const trustData = [
  {
    id: "rating",
    Icon: FaGoogle,
    value: "4.8",
    label: "Google Rating",
  },

  {
    id: "retention",
    Icon: FaHandshake,
    value: "85%+",
    label: "Client Retention",
  },

  {
    id: "brands",
    Icon: FaBuilding,
    value: "250+",
    label: "Trusted Brands",
  },

  {
    id: "experience",
    Icon: FaAward,
    value: "10+",
    label: "Years Of Team Experience",
  },
];


function TrustProof() {
  return (
    <section
      className="home-trust"
      aria-label="DGATE trust and credibility"
    >
      <div className="container">

        <div className="home-trust__grid">

          {trustData.map((item) => {

            const Icon = item.Icon;

            return (
              <div
                className="home-trust__item"
                key={item.id}
              >
                <Icon aria-hidden="true" />

                <strong>
                  {item.value}
                </strong>

                <span>
                  {item.label}
                </span>
              </div>
            );

          })}

        </div>

      </div>
    </section>
  );
}


export default TrustProof;