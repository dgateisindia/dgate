import "./Testimonials.css";

import {
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";


const testimonials = [
  {
    id: "testimonial-1",
    quote:
      "From branding to leads, every detail of DGATE was strategic and performance-driven.",
    name: "Amit Verma",
    role: "Founder, GrowthX Solutions",
  },

  {
    id: "testimonial-2",
    quote:
      "Our website conversions and ad performance improved within weeks. DGATE feels more like a growth partner than an agency.",
    name: "Neha Sharma",
    role: "Marketing Head, UrbanCart",
  },

  {
    id: "testimonial-3",
    quote:
      "From brand identity to digital campaigns, DGATE delivered clarity, consistency and measurable business growth.",
    name: "Rahul Mehta",
    role: "Co-Founder, ScaleHive",
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
            <strong> Clients Say</strong>
          </h2>

          <p>
            Partnerships built around strategy,
            transparency and measurable results.
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