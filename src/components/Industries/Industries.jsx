import { useState } from "react";
import "./Industries.css";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import {
  automotive,
  banking,
  healthcare,
  manufacturing,
  retail,
  telecom,
} from "../../assets/images/industries";

const pages = [
  [
    { title: "Automotive", image: automotive },
    { title: "Healthcare", image: healthcare },
    { title: "Manufacturing", image: manufacturing },
  ],
  [
    { title: "Banking & Finance", image: banking },
    { title: "Retail & E-Commerce", image: retail },
    { title: "Telecom", image: telecom },
  ],
];

export default function Industries() {
  const [page, setPage] = useState(0);

  const nextSlide = () => {
    setPage((prev) => (prev + 1) % pages.length);
  };

  const prevSlide = () => {
    setPage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  return (
    <section className="industries">

      <div className="industries-left">

        <span className="industry-tag">INDUSTRIES</span>

        <h2>
          Industries <br /> We Serve
        </h2>

        <p>
          Tailored solutions for diverse industry challenges.
        </p>

        <button className="industry-btn">
          VIEW ALL INDUSTRIES →
        </button>

      </div>

      <div className="industries-right">

        <button className="nav-btn left" onClick={prevSlide}>
          <FaArrowLeft />
        </button>

        <div className="industry-slider">

          {pages[page].map((item, index) => (
            <div className="industry-card" key={index}>

              <img src={item.image} alt={item.title} />

              <div className="overlay">
                <h3>{item.title}</h3>
              </div>

            </div>
          ))}

        </div>

        <button className="nav-btn right" onClick={nextSlide}>
          <FaArrowRight />
        </button>

      </div>

    </section>
  );
}