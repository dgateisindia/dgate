import "./Testimonials.css";

import {
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";


const testimonials = [
  {
    id: "amit-verma",
    quote:
      "D-GATE brought strategy and creativity together seamlessly. From branding to lead generation, every part of the engagement was focused, consistent and results-driven.",
    name: "Amit Verma",
    role: "IT",
  },

  {
    id: "neha-sharma",
    quote:
      "Our website performance and conversion journey improved significantly. D-GATE worked more like a growth partner than a traditional agency.",
    name: "Neha Sharma",
    role: "FMCG",
  },

  {
    id: "rahul-mehta",
    quote:
      "From brand identity to digital campaigns, D-GATE delivered clarity, consistency and a stronger foundation for measurable growth.",
    name: "Rahul Mehta",
    role: "Health Care",
  },
   {
    id: "srinivas-iyer",
    quote:
      "D-GATE brought a sharper commercial perspective to our e-commerce journey. Their ability to align customer experience, platform thinking and growth priorities gave the business greater clarity and momentum.",
    name: "Srinivas Iyer",
    role: "E-Commerce",
  },
];


function Testimonials() {
  return (
    <section
      className="home-testimonials"
      aria-labelledby="home-testimonials-title"
    >
      <div className="container">

        <div className="home-testimonials__heading">

          <span>
            CLIENT STORIES
          </span>

          <h2 id="home-testimonials-title">
            What Our
            <strong> Clients Say.</strong>
          </h2>

          <p>
            We build long-term partnerships through clear strategy, strong execution and measurable outcomes.
          </p>

        </div>


        <div className="home-testimonials__grid">

          {testimonials.map((item) => (

            <article
              className="home-testimonials__card"
              key={item.id}
            >
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


              <p>
                {item.quote}
              </p>


              <div className="home-testimonials__author">

                <strong>
                  {item.name}
                </strong>

                <span>
                  {item.role}
                </span>

              </div>
            </article>

          ))}

        </div>

      </div>
    </section>
  );
}


export default Testimonials;