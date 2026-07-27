import "./FeaturedArticle.css";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaCalendarAlt,
  FaClock,
  FaUser,
} from "react-icons/fa";

import featuredAI from "../../../assets/images/Insights/articles/featured-ai.png";

gsap.registerPlugin(ScrollTrigger);

function FeaturedArticle() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".featured-article-heading", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(".featured-article-card", {
        y: 30,
        opacity: 0,
        duration: 0.75,
        delay: 0.1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (

    <section
      id="featured-article"
      className="featured-article-section"
      ref={sectionRef}
    >

      <div className="featured-article-container">

        <div className="featured-article-heading">

          <h2>
            Featured Article
          </h2>

          <div className="featured-heading-line" />

        </div>

        <article className="featured-article-card">

          <div className="featured-article-image-wrapper">

            <img
              src={featuredAI}
              alt="Artificial Intelligence transforming engineering"
              className="featured-article-image"
            />

          </div>

          <div className="featured-article-content">

            <span className="featured-badge">
              Featured
            </span>

            <h3>

              AI in Engineering: Transforming Ideas into
              Intelligent Solutions

            </h3>

            <p className="featured-article-description">

              Explore how Artificial Intelligence is reshaping
              engineering workflows, improving decision-making,
              and driving innovation across industries.

            </p>

            <div className="featured-article-meta">

              <span>

                <FaCalendarAlt />

                May 10, 2024

              </span>


              <span>

                <FaClock />

                6 min read

              </span>


              <span>

                <FaUser />

                By DGATE Team

              </span>

            </div>

          </div>

        </article>

      </div>

    </section>

  );

}

export default FeaturedArticle;