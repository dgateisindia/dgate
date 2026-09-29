import "./PerformanceMarketing.css";

import {
  FaChartLine,
} from "react-icons/fa";

import ServicePageShell
  from "../../components/ServicesPage/ServicePageShell/ServicePageShell";


function PerformanceMarketing() {
  const services = [
    "ROI & Conversion-Focused Campaigns",
    "Google Ads – Search, Display & YouTube",
    "Meta Ads – Facebook & Instagram",
    "LinkedIn Advertising",
    "Conversion Rate Optimization – CRO",
    "Funnel Strategy & Optimization",
    "Retargeting & Remarketing Campaigns",
    "Analytics & Reporting",
  ];


  return (
    <ServicePageShell
      pageClass="performance-marketing-page"
      eyebrow="PERFORMANCE & ROI"
      title="Performance Marketing"
      description="We create and optimize data-driven advertising campaigns focused on qualified traffic, conversions, customer acquisition and measurable return on investment."
      tagline="Every click optimized for results."
      services={services}
      icon={FaChartLine}
      slug="performance-marketing"
      seoTitle="Performance Marketing Agency Bangalore | DGATE IS"
      metaDescription="Performance marketing services in Bangalore including Google Ads, Meta Ads, LinkedIn Ads, CRO, remarketing, funnel optimization and analytics."
    />
  );
}


export default PerformanceMarketing;