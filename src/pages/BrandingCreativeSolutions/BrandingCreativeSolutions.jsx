import "./BrandingCreativeSolutions.css";

import {
  FaLightbulb,
} from "react-icons/fa";

import ServicePageShell
  from "../../components/ServicesPage/ServicePageShell/ServicePageShell";


function BrandingCreativeSolutions() {
  const services = [
    "Logo Design & Brand Identity",
    "Brand Strategy & Positioning",
    "Brand Guidelines – Typography, Color & Voice",
    "Corporate Identity – Business Cards, Letterheads & Packaging",
    "Rebranding & Brand Refresh",
    "Visual Storytelling & Creative Direction",
    "UI/UX Design Systems",
    "Social Media Branding Kits",
  ];


  return (
    <ServicePageShell
      pageClass="branding-creative-page"
      eyebrow="BRANDING & CREATIVE"
      title="Branding & Creative Solutions"
      description="We create distinctive brand identities that communicate clearly, build recognition and help businesses stand out across digital and physical customer touchpoints."
      tagline="Build a brand people remember."
      services={services}
      icon={FaLightbulb}
      slug="branding-creative-solutions"
      seoTitle="Branding & Creative Solutions Bangalore | DGATE IS"
      metaDescription="Professional branding and creative solutions in Bangalore including logo design, brand strategy, identity design, rebranding, UI UX and social media branding."
    />
  );
}


export default BrandingCreativeSolutions;