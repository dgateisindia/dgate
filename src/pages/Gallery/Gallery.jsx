import {
  useEffect,
  useState,
} from "react";

import {
  FaTimes,
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
      "data:image/webp;base64,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",
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
            item.category === activeCategory
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

        {/* =========================================
            GALLERY SECTION
        ========================================= */}

        <section className="dgate-section">

          <div className="dgate-container">

            {/* SECTION HEADING */}

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


            {/* =====================================
                FILTERS
            ===================================== */}

            <div className="dgate-filters">

              {categories.map(
                (category) => (

                  <button
                    key={category}
                    type="button"
                    className={`dgate-filter-btn ${
                      activeCategory === category
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      setActiveCategory(category)
                    }
                  >
                    {category}
                  </button>

                )
              )}

            </div>


            {/* =====================================
                IMAGE GRID
            ===================================== */}

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


      {/* =========================================
          IMAGE LIGHTBOX
      ========================================= */}

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