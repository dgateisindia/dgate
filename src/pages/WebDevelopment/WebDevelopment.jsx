import "./WebDevelopment.css";

import {
  FaCode,
} from "react-icons/fa";

import ServicePageShell
  from "../../components/ServicesPage/ServicePageShell/ServicePageShell";


function WebDevelopment() {
  const services = [
    "Custom Website Development",
    "WordPress Development",
    "E-Commerce Development – Shopify & WooCommerce",
    "Landing Page Design & Optimization",
    "UI/UX Design",
    "Website Speed Optimization",
    "Website Maintenance & Support",
    "CMS Development",
    "API Integrations",
  ];


  return (
    <ServicePageShell
      pageClass="web-development-page"
      eyebrow="WEB EXPERIENCE"
      title="Web Development"
      description="We build fast, scalable and conversion-focused websites designed around customer experience, business objectives and long-term digital growth."
      tagline="Your website is your digital storefront — we make it powerful."
      services={services}
      icon={FaCode}
      slug="web-development"
      seoTitle="Website Development Company Bangalore | DGATE IS"
      metaDescription="Website development services in Bangalore including WordPress, Shopify, WooCommerce, UI UX design, CMS, landing pages, APIs and website optimization."
    />
  );
}


export default WebDevelopment;