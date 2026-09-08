import "./Industries.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import {
  automotive,
  banking,
  healthcare,
  manufacturing,
  retail,
  telecom,
} from "../../../assets/images/home/industries";

const industries = [
  {
    id: "automotive",
    title: "Automotive",
    image: automotive,
  },
  {
    id: "healthcare",
    title: "Healthcare",
    image: healthcare,
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    image: manufacturing,
  },
  {
    id: "banking",
    title: "Banking & Finance",
    image: banking,
  },
  {
    id: "retail",
    title: "Retail & E-Commerce",
    image: retail,
  },
  {
    id: "telecom",
    title: "Telecom",
    image: telecom,
  },
];

function Industries() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth <= 700) {
        setVisibleCount(1);
      } else if (window.innerWidth <= 1100) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();

    window.addEventListener(
      "resize",
      updateVisibleCount
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateVisibleCount
      );
    };
  }, []);

  const nextSlide = () => {
    setStartIndex(
      (current) =>
        (current + visibleCount) %
        industries.length
    );
  };

  const prevSlide = () => {
    setStartIndex(
      (current) =>
        (
          current -
          visibleCount +
          industries.length
        ) % industries.length
    );
  };

  const visibleIndustries =
    Array.from(
      { length: visibleCount },
      (_, index) =>
        industries[
          (startIndex + index) %
          industries.length
        ]
    );

  return (
    <section className="home-industries">

      <div className="container">

        <div className="home-industries__layout">

          <div className="home-industries__content">

            <span className="home-industries__tag">
              INDUSTRIES
            </span>

            <h2>
              Industries
              <br />
              We Serve
            </h2>

            <p>
              Tailored solutions for diverse
              industry challenges.
            </p>

            <Link
              to="/industries#industries-grid"
              className="home-industries__button"
            >
              VIEW ALL INDUSTRIES
              <span aria-hidden="true">→</span>
            </Link>

          </div>

          <div className="home-industries__slider">

            <button
              type="button"
              className="home-industries__nav home-industries__nav--prev"
              onClick={prevSlide}
              aria-label="Previous industries"
            >
              <FaArrowLeft />
            </button>

            <div className="home-industries__cards">

              {visibleIndustries.map((item) => (
                <article
                  className="home-industries__card"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt={`${item.title} industry`}
                    loading="lazy"
                  />

                  <div className="home-industries__overlay">
                    <h3>
                      {item.title}
                    </h3>
                  </div>
                </article>
              ))}

            </div>

            <button
              type="button"
              className="home-industries__nav home-industries__nav--next"
              onClick={nextSlide}
              aria-label="Next industries"
            >
              <FaArrowRight />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Industries;