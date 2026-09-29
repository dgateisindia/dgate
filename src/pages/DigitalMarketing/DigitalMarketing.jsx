import "./DigitalMarketing.css";

import {
  FaBullhorn,
} from "react-icons/fa";

import ServicePageShell
  from "../../components/ServicesPage/ServicePageShell/ServicePageShell";


function DigitalMarketing() {
  const services = [
    "Social Media Marketing – Instagram, Facebook, LinkedIn & X",
    "SEO – Search Engine Optimization",
    "Content Marketing",
    "Influencer Marketing",
    "Video Marketing",
    "Online Reputation Management",
    "Blog & Article Writing",
  ];


  return (
    <ServicePageShell
      pageClass="digital-marketing-page"
      eyebrow="DIGITAL GROWTH"
      title="Digital Marketing"
      description="We combine strategy, creative communication and performance insights to improve brand visibility, audience engagement and sustainable digital growth."
      tagline="Grow your presence. Build your audience."
      services={services}
      icon={FaBullhorn}
      slug="digital-marketing"
      seoTitle="Digital Marketing Agency Bangalore | DGATE IS"
      metaDescription="Digital marketing agency in Bangalore offering SEO, social media marketing, content marketing, influencer marketing, video marketing and online reputation management."
    />
  );
}


export default DigitalMarketing;