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
    icon: <FaLaptopCode />,
    title: "Software Engineer",
    location: "Pune, India",
    experience: "3 - 6 Years Experience",
  },

  {
    icon: <FaCloud />,
    title: "Cloud Engineer",
    location: "Bangalore, India",
    experience: "4 - 8 Years Experience",
  },

  {
    icon: <FaShieldAlt />,
    title: "QA Automation Engineer",
    location: "Chennai, India",
    experience: "3 - 6 Years Experience",
  },

  {
    icon: <FaChartLine />,
    title: "Data Engineer",
    location: "Hyderabad, India",
    experience: "4 - 7 Years Experience",
  },

  {
    icon: <FaPalette />,
    title: "UI/UX Designer",
    location: "Pune, India",
    experience: "2 - 5 Years Experience",
  },

];


function OpenPositions() {

  const sectionRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [visibleCards, setVisibleCards] = useState(3);


  /* =========================================================
     RESPONSIVE CARD COUNT
  ========================================================= */

  useEffect(() => {

    const updateVisibleCards = () => {

      const width = window.innerWidth;

      if (width <= 425) {

        setVisibleCards(1);

      }

      else if (width <= 768) {

        setVisibleCards(2);

      }

      else {

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
     FIX CURRENT INDEX AFTER RESIZE
  ========================================================= */

  useEffect(() => {

    const maxIndex = Math.max(
      jobs.length - visibleCards,
      0
    );


    if (currentIndex > maxIndex) {

      setCurrentIndex(maxIndex);

    }

  }, [visibleCards, currentIndex]);


  /* =========================================================
     GSAP ANIMATION
  ========================================================= */

  useEffect(() => {

    const ctx = gsap.context(() => {


      gsap.from(
        ".open-positions-header",
        {

          y: 35,

          opacity: 0,

          duration: 0.7,

          ease: "power3.out",

          scrollTrigger: {

            trigger: sectionRef.current,

            start: "top 85%",

            once: true,

          },

        }
      );


      gsap.from(
        ".jobs-carousel-wrapper",
        {

          y: 35,

          opacity: 0,

          duration: 0.8,

          delay: 0.1,

          ease: "power3.out",

          scrollTrigger: {

            trigger: sectionRef.current,

            start: "top 80%",

            once: true,

          },

        }
      );


      gsap.from(
        ".open-positions-bottom",
        {

          y: 25,

          opacity: 0,

          duration: 0.7,

          ease: "power3.out",

          scrollTrigger: {

            trigger: ".open-positions-bottom",

            start: "top 95%",

            once: true,

          },

        }
      );


    }, sectionRef);


    return () => ctx.revert();

  }, []);


  /* =========================================================
     MAX INDEX
  ========================================================= */

  const maxIndex = Math.max(
    jobs.length - visibleCards,
    0
  );


  /* =========================================================
     NEXT
  ========================================================= */

  const handleNext = () => {

    setCurrentIndex((previousIndex) => {

      if (previousIndex >= maxIndex) {

        return 0;

      }

      return previousIndex + 1;

    });

  };


  /* =========================================================
     PREVIOUS
  ========================================================= */

  const handlePrevious = () => {

    setCurrentIndex((previousIndex) => {

      if (previousIndex <= 0) {

        return maxIndex;

      }

      return previousIndex - 1;

    });

  };


  /* =========================================================
     SLIDER TRANSFORM
  ========================================================= */

  const trackStyle = {

    "--visible-cards": visibleCards,

    transform:

      `translateX(
        calc(
          -${currentIndex} *
          (
            (
              100%
              -
              (
                (var(--visible-cards) - 1)
                *
                var(--job-gap)
              )
            )
            /
            var(--visible-cards)
            +
            var(--job-gap)
          )
        )
      )`,

  };


  return (

    <section
      id="open-positions"
      className="open-positions-section"
      ref={sectionRef}
    >

      <div className="open-positions-container">


        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="open-positions-header">


          {/* LEFT */}

          <div className="open-positions-heading">

            <span className="open-positions-tag">

              CAREERS AT DGATE

            </span>


            <h2>

              Open Positions

            </h2>


            <div className="open-positions-line"></div>

          </div>


          {/* RIGHT */}

          <div className="open-positions-right">

            <p>

              Explore opportunities to grow your career,
              work on innovative technologies and build
              solutions that create meaningful impact.

            </p>


            <div className="jobs-navigation">

              <button
                type="button"
                className="jobs-nav-btn"
                onClick={handlePrevious}
                aria-label="Previous jobs"
              >

                <FaChevronLeft />

              </button>


              <button
                type="button"
                className="jobs-nav-btn"
                onClick={handleNext}
                aria-label="Next jobs"
              >

                <FaChevronRight />

              </button>

            </div>

          </div>

        </div>


        {/* =====================================================
            JOB CAROUSEL
        ===================================================== */}

        <div className="jobs-carousel-wrapper">

          <div
            className="jobs-carousel-track"
            style={trackStyle}
          >

            {jobs.map((job, index) => (

              <article
                className="job-card"
                key={`${job.title}-${index}`}
              >

                <div className="job-icon">

                  {job.icon}

                </div>


                <div className="job-info">

                  <h3>

                    {job.title}

                  </h3>


                  <div className="job-detail">

                    <FaMapMarkerAlt />

                    <span>

                      {job.location}

                    </span>

                  </div>


                  <div className="job-detail">

                    <FaBriefcase />

                    <span>

                      {job.experience}

                    </span>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>


        {/* =====================================================
            INDICATORS
        ===================================================== */}

        <div className="jobs-indicators">

          {Array.from({

            length: maxIndex + 1,

          }).map((_, index) => (

            <button

              type="button"

              key={index}

              aria-label={
                `Go to jobs slide ${index + 1}`
              }

              className={
                currentIndex === index
                  ? "job-indicator active"
                  : "job-indicator"
              }

              onClick={() =>
                setCurrentIndex(index)
              }

            />

          ))}

        </div>


        {/* =====================================================
            BOTTOM MESSAGE
        ===================================================== */}

        <div className="open-positions-bottom">

          <strong>

            Don't see the right opportunity?

          </strong>


          <span>

            We're always looking for talented people
            to join our growing team.

          </span>

        </div>

      </div>

    </section>

  );

}


export default OpenPositions;