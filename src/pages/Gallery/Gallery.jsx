import { useEffect, useMemo, useRef, useState } from "react";

import {
  galleryCategories,
  galleryImages,
  galleryItems,
  galleryVideos,
} from "../../data/filesdata.js";

import "./Gallery.css";

import Navbar from "../../components/Home/Navbar/Navbar";
import Footer from "../../components/Home/Footer/Footer";

/* =========================================================
   ICON COMPONENT
========================================================= */

function Icon({ name, size = 20, ...props }) {
  const paths = {
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 4.5 4.5" />
      </>
    ),

    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,

    close: <path d="m6 6 12 12M18 6 6 18" />,

    image: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="8" cy="8" r="1.5" />
        <path d="m3 17 6-6 4 4 3-3 5 5" />
      </>
    ),

    video: (
      <>
        <rect x="3" y="6" width="12" height="12" rx="3" />
        <path d="m15 10 6-3v10l-6-3" />
      </>
    ),

    play: <path d="m9 5 11 7-11 7Z" />,

    left: <path d="m15 5-7 7 7 7" />,

    right: <path d="m9 5 7 7-7 7" />,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

/* =========================================================
   IMAGE COMPONENT
========================================================= */

function MediaImage({
  src,
  alt,
  className = "",
  eager = false,
}) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (failed) {
    return (
      <div
        className={`dg-gallery-fallback ${className}`}
        role="img"
        aria-label={`${alt}. Preview unavailable.`}
      >
        <Icon name="image" size={32} />

        <span>
          Preview unavailable
        </span>
      </div>
    );
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

/* =========================================================
   MEDIA VIEWER
========================================================= */

function MediaViewer({
  items,
  initialId,
  onClose,
}) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  const [activeId, setActiveId] =
    useState(initialId);

  const [videoError, setVideoError] =
    useState(false);

  const index = items.findIndex(
    (item) => item.id === activeId
  );

  const item = items[index];

  /* ---------------------------------------------------------
     OPEN / CLOSE DIALOG
  --------------------------------------------------------- */

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return undefined;
    }

    const previousFocus =
      document.activeElement;

    const previousOverflow =
      document.body.style.overflow;

    if (!dialog.open) {
      dialog.showModal();
    }

    document.body.style.overflow =
      "hidden";

    closeRef.current?.focus();

    return () => {
      if (dialog.open) {
        dialog.close();
      }

      document.body.style.overflow =
        previousOverflow;

      if (
        previousFocus instanceof HTMLElement &&
        previousFocus.isConnected
      ) {
        previousFocus.focus();
      }
    };
  }, []);

  /* ---------------------------------------------------------
     NAVIGATION
  --------------------------------------------------------- */

  function navigate(direction) {
    if (!items.length) {
      return;
    }

    const nextIndex =
      (
        index +
        direction +
        items.length
      ) %
      items.length;

    setActiveId(
      items[nextIndex].id
    );

    setVideoError(false);
  }

  /* ---------------------------------------------------------
     KEYBOARD NAVIGATION
  --------------------------------------------------------- */

  function handleKeys(event) {
    /*
      Keep the normal keyboard controls
      available when interacting with video.
    */

    if (
      event.target instanceof Element &&
      event.target.closest("video")
    ) {
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      navigate(1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      navigate(-1);
    }
  }

  if (!item) {
    return null;
  }

  return (
    <dialog
      ref={dialogRef}
      className="dg-gallery-dialog"
      aria-labelledby="dg-gallery-viewer-title"
      onKeyDown={handleKeys}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <div className="dg-gallery-viewer">

        {/* ===============================================
            VIEWER HEADER
        =============================================== */}

        <div className="dg-gallery-viewer-top">

          <div>
            <span className="dg-gallery-eyebrow">
              {item.category}
            </span>

            <h2 id="dg-gallery-viewer-title">
              {item.title}
            </h2>
          </div>

          <button
            ref={closeRef}
            type="button"
            className="dg-gallery-icon-button"
            aria-label="Close media preview"
            onClick={onClose}
          >
            <Icon name="close" />
          </button>

        </div>

        {/* ===============================================
            MEDIA
        =============================================== */}

        <div className="dg-gallery-viewer-media">

          {item.type === "video" ? (
            videoError ? (
              <div
                className="dg-gallery-video-error"
                role="alert"
              >
                <Icon
                  name="video"
                  size={36}
                />

                <p>
                  This sample video could not
                  be loaded.
                </p>

                <a
                  href={item.src}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open video source
                </a>
              </div>
            ) : (
              <video
                key={item.id}
                src={item.src}
                poster={item.poster}
                controls
                playsInline
                preload="metadata"
                aria-label={item.title}
                onError={() =>
                  setVideoError(true)
                }
              >
                Your browser does not
                support HTML video.
              </video>
            )
          ) : (
            <MediaImage
              key={item.id}
              src={item.src}
              alt={
                item.alt ||
                item.title
              }
              eager
            />
          )}

        </div>

        {/* ===============================================
            VIEWER FOOTER / NAVIGATION
        =============================================== */}

        <div className="dg-gallery-viewer-bottom">

          <p>
            Sample media{" "}
            <span aria-hidden="true">
              ·
            </span>{" "}
            {index + 1} of{" "}
            {items.length}
          </p>

          <div className="dg-gallery-viewer-navigation">

            <button
              type="button"
              className="dg-gallery-icon-button"
              aria-label="Previous media"
              onClick={() =>
                navigate(-1)
              }
            >
              <Icon name="left" />
            </button>

            <button
              type="button"
              className="dg-gallery-icon-button"
              aria-label="Next media"
              onClick={() =>
                navigate(1)
              }
            >
              <Icon name="right" />
            </button>

          </div>

        </div>

      </div>
    </dialog>
  );
}

