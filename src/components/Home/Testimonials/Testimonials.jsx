import "./Testimonials.css";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";


const testimonials = [
  {
    id: "testimonial-1",
    quote:
      "From branding to leads, every detail of DGATE was strategic and performance-driven.",
    name: "Amit Verma",
  },

  {
    id: "testimonial-2",
    quote:
      "Our website conversions and ad performance improved within weeks. DGATE feels more like a growth partner than an agency.",
    name: "Neha Sharma",
  },

  {
    id: "testimonial-3",
    quote:
      "From brand identity to digital campaigns, DGATE delivered clarity, consistency and measurable business growth.",
    name: "Rahul Mehta",
  },

  {
    id: "testimonial-4",
    quote:
      "DGATE understood our business goals clearly and transformed them into focused digital strategies with strong execution.",
    name: "Arjun Rao",
  },

  {
    id: "testimonial-5",
    quote:
      "The team brought together creativity, technology and performance marketing in a way that made our digital presence stronger.",
    name: "Priya Nair",
  },

  {
    id: "testimonial-6",
    quote:
      "The approach was structured, transparent and results-focused. Every stage of the project was handled professionally.",
    name: "Karan Shah",
  },
];


function Testimonials() {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const [isPaused, setIsPaused] = useState(false);


  /* =========================================================
     GET CARD SCROLL DISTANCE
  ========================================================= */

  const getScrollAmount = useCallback(() => {
    const slider = sliderRef.current;

    if (!slider) return 0;

    const card =
      slider.querySelector(
        ".home-testimonials__card"
      );

    if (!card) return 0;

    const sliderStyles =
      window.getComputedStyle(slider);

    const gap =
      parseFloat(
        sliderStyles.columnGap ||
          sliderStyles.gap ||
          "0"
      );

    return card.offsetWidth + gap;
  }, []);


  /* =========================================================
     SCROLL RIGHT
  ========================================================= */

  const scrollNext = useCallback(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const amount =
      getScrollAmount();

    const maxScroll =
      slider.scrollWidth -
      slider.clientWidth;

    /*
      When reaching the end,
      smoothly return to the first card.
    */
    if (
      slider.scrollLeft >=
      maxScroll - 10
    ) {
      slider.scrollTo({
        left: 0,
        behavior: "smooth",
      });

      return;
    }

    slider.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  }, [getScrollAmount]);


  /* =========================================================
     SCROLL LEFT
  ========================================================= */

  const scrollPrevious =
    useCallback(() => {
      const slider =
        sliderRef.current;

      if (!slider) return;

      const amount =
        getScrollAmount();

      /*
        If already at beginning,
        move to the last card.
      */
      if (slider.scrollLeft <= 10) {
        slider.scrollTo({
          left:
            slider.scrollWidth -
            slider.clientWidth,
          behavior: "smooth",
        });

        return;
      }

      slider.scrollBy({
        left: -amount,
        behavior: "smooth",
      });
    }, [getScrollAmount]);


  /* =========================================================
     AUTO SCROLL
  ========================================================= */

  useEffect(() => {
    if (isPaused) return undefined;

    /*
      Every 4 seconds,
      move to the next testimonial.
    */
    intervalRef.current =
      window.setInterval(() => {
        scrollNext();
      }, 4000);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(
          intervalRef.current
        );
      }
    };
  }, [isPaused, scrollNext]);


  /* =========================================================
     ARROW ACTIONS
  ========================================================= */

  const handlePrevious = () => {
    scrollPrevious();
  };


  const handleNext = () => {
    scrollNext();
  };


  return (
    <section
      className="home-testimonials"
      aria-labelledby="home-testimonials-title"
    >
      <div className="container">

        {/* ===============================
            HEADING
        =============================== */}

        <div className="home-testimonials__heading">

          <span>
            CLIENT STORIES
          </span>

          <h2
            id="home-testimonials-title"
          >
            What Our
            <strong>
              {" "}Clients Say
            </strong>
          </h2>

          <p>
            Partnerships built around
            strategy, transparency and
            measurable results.
          </p>

        </div>


        {/* ===============================
            CAROUSEL
        =============================== */}

        <div
          className="home-testimonials__carousel"
          onMouseEnter={() =>
            setIsPaused(true)
          }
          onMouseLeave={() =>
            setIsPaused(false)
          }
        >

          {/* LEFT ARROW */}

          <button
            type="button"
            className="
              home-testimonials__arrow
              home-testimonials__arrow--left
            "
            onClick={handlePrevious}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>


          {/* TESTIMONIAL TRACK */}

          <div
            ref={sliderRef}
            className="home-testimonials__track"
          >

            {testimonials.map(
              (item) => (

                <article
                  className="home-testimonials__card"
                  key={item.id}
                >

                  <div className="home-testimonials__card-top">

                    <FaQuoteLeft
                      className="home-testimonials__quote"
                      aria-hidden="true"
                    />


                    <div
                      className="home-testimonials__stars"
                      aria-label="5 star review"
                    >
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>

                  </div>


                  <p className="home-testimonials__text">
                    {item.quote}
                  </p>


                  <div className="home-testimonials__author">

                    <strong>
                      {item.name}
                    </strong>

                  </div>

                </article>

              )
            )}

          </div>


          {/* RIGHT ARROW */}

          <button
            type="button"
            className="
              home-testimonials__arrow
              home-testimonials__arrow--right
            "
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>

        </div>

      </div>
    </section>
  );
}


export default Testimonials;