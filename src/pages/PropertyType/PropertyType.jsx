import "./PropertyType.css";

import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaRulerCombined,
  FaBed,
  FaBath,
  FaCar,
} from "react-icons/fa";

import propertyTypes from "../../data/propertyData";

function PropertyType() {
  const { type } = useParams();

  const propertyCategory = propertyTypes.find(
    (property) => property.slug === type
  );

  /* =========================
     INVALID CATEGORY
  ========================= */

  if (!propertyCategory) {
    return (
      <main className="property-not-found">

        <div>
          <h1>Property Not Found</h1>

          <p>
            The property category you are looking for
            does not exist.
          </p>

          <Link to="/" className="property-back-home">
            Back to Home
          </Link>
        </div>

      </main>
    );
  }

  return (
    <main className="property-type-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="property-category-hero">

        <img
          src={propertyCategory.image}
          alt={propertyCategory.name}
        />

        <div className="property-category-hero-overlay">

          <div className="property-category-hero-content">

            <span>DGATE HOMES</span>

            <h1>
              {propertyCategory.name}
            </h1>

            <p>
              Explore our collection of{" "}
              {propertyCategory.name.toLowerCase()} properties.
            </p>

          </div>

        </div>

      </section>

      {/* =========================
          PROPERTY LIST
      ========================= */}

      <section className="property-list-section">

        <div className="property-list-container">

          {/* BACK */}
          <Link
            to="/"
            className="property-back-link"
          >
            <FaArrowLeft />
            Back to Home
          </Link>

          {/* HEADING */}
          <div className="property-list-heading">

            <div>
              <span className="property-list-subtitle">
                DGATE HOMES
              </span>

              <h2>
                Explore {propertyCategory.name}
              </h2>

              <p>
                {propertyCategory.properties.length}{" "}
                properties available in this category.
              </p>
            </div>

            <div className="property-count">
              {propertyCategory.properties.length}
              <span>Properties</span>
            </div>

          </div>

          {/* PROPERTY GRID */}
          <div className="property-grid">

            {propertyCategory.properties.map((property) => (

              <article
                key={property.id}
                className="property-card"
              >

                {/* IMAGE */}
                <div className="property-card-image">

                  <img
                    src={property.images?.[0] || propertyCategory.image}
                    alt={property.name}
                  />

                  <span className="property-status">
                    {property.status}
                  </span>

                  <span className="property-layer">
                    {property.layer}
                  </span>

                </div>

                {/* CONTENT */}
                <div className="property-card-content">

                  <div className="property-card-top">

                    <span className="property-card-type">
                      {property.propertyType}
                    </span>

                    <span className="property-card-id">
                      #{property.id}
                    </span>

                  </div>

                  <h3>
                    {property.name}
                  </h3>

                  {/* LOCATION */}
                  <div className="property-location">

                    <FaMapMarkerAlt />

                    <span>
                      {property.location.area},{" "}
                      {property.location.city}
                    </span>

                  </div>

                  {/* DETAILS */}
                  <div className="property-features">

                    <div>
                      <FaRulerCombined />
                      <span>{property.area}</span>
                    </div>

                    {property.bedrooms && (
                      <div>
                        <FaBed />
                        <span>
                          {property.bedrooms} Beds
                        </span>
                      </div>
                    )}

                    {property.bathrooms && (
                      <div>
                        <FaBath />
                        <span>
                          {property.bathrooms} Baths
                        </span>
                      </div>
                    )}

                    {property.parking && (
                      <div>
                        <FaCar />
                        <span>
                          {property.parking}
                        </span>
                      </div>
                    )}

                  </div>

                  {/* PRICE */}
                  <div className="property-card-bottom">

                    <div>
                      <span className="property-price-label">
                        Price
                      </span>

                      <strong>
                        {property.price}
                      </strong>
                    </div>

                    <span className="property-view-details">
                      View Details →
                    </span>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}

export default PropertyType;