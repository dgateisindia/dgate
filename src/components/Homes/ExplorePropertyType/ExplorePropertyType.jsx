import "./ExplorePropertyType.css";

import { useRef } from "react";
import { Link } from "react-router-dom";

import {
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
} from "react-icons/fa";

import propertyTypes from "../../../data/propertyData";

function ExplorePropertyType() {
  const sliderRef = useRef(null);

  /* =========================================================
     SLIDER - LEFT
  ========================================================= */

  const scrollLeft = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: -360,
      behavior: "smooth",
    });
  };

  /* =========================================================
     SLIDER - RIGHT
  ========================================================= */

  const scrollRight = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: 360,
      behavior: "smooth",
    });
  };

  /* =========================================================
     PROPERTY URL
  ========================================================= */

  const getPropertyUrl = (slug) => {
    return `/property/${slug}`;
  };

  return (
    <section className="explore-property-section">

      <div className="explore-property-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="explore-property-header">

          <div className="explore-property-heading">

            <span className="explore-property-subtitle">
              DGATE HOMES
            </span>

            <h2 className="explore-property-title">
              Explore by Property Type
            </h2>

            <p className="explore-property-description">
              Discover properties that match your lifestyle,
              investment goals and requirements.
            </p>

          </div>


          {/* ===================================================
              SLIDER ARROWS
          =================================================== */}

          <div className="explore-property-arrows">

            <button
              type="button"
              className="explore-property-arrow"
              onClick={scrollLeft}
              aria-label="Previous property types"
            >
              <FaChevronLeft />
            </button>

            <button
              type="button"
              className="explore-property-arrow"
              onClick={scrollRight}
              aria-label="Next property types"
            >
              <FaChevronRight />
            </button>

          </div>

        </div>


        {/* =====================================================
            PROPERTY SLIDER
        ===================================================== */}

        <div
          ref={sliderRef}
          className="explore-property-slider"
        >

          {propertyTypes.map((property) => {

            const propertyCount =
              property.properties?.length || 0;

            const propertyUrl =
              getPropertyUrl(property.slug);

            return (

              <article
                key={property.slug}
                className="property-type-card"
              >

                {/* =================================================
                    IMAGE
                ================================================= */}

                <Link
                  to={propertyUrl}
                  className="property-type-image-link"
                  aria-label={`View ${property.name} properties`}
                >

                  <div className="property-type-image-wrapper">

                    <img
                      src={property.image}
                      alt={property.name}
                      className="property-type-image"
                      loading="lazy"
                    />

                    <div className="property-type-overlay">

                      <span>
                        {propertyCount} Properties
                      </span>

                    </div>

                  </div>

                </Link>


                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="property-type-content">

                  <div className="property-type-info">

                    <h3>
                      {property.name}
                    </h3>

                    <p>
                      Explore {propertyCount}{" "}
                      {property.name.toLowerCase()}{" "}
                      {propertyCount === 1
                        ? "property"
                        : "properties"}
                    </p>

                  </div>


                  {/* =================================================
                      VIEW ALL
                  ================================================= */}

                  <Link
                    to={propertyUrl}
                    className="property-view-link"
                    aria-label={`View all ${property.name} properties`}
                  >

                    <span>
                      View All
                    </span>

                    <FaArrowRight />

                  </Link>

                </div>

              </article>

            );
          })}

        </div>

      </div>

    </section>
  );
}

export default ExplorePropertyType;
