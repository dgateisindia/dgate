import "./WhatsAppMarketing.css";

import {
  FaWhatsapp,
} from "react-icons/fa";

import ServicePageShell
  from "../../components/ServicesPage/ServicePageShell/ServicePageShell";


function WhatsAppMarketing() {
  const services = [
    "WhatsApp API Integration",
    "Broadcast Campaigns",
    "Automated Chatbots",
    "Customer Support Automation",
    "Lead Generation Campaigns",
    "Personalized Messaging",
  ];


  return (
    <ServicePageShell
      pageClass="whatsapp-marketing-page"
      eyebrow="CONVERSATIONAL MARKETING"
      title="WhatsApp Marketing"
      description="We turn WhatsApp into a scalable customer engagement channel for marketing, conversations, automated support, lead generation and personalized communication."
      tagline="Connect instantly. Convert faster."
      services={services}
      icon={FaWhatsapp}
      slug="whatsapp-marketing"
      seoTitle="WhatsApp Marketing & Automation Bangalore | DGATE IS"
      metaDescription="WhatsApp marketing services in Bangalore including WhatsApp API integration, broadcast campaigns, automated chatbots, support automation and lead generation."
    />
  );
}


export default WhatsAppMarketing;