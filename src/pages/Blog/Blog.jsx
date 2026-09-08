import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaClock,
  FaRocket,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

import Navbar from "../../components/Home/Navbar/Navbar";
import Footer from "../../components/Home/Footer/Footer";

import "../Shared/InnerPages.css";


const blogPosts = [
  {
    id: 1,
    category: "Digital Strategy",
    title:
      "How Digital Transformation Can Help Modern Businesses Grow",
    description:
      "Understanding how technology, automation and digital experiences can improve business efficiency and customer engagement.",
    date: "September 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 2,
    category: "Web Development",
    title:
      "Why Your Business Website Needs More Than Good Design",
    description:
      "Performance, usability, SEO and conversion strategy are equally important when building a successful business website.",
    date: "August 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    category: "E-Commerce",
    title:
      "Building Better E-Commerce Experiences for Your Customers",
    description:
      "Discover the key factors that improve product discovery, checkout experience and customer retention.",
    date: "August 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 4,
    category: "Marketing",
    title:
      "How Businesses Can Build a Stronger Digital Brand",
    description:
      "A consistent digital identity helps businesses create trust, recognition and stronger customer relationships.",
    date: "July 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 5,
    category: "Technology",
    title:
      "Automation Is Changing the Way Teams Work",
    description:
      "From CRM platforms to intelligent workflows, automation can reduce repetitive work and improve productivity.",
    date: "July 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 6,
    category: "SEO",
    title:
      "SEO Fundamentals Every Business Website Should Follow",
    description:
      "Learn the essential technical and content foundations that help your website become easier to discover online.",
    date: "June 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1000&q=85",
  },
];


function Blog() {

  const featuredPost = blogPosts[0];

  const remainingPosts =
    blogPosts.slice(1);


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
                DGATE Insights
              </div>

              <h1>
                Ideas, technology &
                {" "}
                <span>
                  digital insights.
                </span>
              </h1>

              <p>
                Practical perspectives on
                technology, marketing,
                development and digital
                transformation for modern
                businesses.
              </p>

            </div>

          </div>

        </section>


        {/* ARTICLES */}

        <section className="dgate-section dgate-section--light">

          <div className="dgate-container">

            <div className="dgate-section-heading">

              <div className="dgate-section-label">
                Latest Insights
              </div>

              <h2>
                Knowledge designed to
                move businesses forward.
              </h2>

            </div>


            {/* FEATURED ARTICLE */}

            <article className="blog-featured">

              <div className="blog-featured__image">

                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                />

              </div>


              <div className="blog-featured__content">

                <span className="blog-category">
                  {featuredPost.category}
                </span>


                <div className="blog-meta">

                  <span>
                    {featuredPost.date}
                  </span>

                  <span>•</span>

                  <span>
                    <FaClock />{" "}
                    {featuredPost.readTime}
                  </span>

                </div>


                <h2>
                  {featuredPost.title}
                </h2>

                <p>
                  {featuredPost.description}
                </p>

                <Link
                  to="/contact"
                  className="dgate-link"
                >
                  Read Article
                  <FaArrowRight />
                </Link>

              </div>

            </article>


            {/* BLOG GRID */}

            <div className="blog-grid">

              {remainingPosts.map((post) => (

                <article
                  className="blog-card"
                  key={post.id}
                >

                  <div className="blog-card__image">

                    <img
                      src={post.image}
                      alt={post.title}
                    />

                  </div>


                  <div className="blog-card__body">

                    <span className="blog-category">
                      {post.category}
                    </span>


                    <div className="blog-meta">

                      <span>
                        {post.date}
                      </span>

                      <span>•</span>

                      <span>
                        {post.readTime}
                      </span>

                    </div>


                    <h3>
                      {post.title}
                    </h3>

                    <p>
                      {post.description}
                    </p>


                    <Link
                      to="/contact"
                      className="dgate-link"
                    >
                      Read More
                      <FaArrowRight />
                    </Link>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* CTA */}

        <section className="dgate-page-cta">

          <div className="dgate-container">

            <div className="dgate-page-cta__content">

              <div>

                <h2>
                  Need digital guidance
                  for your business?
                </h2>

                <p>
                  Connect with DGATE to discuss
                  your digital goals and the
                  technology required to achieve
                  them.
                </p>

              </div>

              <Link
                to="/contact"
                className="dgate-page-cta__button"
              >
                Talk to Our Team
                <FaArrowRight />
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}


export default Blog;