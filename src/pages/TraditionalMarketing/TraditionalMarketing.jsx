import "./TraditionalMarketing.css";

import {
  FaTv,
} from "react-icons/fa";

import ServicePageShell
  from "../../components/ServicesPage/ServicePageShell/ServicePageShell";


function TraditionalMarketing() {
  const services = [
    "Print Advertising – Flyers, Brochures & Hoardings",
    "TV & Radio Advertising",
    "Event Marketing & Promotions",
    "Outdoor Advertising – OOH",
    "Media Buying & Planning",
    "Integrated Offline & Digital Campaign Strategy",
  ];


  return (
    <ServicePageShell
      pageClass="traditional-marketing-page"
      eyebrow="OFFLINE MARKETING"
      title="Traditional Marketing"
      description="We combine traditional advertising channels with modern strategy to strengthen offline visibility, expand audience reach and support integrated brand campaigns."
      tagline="Offline visibility meets online power."
      services={services}
      icon={FaTv}
      slug="traditional-marketing"
      seoTitle="Traditional Marketing Agency Bangalore | DGATE IS"
      metaDescription="Traditional marketing services in Bangalore including print advertising, TV, radio, events, outdoor advertising, media buying and integrated campaigns."
    />
  );
}


export default TraditionalMarketing;