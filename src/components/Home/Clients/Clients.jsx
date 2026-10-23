import "./Clients.css";


/* =========================================================
   CLIENT LOGOS
========================================================= */

import ykc
  from "../../../assets/images/home/clients/ykc.png";

import forbes
  from "../../../assets/images/home/clients/forbes.png";

import hiyath
  from "../../../assets/images/home/clients/hiyath.png";

import uniheal
  from "../../../assets/images/home/clients/uniheal.png";

import deloitte
  from "../../../assets/images/home/clients/deloitte.png";

import honda
  from "../../../assets/images/home/clients/honda.png";

import kia
  from "../../../assets/images/home/clients/kia.png";

import tv18
  from "../../../assets/images/home/clients/tv18.png";


/* =========================================================
   CLIENT DATA
========================================================= */

const clients = [
  {
    id: "ykc",
    name: "Bangalore YKC",
    logo: ykc,
  },

  {
    id: "forbes",
    name: "Forbes",
    logo: forbes,
  },

  {
    id: "hiyath",
    name: "Hiyath",
    logo: hiyath,
  },

  {
    id: "uniheal",
    name: "Uniheal",
    logo: uniheal,
  },

  {
    id: "deloitte",
    name: "Deloitte",
    logo: deloitte,
  },

  {
    id: "honda",
    name: "Honda",
    logo: honda,
  },

  {
    id: "kia",
    name: "KIA",
    logo: kia,
  },

  {
    id: "tv18",
    name: "TV18",
    logo: tv18,
  },
];


/* =========================================================
   LOGO GROUP

   Two identical groups are rendered so the marquee can
   continuously loop without any visible jump.
========================================================= */

function LogoGroup({
  duplicate = false,
}) {
  return (
    <div
      className="home-clients__group"
      aria-hidden={
        duplicate
          ? "true"
          : undefined
      }
    >

      {clients.map(
        (client) => (

          <div
            className="home-clients__logo"
            key={
              duplicate
                ? `${client.id}-duplicate`
                : client.id
            }
            title={client.name}
          >

            <img
              src={client.logo}
              alt={
                duplicate
                  ? ""
                  : `${client.name} logo`
              }
              loading="lazy"
              decoding="async"
            />

          </div>

        )
      )}

    </div>
  );
}


/* =========================================================
   CLIENTS
========================================================= */

function Clients() {
  return (
    <section
      className="home-clients"
      aria-labelledby="home-clients-title"
    >

      <div className="container">


        {/* =================================================
            HEADING
        ================================================= */}

        <header className="home-clients__header">

          <span className="home-clients__eyebrow">

            OUR CLIENT PARTNERS

          </span>


          <h2
            id="home-clients-title"
            className="home-clients__title"
          >

            Built On Trust.{" "}

            <span>
              Driven by Results.
            </span>

          </h2>


          <p className="home-clients__subtitle">

            We work with forward-thinking brands to transform ideas into
            meaningful experiences combining strategy, creativity and
            technology to create lasting business impact.

          </p>

        </header>


        {/* =================================================
            LOGO MARQUEE
        ================================================= */}

        <div
          className="home-clients__slider"
          aria-label="Companies and brands we work with"
        >

          <div className="home-clients__track">

            <LogoGroup />

            <LogoGroup duplicate />

          </div>

        </div>

      </div>

    </section>
  );
}


export default Clients;