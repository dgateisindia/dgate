import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Industries.css";

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


const pages = [

  [
    {
      title: "Automotive",
      image: automotive,
    },

    {
      title: "Healthcare",
      image: healthcare,
    },

    {
      title: "Manufacturing",
      image: manufacturing,
    },
  ],

  [
    {
      title: "Banking & Finance",
      image: banking,
    },

    {
      title: "Retail & E-Commerce",
      image: retail,
    },

    {
      title: "Telecom",
      image: telecom,
    },
  ],

];


function Industries() {

  const [page, setPage] = useState(0);

  const navigate = useNavigate();


  /* ================================
     NEXT SLIDE
  ================================= */

  const nextSlide = () => {

    setPage(
      (prev) =>
        (prev + 1) % pages.length
    );

  };


  /* ================================
     PREVIOUS SLIDE
  ================================= */

  const prevSlide = () => {

    setPage(
      (prev) =>
        (prev - 1 + pages.length) %
        pages.length
    );

  };


  /* ================================
     VIEW ALL INDUSTRIES
  ================================= */

  const viewAllIndustries = () => {

    navigate(
      "/industries#industries-grid"
    );

  };


  return (

    <section className="home-industries">


      {/* ============================
          LEFT CONTENT
      ============================ */}

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


        <button

          type="button"

          className="home-industry-btn"

          onClick={viewAllIndustries}

        >

          VIEW ALL INDUSTRIES →

        </button>


      </div>


      {/* ============================
          RIGHT INDUSTRY SLIDER
      ============================ */}

      <div className="home-industries-right">


        {/* PREVIOUS BUTTON */}

        <button

          type="button"

          className="home-nav-btn home-left"

          onClick={prevSlide}

          aria-label="Previous industries"

        >

          <FaArrowLeft />

        </button>


        {/* INDUSTRY CARDS */}

        <div className="home-industry-slider">


          {pages[page].map(
            (item, index) => (

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

            )
          )}


        </div>


        {/* NEXT BUTTON */}

        <button

          type="button"

          className="home-nav-btn home-right"

          onClick={nextSlide}

          aria-label="Next industries"

        >

          <FaArrowRight />

        </button>


      </div>


    </section>

  );

}


export default Industries;