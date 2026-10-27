import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_TITLE = "D-GATE Integrated Services";

// Exact static route to title mapping
const ROUTE_TITLES = {
  "/": BASE_TITLE,
  "/home": "Home | " + BASE_TITLE,
  "/home-transition": BASE_TITLE,
  "/about": "Who We Are | " + BASE_TITLE,
  "/services": "What We Do | " + BASE_TITLE,
  "/services/think": "Think — Strategy & Consultation | " + BASE_TITLE,
  "/services/build": "Build — Engineering & Architecture | " + BASE_TITLE,
  "/services/solve": "Solve — Solutions & Support | " + BASE_TITLE,
  "/industries": "Industries | " + BASE_TITLE,
  "/technologies": "Technologies | " + BASE_TITLE,
  "/careers": "Careers | " + BASE_TITLE,
  "/insights": "Insights | " + BASE_TITLE,
  "/contact": "Contact Us | " + BASE_TITLE,
  "/portfolio": "Our Work | " + BASE_TITLE,
  "/crm": "CRM | " + BASE_TITLE,
  "/products/crm": "CRM | " + BASE_TITLE,
  "/hms": "HMS | " + BASE_TITLE,
  "/products/hms": "HMS | " + BASE_TITLE,
  "/case-study": "Case Studies | " + BASE_TITLE,
  "/case-studies": "Case Studies | " + BASE_TITLE,
  "/blog": "Blog & News | " + BASE_TITLE,
  "/achievements": "Achievements | " + BASE_TITLE,
  "/gallery": "Gallery | " + BASE_TITLE,
  "/terms-of-use": "Terms of Use | " + BASE_TITLE,
  "/terms": "Terms of Use | " + BASE_TITLE,
  "/privacy-policy": "Privacy Policy | " + BASE_TITLE,
  "/privacy": "Privacy Policy | " + BASE_TITLE,
  "/homes": "D-Gate Homes | Luxury Living & Real Estate",
  "/property-type": "Properties | D-Gate Homes",
  "/brandingdesign": "Branding & Design | " + BASE_TITLE,
  "/branding-design": "Branding & Design | " + BASE_TITLE,
  "/developmentecommerce": "Development & E-commerce | " + BASE_TITLE,
  "/development-ecommerce": "Development & E-commerce | " + BASE_TITLE,
  "/techstackweb": "Tech Stack & Web Solutions | " + BASE_TITLE,
  "/tech-stack-web": "Tech Stack & Web Solutions | " + BASE_TITLE,
  "/dataanalyticsperformance": "Data Analytics & Performance | " + BASE_TITLE,
  "/data-analytics-performance": "Data Analytics & Performance | " + BASE_TITLE,
  "/smartaibusinessautomation": "Smart AI & Business Automation | " + BASE_TITLE,
  "/smart-ai-business-automation": "Smart AI & Business Automation | " + BASE_TITLE,
  "/digitalmarketingcourse": "Digital Marketing Course | " + BASE_TITLE,
  "/digital-marketing-course": "Digital Marketing Course | " + BASE_TITLE,
  "/digitalmarketing": "Digital Marketing | " + BASE_TITLE,
  "/digital-marketing": "Digital Marketing | " + BASE_TITLE,
  "/web-development": "Web Development | " + BASE_TITLE,
  "/web-development.html": "Web Development | " + BASE_TITLE,
  "/app-development": "App Development | " + BASE_TITLE,
  "/app-development.html": "App Development | " + BASE_TITLE,
  "/branding-creative-solutions": "Branding & Creative Solutions | " + BASE_TITLE,
  "/branding-creative-solutions.html": "Branding & Creative Solutions | " + BASE_TITLE,
  "/social-media-marketing": "Social Media Marketing | " + BASE_TITLE,
  "/social-media-marketing.html": "Social Media Marketing | " + BASE_TITLE,
  "/whatsapp-marketing": "WhatsApp Marketing | " + BASE_TITLE,
  "/whatsapp-marketing.html": "WhatsApp Marketing | " + BASE_TITLE,
  "/email-marketing": "Email Marketing | " + BASE_TITLE,
  "/email-marketing.html": "Email Marketing | " + BASE_TITLE,
  "/push-notification-marketing": "Push Notification Marketing | " + BASE_TITLE,
  "/push-notification-marketing.html": "Push Notification Marketing | " + BASE_TITLE,
  "/digital-pr": "Digital PR | " + BASE_TITLE,
  "/digital-pr.html": "Digital PR | " + BASE_TITLE,
  "/traditional-marketing": "Traditional Marketing | " + BASE_TITLE,
  "/traditional-marketing.html": "Traditional Marketing | " + BASE_TITLE,
  "/performance-marketing": "Performance Marketing | " + BASE_TITLE,
  "/performance-marketing.html": "Performance Marketing | " + BASE_TITLE,
  "/production": "Coming Soon | " + BASE_TITLE,
  "/details": "Visitor Data | " + BASE_TITLE,
  "/api/visiter_data": "Visitor Data | " + BASE_TITLE,
  "/server-down": "Server Unavailable | " + BASE_TITLE,
};

// Helper to convert kebab-case or hyphenated words to Title Case
function toTitleCase(str) {
  if (!str) return "";
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function PageTitleManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalized = pathname.toLowerCase().replace(/\/$/, "") || "/";

    // 1. Check exact match
    if (ROUTE_TITLES[normalized]) {
      document.title = ROUTE_TITLES[normalized];
      return;
    }

    // 2. Dynamic industries route (/industries/:industryId)
    if (normalized.startsWith("/industries/")) {
      const slug = normalized.replace("/industries/", "");
      const title = toTitleCase(slug);
      document.title = `${title} | ${BASE_TITLE}`;
      return;
    }

    // 3. Dynamic properties route (/property/:type)
    if (normalized.startsWith("/property/")) {
      const slug = normalized.replace("/property/", "");
      const title = toTitleCase(slug);
      document.title = `${title} | D-Gate Homes`;
      return;
    }

    // 4. Dynamic success story route (/success-stories/:slug)
    if (
      normalized.startsWith("/success-stories/") ||
      normalized.startsWith("/success-story/")
    ) {
      const slug = normalized
        .replace("/success-stories/", "")
        .replace("/success-story/", "");
      const title = toTitleCase(slug);
      document.title = `${title || "Success Story"} | ${BASE_TITLE}`;
      return;
    }

    // Default fallback
    document.title = BASE_TITLE;
  }, [pathname]);

  return null;
}

export default PageTitleManager;
