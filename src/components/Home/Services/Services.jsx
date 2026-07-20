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
    icon: <MdEngineering />,
    title: "Digital Engineering",
    desc: "Advanced solutions for digital transformation.",
  },
  {
    icon: <FaCogs />,
    title: "Product Engineering",
    desc: "End-to-end product development from concept to reality.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Quality Engineering",
    desc: "Ensure quality and reliability at every stage.",
  },
  {
    icon: <MdOutlineLightbulb />,
    title: "IT Consulting",
    desc: "Strategic consulting to accelerate business growth.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Engineering",
    desc: "Scalable cloud solutions for your business.",
  },
  {
    icon: <FaChartLine />,
    title: "Data Engineering",
    desc: "Transform data into valuable business insights.",
  },
];

function Services() {
  return (
    <section className="home-services">

      <h2>
        Our Core <span>Services</span>
      </h2>

      <div className="home-title-line"></div>

      <div className="home-services-grid">

        {services.map((item, index) => (

          <div
            className="home-service-card"
            key={index}
          >

            <div className="home-service-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Services;