/* =========================================================
   MAIN GALLERY PAGE
========================================================= */

export default function Gallery() {
  const [category, setCategory] =
    useState("All");

  const [mediaType, setMediaType] =
    useState("all");

  const [search, setSearch] =
    useState("");

  const [selectedId, setSelectedId] =
    useState(null);

  /* ---------------------------------------------------------
     FILTER GALLERY ITEMS
  --------------------------------------------------------- */

  const filteredItems =
    useMemo(() => {
      const query =
        search
          .trim()
          .toLowerCase();

      return galleryItems.filter(
        (item) => {
          const categoryMatches =
            category === "All" ||
            item.category ===
              category;

          const typeMatches =
            mediaType === "all" ||
            item.type ===
              mediaType;

          const searchMatches =
            !query ||
            `${item.title} ${item.category} ${item.type}`
              .toLowerCase()
              .includes(query);

          return (
            categoryMatches &&
            typeMatches &&
            searchMatches
          );
        }
      );
    }, [
      category,
      mediaType,
      search,
    ]);

  /* ---------------------------------------------------------
     RESET FILTERS
  --------------------------------------------------------- */

  function resetFilters() {
    setCategory("All");
    setMediaType("all");
    setSearch("");
  }

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />

      {/* =====================================================
          GALLERY PAGE
      ===================================================== */}

      <main className="dg-gallery">

        <div className="dg-gallery-container">

          {/* =================================================
              HERO SECTION
          ================================================= */}

          <header className="dg-gallery-hero">

            <span className="dg-gallery-eyebrow">
              D-GATE INTEGRATED SERVICES
            </span>

            <h1>
              A little inspiration.
              <br />

              <span>
                A world of possibilities.
              </span>
            </h1>

            <p>
              Explore design, digital
              experiences, brand stories and
              moments that bring people
              together.
            </p>

            <div className="dg-gallery-statistics">

              <span>
                <Icon
                  name="image"
                  size={17}
                />

                {galleryImages.length} images
              </span>

              <span>
                <Icon
                  name="video"
                  size={17}
                />

                {galleryVideos.length} videos
              </span>

              {/*<span className="dg-gallery-demo-label">
                Sample collection
              </span>*/}

            </div>

          </header>

          {/* =================================================
              GALLERY COLLECTION
          ================================================= */}

          <section
            className="dg-gallery-collection"
            aria-label="D-GATE media gallery"
          >

            {/* ===============================================
                TOP FILTER BAR
            =============================================== */}

            <div className="dg-gallery-toolbar">

              {/* MEDIA TYPE */}

              <div
                className="dg-gallery-type-switch"
                role="group"
                aria-label="Filter by media type"
              >
                {[
                  {
                    value: "all",
                    label: "All",
                  },
                  {
                    value: "image",
                    label: "Images",
                  },
                  {
                    value: "video",
                    label: "Videos",
                  },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    aria-pressed={
                      mediaType ===
                      option.value
                    }
                    className={
                      mediaType ===
                      option.value
                        ? "is-active"
                        : ""
                    }
                    onClick={() =>
                      setMediaType(
                        option.value
                      )
                    }
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              {/* SEARCH */}

              <label className="dg-gallery-search">

                <Icon
                  name="search"
                  size={19}
                />

                <span className="dg-gallery-sr-only">
                  Search gallery
                </span>

                <input
                  type="search"
                  placeholder="Search the gallery..."
                  value={search}
                  onChange={(event) =>
                    setSearch(
                      event.target.value
                    )
                  }
                />

              </label>

            </div>

            {/* ===============================================
                CATEGORY FILTERS
            =============================================== */}

            <div className="dg-gallery-category-row">

              <div
                className="dg-gallery-categories"
                role="group"
                aria-label="Filter by category"
              >
                {galleryCategories.map(
                  (name) => (
                    <button
                      key={name}
                      type="button"
                      aria-pressed={
                        category ===
                        name
                      }
                      className={
                        category ===
                        name
                          ? "is-active"
                          : ""
                      }
                      onClick={() =>
                        setCategory(
                          name
                        )
                      }
                    >
                      {name}
                    </button>
                  )
                )}
              </div>

              <p
                className="dg-gallery-results"
                role="status"
              >
                {filteredItems.length}{" "}
                {filteredItems.length === 1
                  ? "result"
                  : "results"}
              </p>

            </div>

            {/* ===============================================
                GALLERY GRID
            =============================================== */}

            {filteredItems.length > 0 ? (
              <div className="dg-gallery-grid">

                {filteredItems.map(
                  (item, index) => (
                    <article
                      className="dg-gallery-card"
                      key={item.id}
                    >

                      <button
                        type="button"
                        className="dg-gallery-card-button"
                        onClick={() =>
                          setSelectedId(
                            item.id
                          )
                        }
                        aria-label={`Open ${item.type}: ${item.title}`}
                      >

                        {/* THUMBNAIL */}

                        <div className="dg-gallery-thumbnail">

                          <MediaImage
                            src={
                              item.type ===
                              "video"
                                ? item.poster
                                : item.src
                            }
                            alt={
                              item.type ===
                              "video"
                                ? `${item.title} video thumbnail`
                                : item.alt ||
                                  item.title
                            }
                            eager={
                              index < 4
                            }
                          />

                          {/* MEDIA ICON */}

                          <span className="dg-gallery-media-badge">

                            <Icon
                              name={
                                item.type ===
                                "video"
                                  ? "video"
                                  : "image"
                              }
                              size={15}
                            />

                          </span>

                          {/* VIDEO PLAY BUTTON */}

                          {item.type ===
                            "video" && (
                            <span className="dg-gallery-play">

                              <Icon
                                name="play"
                                size={24}
                              />

                            </span>
                          )}

                          {/* HOVER ACTION */}

                          <span className="dg-gallery-hover">

                            {item.type ===
                            "video"
                              ? "Watch video"
                              : "View image"}

                            <Icon
                              name="arrow"
                              size={18}
                            />

                          </span>

                        </div>

                        {/* CARD TITLE */}

                        <div className="dg-gallery-card-caption">

                          <span className="dg-gallery-card-title">
                            {item.title}
                          </span>

                          <Icon
                            name={
                              item.type ===
                              "video"
                                ? "video"
                                : "image"
                            }
                            size={16}
                          />

                        </div>

                      </button>

                      {/* META INFORMATION */}

                      <div className="dg-gallery-card-meta">

                        <span>
                          {item.category}
                        </span>

                        <span>
                          Sample
                        </span>

                      </div>

                    </article>
                  )
                )}

              </div>
            ) : (
              /* =============================================
                 EMPTY STATE
              ============================================= */

              <div className="dg-gallery-empty">

                <Icon
                  name="search"
                  size={34}
                />

                <h2>
                  No matching media
                </h2>

                <p>
                  Try another keyword or
                  reset your filters.
                </p>

                <button
                  type="button"
                  onClick={resetFilters}
                >
                  Reset filters
                </button>

              </div>
            )}

          </section>

        </div>

        {/* =================================================
            IMAGE / VIDEO POPUP
        ================================================= */}

        {selectedId && (
          <MediaViewer
            key={selectedId}
            items={filteredItems}
            initialId={selectedId}
            onClose={() =>
              setSelectedId(null)
            }
          />
        )}

      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />
    </>
  );
}