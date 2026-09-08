import "./ClientStories.css";

import {
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";


const stories = [
  {
    id: "amit-verma",
    quote:
      "From branding to leads, every detail of D-GATE was strategic and performance-driven.",
    name: "Amit Verma",
    role: "Founder, GrowthX Solutions",
  },

  {
    id: "neha-sharma",
    quote:
      "Our website conversions and ad performance improved within weeks. D-GATE feels more like a growth partner than an agency.",
    name: "Neha Sharma",
    role: "Marketing Head, UrbanCart",
  },

  {
    id: "rahul-mehta",
    quote:
      "From brand identity to digital campaigns, D-GATE delivered clarity, consistency, and measurable business growth.",
    name: "Rahul Mehta",
    role: "Co-Founder, ScaleHive",
  },
];


function ClientStories() {

  return (
    <section
      className="about-stories"
      aria-labelledby="about-stories-title"
    >

      <div className="container">

        <div className="about-stories__heading">

          <span>
            CLIENT STORIES
          </span>

          <h2 id="about-stories-title">
            Trusted by
            <strong>
              {" "}Growing Brands
            </strong>
          </h2>

          <p>
            Real results delivered through branding,
            high-performance websites and data-driven
            digital marketing.
          </p>

        </div>


        <div className="about-stories__grid">

          {stories.map((story) => (

            <article
              className="about-stories__card"
              key={story.id}
            >

              <FaQuoteLeft
                className="about-stories__quote"
                aria-hidden="true"
              />


              <div
                className="about-stories__stars"
                aria-label="5 star testimonial"
              >
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>


              <p>
                {story.quote}
              </p>


              <div className="about-stories__author">

                <strong>
                  {story.name}
                </strong>

                <span>
                  {story.role}
                </span>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}


export default ClientStories;