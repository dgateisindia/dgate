import "./Clients.css";

import {
  bosch,
  siemens,
  philips,
  samsung,
  honeywell,
  denso,
  deloitte,
  lt,
  tata,
  capgemini,
} from "../../../assets/images/home/clients";

const clients = [
  {
    id: "bosch",
    name: "Bosch",
    logo: bosch,
  },
  {
    id: "siemens",
    name: "Siemens",
    logo: siemens,
  },
  {
    id: "philips",
    name: "Philips",
    logo: philips,
  },
  {
    id: "samsung",
    name: "Samsung",
    logo: samsung,
  },
  {
    id: "honeywell",
    name: "Honeywell",
    logo: honeywell,
  },
  {
    id: "denso",
    name: "Denso",
    logo: denso,
  },
  {
    id: "deloitte",
    name: "Deloitte",
    logo: deloitte,
  },
  {
    id: "lt",
    name: "L&T",
    logo: lt,
  },
  {
    id: "tata",
    name: "Tata",
    logo: tata,
  },
  {
    id: "capgemini",
    name: "Capgemini",
    logo: capgemini,
  },
];

function LogoGroup({ duplicate = false }) {
  return (
    <div
      className="home-clients__group"
      aria-hidden={duplicate ? "true" : undefined}
    >
      {clients.map((client) => (
        <div
          className="home-clients__logo"
          key={
            duplicate
              ? `${client.id}-duplicate`
              : client.id
          }
        >
          <img
            src={client.logo}
            alt={duplicate ? "" : `${client.name} logo`}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

function Clients() {
  return (
    <section
      className="home-clients"
      aria-labelledby="home-clients-title"
    >
      <div className="container">

        <h2
          id="home-clients-title"
          className="home-clients__title"
        >
          Trusted By{" "}
          <span>Global Leaders</span>
        </h2>

        <p className="home-clients__subtitle">
          We partner with industry-leading organizations
          worldwide to deliver innovative engineering and
          technology solutions.
        </p>

        <div className="home-clients__slider">

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