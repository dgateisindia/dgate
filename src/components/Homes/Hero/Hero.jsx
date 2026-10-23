import "./Hero.css";

import {
  useEffect,
  useRef,
} from "react";

import { gsap } from "gsap";

import {
  FaSearch,
  FaTimes,
} from "react-icons/fa";

import propertyTypes from "../../../data/propertyData";

/* PROPERTY HERO IMAGE */
import propertyHero from "../../../assets/images/homes/hero.jpg";


function Hero({
  search,
  setSearch,
  resultCount,
}) {
  const heroRef = useRef(null);


  /* =========================================================
     HERO ANIMATION
  ========================================================= */

  useEffect(() => {
    if (!heroRef.current) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;


    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });


      tl.from(
        ".home-hero__title",
        {
          y: 45,
          opacity: 0,
          duration: 0.8,
        }
      )

        .from(
          ".home-hero__description",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        )

        .from(
          ".property-search",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.25"
        );
    }, heroRef);


    return () => ctx.revert();
  }, []);


  /* =========================================================
     NORMALIZE
  ========================================================= */

  const normalizeText = (value = "") => {
    return String(value)
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ");
  };


  /* =========================================================
     FIND PROPERTY CATEGORY FROM SEARCH
  ========================================================= */

  const getMatchedCategory = () => {
    const query = normalizeText(search);

    if (!query) return null;


    return propertyTypes.find((category) => {
      const categoryName = normalizeText(category.name);
      const categorySlug = normalizeText(
        category.slug.replace(/-/g, " ")
      );


      /*
       * Allows:
       *
       * plot
       * plots
       *
       * villa
       * villas
       *
       * apartment
       * apartments
       *
       * farm house
       * farmhouse
       *
       * independent house
       * commercial
       */

      const singularName = categoryName.endsWith("s")
        ? categoryName.slice(0, -1)
        : categoryName;


      const singularSlug = categorySlug.endsWith("s")
        ? categorySlug.slice(0, -1)
        : categorySlug;


      const compactQuery = query.replace(/\s/g, "");
      const compactCategory =
        categoryName.replace(/\s/g, "");


      return (
        query === categoryName ||
        query === categorySlug ||
        query === singularName ||
        query === singularSlug ||
        compactQuery === compactCategory ||
        categoryName.startsWith(query) ||
        singularName.startsWith(query)
      );
    });
  };


  const matchedCategory = getMatchedCategory();


  /* =========================================================
     RESULT MESSAGE
  ========================================================= */

  const getResultMessage = () => {
    if (!search.trim()) {
      return "";
    }


    /*
     * Exact property category search
     */

    if (matchedCategory) {
      const count =
        matchedCategory.properties.length;


      let label = matchedCategory.name;


      /*
       * Make category wording natural
       */

      if (matchedCategory.slug === "plots") {
        label =
          count === 1
            ? "Plot"
            : "Plots";
      }


      if (matchedCategory.slug === "villas") {
        label =
          count === 1
            ? "Villa"
            : "Villas";
      }


      if (matchedCategory.slug === "apartments") {
        label =
          count === 1
            ? "Apartment"
            : "Apartments";
      }


      if (matchedCategory.slug === "farm-house") {
        label =
          count === 1
            ? "Farm House"
            : "Farm Houses";
      }


      if (
        matchedCategory.slug ===
        "independent-house"
      ) {
        label =
          count === 1
            ? "Independent House"
            : "Independent Houses";
      }


      if (
        matchedCategory.slug ===
        "commercial"
      ) {
        label =
          count === 1
            ? "Commercial Property"
            : "Commercial Properties";
      }


      return `${count} ${label} found`;
    }


    /*
     * Location / area / other search
     */

    if (resultCount > 0) {
      return `${resultCount} ${
        resultCount === 1
          ? "Property"
          : "Properties"
      } found`;
    }


    return "No properties found";
  };


  /* =========================================================
     INPUT CHANGE
  ========================================================= */

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };


  /* =========================================================
     ENTER KEY
  ========================================================= */

  const handleKeyDown = (event) => {
    if (
      event.key === "Enter" &&
      search.trim()
    ) {
      setTimeout(() => {
        const resultsSection =
          document.getElementById(
            "property-search-results"
          );


        resultsSection?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    }
  };


  /* =========================================================
     CLEAR SEARCH
  ========================================================= */

  const clearSearch = () => {
    setSearch("");
  };


  return (
    <section
      className="home-hero"
      ref={heroRef}
      aria-labelledby="home-hero-title"
    >

      {/* BACKGROUND IMAGE */}

      <img
        src={propertyHero}
        alt="Modern residential property"
        className="home-hero__bg"
        loading="eager"
        fetchPriority="high"
      />


      {/* HERO CONTENT */}

      <div className="home-hero__content">

        <span className="home-hero__tag">
          DGATE HOMES
        </span>


        <h1
          id="home-hero-title"
          className="home-hero__title"
        >
          Find the Right{" "}

          <span className="home-hero__title-accent">
            Property
          </span>
        </h1>


        <p className="home-hero__description">
          Find the right property in the right
          location with trusted information and
          verified options.
        </p>


        {/* ===================================================
            SEARCH
        ==================================================== */}

        <div className="property-search">

          <div className="property-search__input-wrapper">

            <FaSearch
              className="property-search__icon"
            />


            <input
              type="text"
              className="property-search__input"
              placeholder="Search Property Type locations..."
              value={search}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
              aria-label="Search properties"
              autoComplete="off"
            />


            {search && (
              <button
                type="button"
                className="property-search__clear"
                onClick={clearSearch}
                aria-label="Clear property search"
              >
                <FaTimes />
              </button>
            )}

          </div>


          {/* =================================================
              RESULT COUNT
          ================================================== */}

          {search.trim() && (
            <div className="property-search__status">
              {getResultMessage()}
            </div>
          )}

        </div>

      </div>

    </section>
  );
}


export default Hero;