import {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaTimes,
  FaRocket,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

import Navbar from "../../components/Home/Navbar/Navbar";
import Footer from "../../components/Home/Footer/Footer";

import "../Shared/InnerPages.css";


const galleryItems = [
  {
    id: 1,
    title: "Team Collaboration",
    category: "Team",
    large: true,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 2,
    title: "Business Meeting",
    category: "Meetings",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    title: "Digital Workspace",
    category: "Office",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 4,
    title: "Creative Discussion",
    category: "Team",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 5,
    title: "Client Collaboration",
    category: "Meetings",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 6,
    title: "Corporate Event",
    category: "Events",
    large: true,
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 7,
    title: "Ideas in Action",
    category: "Office",
    image:
      "https://images.unsplash.com/photo-1497366811364-ccf3f3b2eb01?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 8,
    title: "Team Session",
    category: "Team",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85",
  },
];


const categories = [
  "All",
  "Team",
  "Meetings",
  "Office",
  "Events",
];


function Gallery() {

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [selectedImage, setSelectedImage] =
    useState(null);


  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) =>
            item.category ===
            activeCategory
        );


  useEffect(() => {

    if (selectedImage) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow =
        "";
    }


    const handleEscape = (event) => {

      if (event.key === "Escape") {
        setSelectedImage(null);
      }

    };


    window.addEventListener(
      "keydown",
      handleEscape
    );


    return () => {

      document.body.style.overflow =
        "";

      window.removeEventListener(
        "keydown",
        handleEscape
      );

    };

  }, [selectedImage]);


  return (
    <>
      <Navbar />

      <main className="dgate-page">

        {/* HERO */}

        <section className="dgate-inner-hero">

          <div className="dgate-container">

            <div className="dgate-inner-hero__content">

              <div className="dgate-eyebrow">

                <span className="dgate-eyebrow__dot" />

                DGATE Gallery

              </div>


              <h1>
                Moments behind
                {" "}
                <span>
                  our journey.
                </span>
              </h1>


              <p>
                A glimpse into the people,
                collaborations, events and
                experiences that shape DGATE
                Integrated Services.
              </p>

            </div>

          </div>

        </section>


        {/* GALLERY */}

        <section className="dgate-section">

          <div className="dgate-container">

            <div className="dgate-section-heading">

              <div className="dgate-section-label">
                Life at DGATE
              </div>

              <h2>
                People, partnerships
                and progress.
              </h2>

              <p>
                Explore moments from our
                workplace, client interactions,
                events and team activities.
              </p>

            </div>


            {/* FILTER */}

            <div className="dgate-filters">

              {categories.map(
                (category) => (

                  <button
                    key={category}
                    type="button"
                    className={`dgate-filter-btn ${
                      activeCategory ===
                      category
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      setActiveCategory(
                        category
                      )
                    }
                  >
                    {category}
                  </button>

                )
              )}

            </div>


            {/* IMAGE GRID */}

            <div className="gallery-grid">

              {filteredItems.map(
                (item) => (

                  <article
                    key={item.id}
                    className={`gallery-card ${
                      item.large &&
                      activeCategory === "All"
                        ? "gallery-card--large"
                        : ""
                    }`}
                    onClick={() =>
                      setSelectedImage(item)
                    }
                  >

                    <img
                      src={item.image}
                      alt={item.title}
                    />


                    <div className="gallery-card__overlay">

                      <span>
                        {item.category}
                      </span>

                      <h3>
                        {item.title}
                      </h3>

                    </div>

                  </article>

                )
              )}

            </div>

          </div>

        </section>

      </main>


      {/* LIGHTBOX */}

      {selectedImage && (

        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
          onClick={() =>
            setSelectedImage(null)
          }
        >

          <div
            className="gallery-lightbox__content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              type="button"
              className="gallery-lightbox__close"
              onClick={() =>
                setSelectedImage(null)
              }
              aria-label="Close image preview"
            >
              <FaTimes />
            </button>


            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

          </div>

        </div>

      )}


      <Footer />
    </>
  );
}


export default Gallery;