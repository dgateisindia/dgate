import "./OpenPositions.css";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaLaptopCode,
  FaCloud,
  FaShieldAlt,
  FaChartLine,
  FaPalette,
  FaMapMarkerAlt,
  FaBriefcase,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   JOB DATA
========================================================= */

const jobs = [
  {
    id: "software-engineer",
    icon: FaLaptopCode,
    title: "Sales Executive",
    location:"UAE",
    experience: "3 - 6 Years Experience",
  },

  {
    id: "cloud-engineer",
    icon: FaCloud,
    title: "Cloud Engineer",
    location: "UAE",
    experience: "4 - 8 Years Experience",
  },

  {
    id: "qa-automation-engineer",
    icon: FaShieldAlt,
    title: "QA Automation Engineer",
    location: "Bangalore, India",
    experience: "3 - 6 Years Experience",
  },

  {
    id: "data-engineer",
    icon: FaChartLine,
    title: "Data Engineer",
    location:"Bangalore, India",
    experience: "4 - 7 Years Experience",
  },

  {
    id: "ui-ux-designer",
    icon: FaPalette,
    title: "UI/UX Designer",
    location: "Bangalore, India",
    experience: "2 - 5 Years Experience",
  },
];


/* =========================================================
   COMPONENT
========================================================= */

function OpenPositions() {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const trackRef = useRef(null);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [visibleCards, setVisibleCards] =
    useState(3);


  /* =========================================================
     RESPONSIVE CARD COUNT
  ========================================================= */

  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;

      if (width <= 425) {
        setVisibleCards(1);
      } else if (width <= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };


    updateVisibleCards();


    window.addEventListener(
      "resize", 
      updateVisibleCards
    );


    return () => {
      window.removeEventListener(
        "resize",
        updateVisibleCards
      );
    };
  }, []);


  /* =========================================================
     MAX INDEX
  ========================================================= */

  const maxIndex = Math.max(
    jobs.length - visibleCards,
    0
  );


  /* =========================================================
     KEEP INDEX VALID AFTER RESIZE
  ========================================================= */

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [
    visibleCards,
    currentIndex,
    maxIndex,
  ]);


  /* =========================================================
     SCROLL CAROUSEL
     NO INLINE TRANSFORM
  ========================================================= */

  useEffect(() => {
    const carousel = carouselRef.current;
    const track = trackRef.current;

    if (!carousel || !track) return;

    const firstCard =
      track.querySelector(
        ".careers-open-positions__card"
      );

    if (!firstCard) return;


    const trackStyles =
      window.getComputedStyle(track);


    const gap =
      parseFloat(trackStyles.columnGap) ||
      parseFloat(trackStyles.gap) ||
      0;


    const cardWidth =
      firstCard.getBoundingClientRect().width;


    const targetLeft =
      currentIndex * (cardWidth + gap);


    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;


    carousel.scrollTo({
      left: targetLeft,
      behavior: reduceMotion
        ? "auto"
        : "smooth",
    });

  }, [
    currentIndex,
    visibleCards,
  ]);


  /* =========================================================
     GSAP
     FADE ONLY
  ========================================================= */

  useEffect(() => {
    if (!sectionRef.current) return;

    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reduceMotion) return;


    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          once: true,
        },
      });


      timeline
        .from(
          ".careers-open-positions__header",
          {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            clearProps: "opacity",
          }
        )

        .from(
          ".careers-open-positions__carousel",
          {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.2"
        )

        .from(
          ".careers-open-positions__bottom",
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.15"
        );

    }, sectionRef);


    return () => ctx.revert();

  }, []);


  /* =========================================================
     NEXT
  ========================================================= */

  const handleNext = () => {
    setCurrentIndex(
      (previousIndex) =>
        previousIndex >= maxIndex
          ? 0
          : previousIndex + 1
    );
  };


  /* =========================================================
     PREVIOUS
  ========================================================= */

  const handlePrevious = () => {
    setCurrentIndex(
      (previousIndex) =>
        previousIndex <= 0
          ? maxIndex
          : previousIndex - 1
    );
  };


  return (
    <section
      id="open-positions"
      className="careers-open-positions"
      ref={sectionRef}
      aria-labelledby="careers-open-positions-title"
    >
      <div className="container">


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="careers-open-positions__header">

          <div className="careers-open-positions__heading">

            <span className="careers-open-positions__tag">
              CAREERS AT DGATE
            </span>


            <h2 id="careers-open-positions-title">
              Open Positions
            </h2>


            <div
              className="careers-open-positions__line"
              aria-hidden="true"
            />

          </div>


          <div className="careers-open-positions__right">

            <p>
              Explore opportunities to grow your
              career, work on innovative technologies
              and build solutions that create
              meaningful impact.
            </p>


            <div
              className="careers-open-positions__navigation"
              aria-label="Job carousel navigation"
            >

              <button
                type="button"
                className="careers-open-positions__nav-button"
                onClick={handlePrevious}
                aria-label="Previous jobs"
              >
                <FaChevronLeft aria-hidden="true" />
              </button>


              <button
                type="button"
                className="careers-open-positions__nav-button"
                onClick={handleNext}
                aria-label="Next jobs"
              >
                <FaChevronRight aria-hidden="true" />
              </button>

            </div>

          </div>

        </div>


        {/* =================================================
            CAROUSEL
        ================================================= */}

        <div
          className="careers-open-positions__carousel"
          ref={carouselRef}
        >

          <div
            className="careers-open-positions__track"
            ref={trackRef}
          >

            {jobs.map((job) => {
              const Icon = job.icon;

              return (
                <article
                  className="careers-open-positions__card"
                  key={job.id}
                >

                  <div
                    className="careers-open-positions__icon"
                    aria-hidden="true"
                  >
                    <Icon />
                  </div>


                  <div className="careers-open-positions__info">

                    <h3>
                      {job.title}
                    </h3>


                    <div className="careers-open-positions__detail">

                      <FaMapMarkerAlt
                        aria-hidden="true"
                      />

                      <span>
                        {job.location}
                      </span>

                    </div>


                    <div className="careers-open-positions__detail">

                      <FaBriefcase
                        aria-hidden="true"
                      />

                      <span>
                        {job.experience}
                      </span>

                    </div>

                  </div>

                </article>
              );
            })}

          </div>

        </div>


        {/* =================================================
            INDICATORS
        ================================================= */}

        {maxIndex > 0 && (
          <div className="careers-open-positions__indicators">

            {Array.from({
              length: maxIndex + 1,
            }).map((_, index) => (

              <button
                type="button"
                key={`job-slide-${index + 1}`}
                aria-label={
                  `Go to jobs slide ${index + 1}`
                }
                aria-current={
                  currentIndex === index
                    ? "true"
                    : undefined
                }
                className={
                  currentIndex === index
                    ? "careers-open-positions__indicator careers-open-positions__indicator--active"
                    : "careers-open-positions__indicator"
                }
                onClick={() =>
                  setCurrentIndex(index)
                }
              />

            ))}

          </div>
        )}


        {/* =================================================
            BOTTOM MESSAGE
        ================================================= */}

        <div className="careers-open-positions__bottom">

          <strong>
            Don&apos;t see the right opportunity?
          </strong>

          <span>
            We&apos;re always looking for talented
            people to join our growing team.
          </span>

        </div>

      </div>
    </section>
  );
}


export default OpenPositions;