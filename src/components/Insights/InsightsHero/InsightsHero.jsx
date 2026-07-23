import "./InsightsHero.css";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { Link } from "react-router-dom";

import gsap from "gsap";

import { FaSearch } from "react-icons/fa";

import InsightsCanvas from "./InsightsCanvas";

import {
  insightsHero,
} from "../../../assets/images/Insights/hero";


function InsightsHero() {

  const heroRef = useRef(null);

  const [searchTerm, setSearchTerm] =
    useState("");


  useEffect(() => {

    const ctx = gsap.context(() => {

      const timeline = gsap.timeline({

        defaults: {
          ease: "power3.out",
        },

      });

      timeline.from(
        ".insights-breadcrumb",
        {
          x: -25,
          opacity: 0,
          duration: 0.55,
        }
      );


      timeline.from(
        ".insights-title",
        {
          y: 35,
          opacity: 0,
          duration: 0.75,
        },
        "-=0.2"
      );

      timeline.from(
        ".insights-title-line",
        {
          width: 0,
          duration: 0.45,
        },
        "-=0.2"
      );

      timeline.from(
        ".insights-description",
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.15"
      );


      timeline.from(
        ".insights-search-wrapper",
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.2"
      );


      timeline.from(
        ".insights-image-side",
        {
          x: 45,
          opacity: 0,
          duration: 0.9,
        },
        "-=0.7"
      );

    }, heroRef);


    return () => {

      ctx.revert();

    };

  }, []);


  const handleSearch = (event) => {

    event.preventDefault();

    const value =
      searchTerm.trim();

    if (!value) return;

    console.log(
      "Searching insights:",
      value
    );

  };


  return (

    <section
      className="insights-hero"
      ref={heroRef}
    >

      <div className="insights-hero-container">

        <div className="insights-content-side">

          <div className="insights-breadcrumb">

            <Link to="/">

              Home

            </Link>

            <span>

              ›

            </span>

            <span>

              Insights

            </span>

          </div>


          <h1 className="insights-title">

            Insights that{" "}

            <span>
              Inspire
            </span>{" "}

            Innovation

          </h1>

          <div className="insights-title-line" />

          <p className="insights-description">

            Stay updated with the latest trends,
            insights and expert perspectives from
            the world of engineering and technology.

          </p>

          <form
            className="insights-search-wrapper"
            onSubmit={handleSearch}
          >

            <div className="insights-search-input">

              <FaSearch />

              <input

                type="text"

                placeholder="Search insights, topics, keywords..."

                value={searchTerm}

                onChange={(event) =>
                  setSearchTerm(
                    event.target.value
                  )
                }

                aria-label="Search insights"

              />

            </div>


            <button
              type="submit"
              className="insights-search-btn"
            >

              Search

            </button>

          </form>


        </div>


        <div className="insights-image-side">

          <img

            src={insightsHero}

            alt="DGATE engineering and technology insights"

            className="insights-hero-image"

          />

          <div className="insights-image-overlay" />

          <InsightsCanvas />


        </div>


      </div>

    </section>

  );

}

export default InsightsHero;