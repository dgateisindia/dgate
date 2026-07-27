import "./ContactInfo.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";


function ContactInfo() {

  const contactDetails = [

    {
      id: 1,

      icon: <FaEnvelope />,

      title: "Email Us",

      value: "info@dgateis.com",

      subText:
        "For general inquiries and business discussions",

      type: "email",
    },

    {
      id: 2,

      icon: <FaPhoneAlt />,

      title: "Call Us",

      value: "+91 80 1234 5678",

      subText:
        "Speak directly with our team",

      type: "phone",
    },

    {
      id: 3,

      icon: <FaWhatsapp />,

      title: "WhatsApp",

      value: "+91 98765 43210",

      subText:
        "Connect with us for quick assistance",

      type: "whatsapp",
    },

    {
      id: 4,

      icon: <FaClock />,

      title: "Business Hours",

      value: "Mon – Fri : 9:30 AM – 6:30 PM",

      subText:
        "Our team will respond during business hours",

      type: "hours",
    },

  ];

  const offices = [

    {
      id: 1,

      country: "India",

      city: "Bengaluru",

      address:
        "Bengaluru, Karnataka, India",
    },

    {
      id: 2,

      country: "USA",

      city: "United States",

      address:
        "Serving clients across the United States",
    },

    {
      id: 3,

      country: "UAE",

      city: "Dubai",

      address:
        "Dubai, United Arab Emirates",
    },

    {
      id: 4,

      country: "Singapore",

      city: "Singapore",

      address:
        "Serving clients across Singapore and APAC",
    },

  ];

  const renderContactValue = (item) => {

    if (item.type === "email") {

      return (

        <a
          href={`mailto:${item.value}`}
          className="contact-info-value"
        >
          {item.value}
        </a>

      );

    }


    if (item.type === "phone") {

      return (

        <a
          href={`tel:${item.value.replace(/\s/g, "")}`}
          className="contact-info-value"
        >
          {item.value}
        </a>

      );

    }


    if (item.type === "whatsapp") {

      return (

        <span className="contact-info-value">
          {item.value}
        </span>

      );

    }


    return (

      <span className="contact-info-value">
        {item.value}
      </span>

    );

  };


  return (

    <section className="contact-info-section">

      <div className="contact-info-container">


        <div className="contact-info-heading">

          <span className="contact-info-small-title">

            CONTACT INFORMATION

          </span>


          <h2>

            Get in <span>Touch</span>

          </h2>


          <div className="contact-info-heading-line" />


          <p>

            Have a question or want to discuss your next
            project? Connect with our team through any of
            the channels below.

          </p>

        </div>


        <div className="contact-info-grid">

          {contactDetails.map((item) => (

            <article
              className="contact-info-card"
              key={item.id}
            >

              <div className="contact-info-icon">

                {item.icon}

              </div>


              <div className="contact-info-card-content">

                <h3>

                  {item.title}

                </h3>


                {renderContactValue(item)}


                <p>

                  {item.subText}

                </p>

              </div>

            </article>

          ))}

        </div>

        <div className="contact-info-divider" />

        <div className="contact-offices-heading">

          <span className="contact-info-small-title">

            OUR GLOBAL PRESENCE

          </span>


          <h2>

            Our <span>Offices</span>

          </h2>


          <div className="contact-info-heading-line" />


          <p>

            Connecting engineering expertise and technology
            solutions with businesses across global markets.

          </p>

        </div>


        <div className="contact-offices-grid">

          {offices.map((office) => (

            <article
              className="contact-office-card"
              key={office.id}
            >


              <div className="contact-office-accent" />

              <div className="contact-office-icon">

                <FaMapMarkerAlt />

              </div>

              <h3>

                {office.country}

              </h3>

              <span className="contact-office-city">

                {office.city}

              </span>

              <p>

                {office.address}

              </p>

            </article>

          ))}

        </div>

      </div>

    </section>

  );

}


export default ContactInfo;