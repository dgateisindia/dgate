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
} from "../../../assets/images/home/industries";

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

function Industries() {

  const [page, setPage] = useState(0);

  const nextSlide = () => {
    setPage((prev) => (prev + 1) % pages.length);
  };

  const prevSlide = () => {
    setPage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  return (

    <section className="home-industries">

      {/* LEFT */}

      <div className="home-industries-left">

        <span className="home-industry-tag">
          INDUSTRIES
        </span>

        <h2>

          Industries
          <br />
          We Serve

        </h2>

        <p>

          Tailored solutions
          for diverse industry
          challenges.

        </p>

        <button className="home-industry-btn">

          VIEW ALL INDUSTRIES →

        </button>

      </div>

      {/* RIGHT */}

      <div className="home-industries-right">

        <button
          className="home-nav-btn home-left"
          onClick={prevSlide}
        >

          <FaArrowLeft />

        </button>

        <div className="home-industry-slider">

          {pages[page].map((item, index) => (

            <div
              className="home-industry-card"
              key={index}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="home-overlay">

                <h3>

                  {item.title}

                </h3>

              </div>

            </div>

          ))}

        </div>

        <button
          className="home-nav-btn home-right"
          onClick={nextSlide}
        >

          <FaArrowRight />

        </button>

      </div>

    </section>

  );

}

export default Industries;