import "./Services.css";

import {
  FaCogs,
  FaShieldAlt,
  FaCloud,
  FaChartLine,
} from "react-icons/fa";

import {
  MdEngineering,
  MdOutlineLightbulb,
} from "react-icons/md";

const services = [
  {
    id: "digital-engineering",
    icon: MdEngineering,
    title: "Digital Engineering",
    desc: "Advanced solutions for digital transformation.",
  },
  {
    id: "product-engineering",
    icon: FaCogs,
    title: "Product Engineering",
    desc: "End-to-end product development from concept to reality.",
  },
  {
    id: "quality-engineering",
    icon: FaShieldAlt,
    title: "Quality Engineering",
    desc: "Ensure quality and reliability at every stage.",
  },
  {
    id: "it-consulting",
    icon: MdOutlineLightbulb,
    title: "IT Consulting",
    desc: "Strategic consulting to accelerate business growth.",
  },
  {
    id: "cloud-engineering",
    icon: FaCloud,
    title: "Cloud Engineering",
    desc: "Scalable cloud solutions for your business.",
  },
  {
    id: "data-engineering",
    icon: FaChartLine,
    title: "Data Engineering",
    desc: "Transform data into valuable business insights.",
  },
];

function Services() {
  return (
    <section
      className="home-services"
      aria-labelledby="home-services-title"
    >
      <div className="container">

        <h2
          id="home-services-title"
          className="home-services__title"
        >
          Our Core Services
        </h2>

        <div className="home-services__title-line" />

        <div className="home-services__grid">

          {services.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="home-services__card"
                key={item.id}
              >
                <div
                  className="home-services__icon"
                  aria-hidden="true"
                >
                  <Icon />
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.desc}
                </p>
              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Services;