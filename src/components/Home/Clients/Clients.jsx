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

const logos = [
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
];

function Clients() {
  return (
    <section className="clients">

      <div className="clients-container">

        <h2 className="clients-title">
          Trusted By <span>Global Leaders</span>
        </h2>

        <p className="clients-subtitle">
          We partner with industry-leading organizations worldwide to
          deliver innovative engineering and technology solutions.
        </p>

        <div className="logo-slider">

          <div className="logo-track">

            {[...logos, ...logos].map((logo, index) => (

              <div className="logo-item" key={index}>

                <img src={logo} alt="client" />

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Clients;