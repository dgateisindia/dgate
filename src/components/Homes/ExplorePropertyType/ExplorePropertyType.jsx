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

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -360,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 360,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="explore-property-section">
      <div className="explore-property-container">

        {/* HEADER */}
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

          {/* ARROWS */}
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

        {/* PROPERTY CARDS */}
        <div
          ref={sliderRef}
          className="explore-property-slider"
        >
          {propertyTypes.map((property) => (

            <Link
              key={property.slug}
              to={`/property/${property.slug}`}
              className="property-type-card"
            >

              {/* IMAGE */}
              <div className="property-type-image-wrapper">

                <img
                  src={property.image}
                  alt={property.name}
                  className="property-type-image"
                  loading="lazy"
                />

                <div className="property-type-overlay">
                  <span>
                    {property.properties.length} Properties
                  </span>
                </div>

              </div>

              {/* CONTENT */}
              <div className="property-type-content">

                <div>
                  <h3>{property.name}</h3>

                  <p>
                    Explore {property.properties.length}{" "}
                    {property.name.toLowerCase()} properties
                  </p>
                </div>

                <span className="property-view-link">
                  View All
                  <FaArrowRight />
                </span>

              </div>

            </Link>

          ))}
        </div>

      </div>
    </section>
  );
}

export default ExplorePropertyType;