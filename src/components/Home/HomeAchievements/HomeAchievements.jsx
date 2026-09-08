import "./HomeAchievements.css";

import { Link } from "react-router-dom";

import {
  FaPalette,
  FaLaptopCode,
  FaBullhorn,
  FaShoppingCart,
  FaArrowRight,
} from "react-icons/fa";


const achievements = [
  {
    id: "brands",
    Icon: FaPalette,
    title: "Brands Transformed Digitally",
    description:
      "Building stronger identities and consistent digital brand experiences.",
  },

  {
    id: "websites",
    Icon: FaLaptopCode,
    title: "High-Conversion Websites",
    description:
      "Performance-focused websites created around business and customer goals.",
  },

  {
    id: "marketing",
    Icon: FaBullhorn,
    title: "Performance Marketing",
    description:
      "Data-driven campaigns designed to improve reach, leads and measurable returns.",
  },

  {
    id: "ecommerce",
    Icon: FaShoppingCart,
    title: "Scalable E-Commerce",
    description:
      "Digital commerce experiences built for conversion, usability and growth.",
  },
];


function HomeAchievements() {
  return (
    <section
      className="home-achievements"
      aria-labelledby="home-achievements-title"
    >
      <div className="container">

        <div className="home-achievements__top">

          <div>
            <span>
              OUR ACHIEVEMENTS
            </span>

            <h2 id="home-achievements-title">
              Growth Built Through
              <strong> Real Execution</strong>
            </h2>
          </div>


          <Link
            to="/achievements"
            className="home-achievements__link"
          >
            VIEW ALL ACHIEVEMENTS

            <FaArrowRight aria-hidden="true" />
          </Link>

        </div>


        <div className="home-achievements__grid">

          {achievements.map((item, index) => {

            const Icon = item.Icon;

            return (
              <article
                className="home-achievements__card"
                key={item.id}
              >

                <span className="home-achievements__number">
                  0{index + 1}
                </span>


                <Icon
                  className="home-achievements__icon"
                  aria-hidden="true"
                />


                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </article>
            );

          })}

        </div>

      </div>
    </section>
  );
}


export default HomeAchievements;