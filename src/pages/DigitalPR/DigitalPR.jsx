import "./DigitalPR.css";

import {
  FaNewspaper,
} from "react-icons/fa";

import ServicePageShell
  from "../../components/ServicesPage/ServicePageShell/ServicePageShell";


function DigitalPR() {
  const services = [
    "Press Release Writing & Distribution",
    "Media Outreach",
    "Influencer PR Campaigns",
    "Online Reputation Management",
    "Brand Mentions & Coverage",
    "Crisis Management",
  ];


  return (
    <ServicePageShell
      pageClass="digital-pr-page"
      eyebrow="DIGITAL PUBLIC RELATIONS"
      title="Digital PR"
      description="We help brands strengthen credibility, gain meaningful media visibility and protect their reputation through structured digital public relations strategies."
      tagline="Get featured. Get recognized."
      services={services}
      icon={FaNewspaper}
      slug="digital-pr"
      seoTitle="Digital PR Agency Bangalore | DGATE IS"
      metaDescription="Digital PR agency in Bangalore offering press release distribution, media outreach, influencer PR, reputation management, brand coverage and crisis management."
    />
  );
}


export default DigitalPR;