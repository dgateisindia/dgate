import "./ClientStories.css";

import {
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";


const stories = [
  {
    id: "amit-verma",
    quote:
      "D-GATE brought strategy and creativity together seamlessly. From branding to lead generation, every part of the engagement was focused, consistent and results-driven.",
    name: "Amit Verma",
    role: "GrowthX Solutions",
  },

  {
    id: "neha-sharma",
    quote:
      "Our website performance and conversion journey improved significantly. D-GATE worked more like a growth partner than a traditional agency",
    name: "Neha Sharma",
    role: "UrbanCart",
  },

  {
    id: "rahul-mehta",
    quote:
      "From brand identity to digital campaigns, D-GATE delivered clarity, consistency and a stronger foundation for measurable growth.",
    name: "Rahul Mehta",
    role: "ScaleHive",
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
            What Our Clients Say.
            <strong>
              {" "}
            </strong>
          </h2>

          <p>
            We build long-term partnerships through clear strategy, strong execution and measurable outcomes.

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