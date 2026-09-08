import "./SuccessStories.css";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


/* =========================================================
   PROJECT IMAGES
========================================================= */
import kanaja from "../../../assets/images/home/success-stories/kanaja_foods.png";
import hexad from "../../../assets/images/home/success-stories/hexad_website.png";
import uniheal from "../../../assets/images/home/success-stories/uniheal_website.png";
import hiyath from "../../../assets/images/home/success-stories/hiyath_website.png";


gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    id: "kanaja-foods",
    title: "Kanaja Foods",
    category: "UI/UX Design",
    image: kanaja,
  },

  {
    id: "hexad",
    title: "Hexad",
    category: "Web Development",
    image: hexad,
  },

  {
    id: "uniheal",
    title: "Uniheal",
    category: "Digital Marketing",
    image: uniheal,
  },

  {
    id: "hiyath",
    title: "Hiyath",
    category: "Performance Optimization",
    image: hiyath,
  },
];


const categories = [
  "UI/UX Design",
  "Web Development",
  "Digital Marketing",
  "Performance Optimization",
];


/* =========================================================
   COMPONENT
========================================================= */

function SuccessStories() {
  const sectionRef = useRef(null);

  const [activeCategory, setActiveCategory] =
    useState("All");


  /* =========================================================
     INITIAL SCROLL ANIMATION
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
          start: "top 84%",
          once: true,
        },
      });


      timeline
        .from(
          ".home-success__title",
          {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            clearProps: "opacity",
          }
        )

        .from(
          ".home-success__filters",
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.2"
        )

        .from(
          ".home-success__card",
          {
            opacity: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.15"
        );

    }, sectionRef);


    return () => ctx.revert();

  }, []);


  /* =========================================================
     FILTER PROJECTS
  ========================================================= */

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeCategory
        );


  /* =========================================================
     CATEGORY CLICK
     CLICK ACTIVE CATEGORY AGAIN = SHOW ALL
  ========================================================= */

  const handleCategoryClick = (category) => {

    setActiveCategory(
      (currentCategory) =>
        currentCategory === category
          ? "All"
          : category
    );

  };


  return (
    <section
      className="home-success"
      ref={sectionRef}
      aria-labelledby="home-success-title"
    >
      <div className="container">


        {/* =================================================
            TITLE
        ================================================= */}

        <div className="home-success__header">

          <h2
            id="home-success-title"
            className="home-success__title"
          >
            DIGITAL SUCCESS STORIES
          </h2>


          {/* ===============================================
              CATEGORY ROW
          =============================================== */}

          <div className="home-success__navigation">

            <div
              className="home-success__decorative-line"
              aria-hidden="true"
            >
              <span />
            </div>


            <div
              className="home-success__filters"
              aria-label="Success story categories"
            >

              {categories.map((category) => (

                <button
                  type="button"
                  key={category}
                  className={`home-success__filter ${
                    activeCategory === category
                      ? "home-success__filter--active"
                      : ""
                  }`}
                  aria-pressed={
                    activeCategory === category
                  }
                  onClick={() =>
                    handleCategoryClick(category)
                  }
                >
                  {category}
                </button>

              ))}

            </div>

          </div>

        </div>


        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <div className="home-success__grid">

          {filteredProjects.map((project) => (

            <article
              className="home-success__card"
              key={project.id}
            >

              <img
                src={project.image}
                alt={`${project.title} - ${project.category} project by DGATE Integrated Services`}
                className="home-success__image"
                loading="lazy"
              />


              {/* ACCESSIBLE HIDDEN PROJECT INFORMATION */}

              <div className="home-success__sr-content">

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.category}
                </p>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}


export default SuccessStories;