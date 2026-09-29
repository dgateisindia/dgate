import "./EmailMarketing.css";

import {
  FaEnvelopeOpenText,
} from "react-icons/fa";

import ServicePageShell
  from "../../components/ServicesPage/ServicePageShell/ServicePageShell";


function EmailMarketing() {
  const services = [
    "Email Campaign Strategy",
    "Newsletter Design",
    "Automation & Drip Campaigns",
    "Lead Nurturing Funnels",
    "Email Copywriting",
    "A/B Testing & Optimization",
  ];


  return (
    <ServicePageShell
      pageClass="email-marketing-page"
      eyebrow="EMAIL & AUTOMATION"
      title="Email Marketing"
      description="We create structured email journeys that nurture leads, strengthen customer relationships and deliver relevant communication at every stage of the customer journey."
      tagline="Right message. Right time. Right audience."
      services={services}
      icon={FaEnvelopeOpenText}
      slug="email-marketing"
      seoTitle="Email Marketing Services Bangalore | DGATE IS"
      metaDescription="Email marketing services in Bangalore including campaign strategy, newsletters, automation, drip campaigns, lead nurturing, copywriting and A B testing."
    />
  );
}


export default EmailMarketing;