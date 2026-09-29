import { useMemo, useState } from "react";

import Navbar1 from "../../components/Homes/Navbar1/Navbar1";
import Hero from "../../components/Homes/Hero/Hero";
import ExplorePropertyType from "../../components/Homes/ExplorePropertyType/ExplorePropertyType";
import Footer1 from "../../components/Homes/Footer1/Footer1";

import propertyTypes from "../../data/propertyData";

import {
  FaMapMarkerAlt,
  FaRulerCombined,
  FaBed,
  FaBath,
  FaCar,
  FaTimes,
} from "react-icons/fa";

import "./Homes.css";


function Homes() {
  const [searchQuery, setSearchQuery] = useState("");


  /* =========================================================
     NORMALIZE TEXT
  ========================================================= */

  const normalizeText = (value = "") => {
    return String(value)
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ");
  };


  /* =========================================================
     CREATE SEARCHABLE PROPERTY LIST
  ========================================================= */

  const allProperties = useMemo(() => {
    return propertyTypes.flatMap((category) =>
      category.properties.map((property) => ({
        ...property,

        categoryName: category.name,
        categorySlug: category.slug,
        categoryImage: category.image,
      }))
    );
  }, []);


  /* =========================================================
     FILTER PROPERTIES
  ========================================================= */

  const filteredProperties = useMemo(() => {
    const query = normalizeText(searchQuery);

    if (!query) {
      return [];
    }

    const words = query
      .split(" ")
      .filter(Boolean);

    return allProperties.filter((property) => {
      const searchableText = normalizeText(
        [
          property.name,
          property.propertyType,
          property.categoryName,

          property.location?.area,
          property.location?.city,
          property.location?.state,
          property.location?.pincode,
          property.location?.landmark,
          property.location?.address,

          property.size,
          property.area,
          property.price,

          property.bedrooms
            ? `${property.bedrooms} bhk ${property.bedrooms} bedroom`
            : "",

          property.bathrooms
            ? `${property.bathrooms} bathroom`
            : "",

          property.facing,
          property.floor,
          property.parking,
          property.furnishing,
          property.constructionStatus,
          property.status,

          ...(property.amenities || []),
        ].join(" ")
      );

      /*
       * Every word typed by the user must exist
       * somewhere in the property's searchable information.
       *
       * Example:
       * "3 bhk whitefield"
       *
       * Must contain:
       * 3 + bhk + whitefield
       */

      return words.every((word) =>
        searchableText.includes(word)
      );
    });
  }, [searchQuery, allProperties]);


  const hasSearch =
    searchQuery.trim().length > 0;


  /* =========================================================
     CLEAR SEARCH
  ========================================================= */

  const clearSearch = () => {
    setSearchQuery("");
  };


  return (
    <>
      <Navbar1 />


      {/* =====================================================
          HERO
      ====================================================== */}

      <Hero
        search={searchQuery}
        setSearch={setSearchQuery}
        resultCount={filteredProperties.length}
      />


      {/* =====================================================
          SEARCH RESULTS
      ====================================================== */}

      {hasSearch ? (
        <section
          id="property-search-results"
          className="home-property-results"
        >
          <div className="home-property-results__container">

            {/* HEADER */}

            <div className="home-property-results__header">

              <div>

                <span className="home-property-results__eyebrow">
                  DGATE HOMES
                </span>

                <h2>
                  Search Results
                </h2>

                <p>
                  {filteredProperties.length > 0
                    ? `${filteredProperties.length} ${
                        filteredProperties.length === 1
                          ? "property"
                          : "properties"
                      } found for "${searchQuery}".`
                    : `No properties found for "${searchQuery}".`}
                </p>

              </div>


              <button
                type="button"
                className="home-property-results__clear"
                onClick={clearSearch}
              >
                <FaTimes />

                Clear Search
              </button>

            </div>


            {/* RESULTS */}

            {filteredProperties.length > 0 ? (

              <div className="home-property-results__grid">

                {filteredProperties.map((property) => (

                  <article
                    key={property.id}
                    className="home-property-card"
                  >

                    {/* IMAGE */}

                    <div className="home-property-card__image">

                      <img
                        src={
                          property.images?.[0] ||
                          property.categoryImage
                        }
                        alt={property.name}
                        loading="lazy"
                      />


                      <span className="home-property-card__status">
                        {property.status}
                      </span>


                      <span className="home-property-card__category">
                        {property.categoryName}
                      </span>

                    </div>


                    {/* CONTENT */}

                    <div className="home-property-card__content">

                      <div className="home-property-card__top">

                        <span>
                          {property.propertyType}
                        </span>

                        <small>
                          #{property.id}
                        </small>

                      </div>


                      <h3>
                        {property.name}
                      </h3>


                      {/* LOCATION */}

                      <div className="home-property-card__location">

                        <FaMapMarkerAlt />

                        <span>
                          {property.location?.area},{" "}
                          {property.location?.city}
                        </span>

                      </div>


                      {/* FEATURES */}

                      <div className="home-property-card__features">

                        {property.area && (
                          <div>
                            <FaRulerCombined />

                            <span>
                              {property.area}
                            </span>
                          </div>
                        )}


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

                      <div className="home-property-card__bottom">

                        <div>

                          <span>
                            Price
                          </span>

                          <strong>
                            {property.price}
                          </strong>

                        </div>


                        <a
                          href={`/property/${property.categorySlug}`}
                          className="home-property-card__view"
                        >
                          View Details →
                        </a>

                      </div>

                    </div>

                  </article>

                ))}

              </div>

            ) : (

              /* EMPTY RESULT */

              <div className="home-property-results__empty">

                <div className="home-property-results__empty-icon">
                  🔍
                </div>

                <h3>
                  No matching properties found
                </h3>

                <p>
                  Try searching for a property type,
                  location or area such as
                  <strong>
                    {" "}Apartment, Villa, Whitefield,
                    Hebbal, 3 BHK or 1850 sq.ft.
                  </strong>
                </p>

                <button
                  type="button"
                  onClick={clearSearch}
                >
                  View All Property Types
                </button>

              </div>

            )}

          </div>
        </section>
      ) : (

        /* NORMAL HOME SECTION */

        <ExplorePropertyType />

      )}


      <Footer1 />
    </>
  );
}


export default Homes;