import { useState } from "react";

import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  FaComments,
} from "react-icons/fa";

import "./App.css";


/* =========================================================
   COMMON COMPONENTS
========================================================= */

import ScrollToAnchor
  from "./components/ScrollToAnchor.jsx";

import PageTransition
  from "./components/PageTransition/PageTransition.jsx";


/* =========================================================
   SPECIAL PAGES
========================================================= */

import Production
  from "./pages/Production/Production.jsx";

import Details
  from "./pages/Details/Details.jsx";

import ServerDown
  from "./pages/ServerDown/ServerDown.jsx";


/* =========================================================
   MAIN WEBSITE PAGES
========================================================= */

import Home
  from "./pages/Home/Home.jsx";

import About
  from "./pages/About/About.jsx";

import Services
  from "./pages/Services/Services.jsx";

import ThinkPage
  from "./pages/Services/Pillars/ThinkPage.jsx";

import BuildPage
  from "./pages/Services/Pillars/BuildPage.jsx";

import SolvePage
  from "./pages/Services/Pillars/SolvePage.jsx";

import Industries
  from "./pages/Industries/Industries.jsx";

import Technologies
  from "./pages/Technologies/Technologies.jsx";

import Careers
  from "./pages/Careers/Careers.jsx";

import Insights
  from "./pages/Insights/Insights.jsx";

import Contact
  from "./pages/Contact/Contact.jsx";

import Portfolio
  from "./pages/Portfolio/Portfolio.jsx";

import CRM
  from "./pages/Products/CRM.jsx";

import HMS
  from "./pages/Products/HMS.jsx";

import CaseStudy
  from "./pages/CaseStudy/CaseStudy.jsx";

import Blog
  from "./pages/Blog/Blog.jsx";

import Achievements
  from "./pages/Achievements/Achievements.jsx";

import Gallery
  from "./pages/Gallery/Gallery.jsx";

import TermsOfUse
  from "./pages/TermsOfUse/TermsOfUse.jsx";

import PrivacyPolicy
  from "./pages/PrivacyPolicy/PrivacyPolicy.jsx";


/* =========================================================
   HOMES
========================================================= */

import Homes
  from "./pages/Homes/Homes.jsx";

import PropertyType
  from "./pages/PropertyType/PropertyType.jsx";


/* =========================================================
   MAIN SERVICE PAGES
========================================================= */

import BrandingDesign
  from "./pages/BrandingDesign/BrandingDesign.jsx";

import DevelopmentEcommerce
  from "./pages/DevelopmentEcommerce/DevelopmentEcommerce.jsx";

import TechStackWeb
  from "./pages/TechStackWeb/TechStackWeb.jsx";

import DataAnalyticsPerformance
  from "./pages/DataAnalyticsPerformance/DataAnalyticsPerformance.jsx";

import SmartAIBusinessAutomation
  from "./pages/SmartAIBusinessAutomation/SmartAIBusinessAutomation.jsx";

import DigitalMarketingCourse
  from "./pages/DigitalMarketingCourse/DigitalMarketingCourse.jsx";

import DigitalMarketing
  from "./pages/DigitalMarketing/DigitalMarketing.jsx";


/* =========================================================
   ADDITIONAL SERVICE PAGES
========================================================= */

import WebDevelopment
  from "./pages/WebDevelopment/WebDevelopment.jsx";

import AppDevelopment
  from "./pages/AppDevelopment/AppDevelopment.jsx";

import BrandingCreativeSolutions
  from "./pages/BrandingCreativeSolutions/BrandingCreativeSolutions.jsx";

import SocialMediaMarketing
  from "./pages/SocialMediaMarketing/SocialMediaMarketing.jsx";

import WhatsAppMarketing
  from "./pages/WhatsAppMarketing/WhatsAppMarketing.jsx";

import EmailMarketing
  from "./pages/EmailMarketing/EmailMarketing.jsx";

import PushNotificationMarketing
  from "./pages/PushNotificationMarketing/PushNotificationMarketing.jsx";

import DigitalPR
  from "./pages/DigitalPR/DigitalPR.jsx";

import TraditionalMarketing
  from "./pages/TraditionalMarketing/TraditionalMarketing.jsx";

import PerformanceMarketing
  from "./pages/PerformanceMarketing/PerformanceMarketing.jsx";


/* =========================================================
   SUCCESS STORY
========================================================= */

import SuccessStoryDetails
  from "./pages/SuccessStoryDetails/SuccessStoryDetails.jsx";


/* =========================================================
   FIRST WEBSITE OPEN

   /
   ↓
   D-GATE ANIMATION
   ↓
   HOME
========================================================= */

function WebsiteEntry() {

  const [
    animationComplete,
    setAnimationComplete,
  ] = useState(false);


  if (!animationComplete) {

    return (

      <PageTransition

        onComplete={() => {

          setAnimationComplete(
            true
          );

        }}

      />

    );

  }


  return <Home />;
}


/* =========================================================
   HOME TRANSITION

   NAVBAR HOME
   ↓
   ANIMATION
   ↓
   /home
========================================================= */

function HomeTransition() {

  const navigate =
    useNavigate();


  return (

    <PageTransition

      onComplete={() => {

        navigate(
          "/home",
          {
            replace: true,
          }
        );

      }}

    />

  );

}


/* =========================================================
   APP
========================================================= */

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLetsConnect = () => {
    navigate("/contact");
  };

  const hideFloatingActions = [
    "/production",
    "/api/visiter_data",
    "/details",
    "/server-down",
    "/home-transition",
  ].includes(location.pathname.toLowerCase());

  return (
    <>
      <ScrollToAnchor />


      <Routes>


        {/* =================================================
            WEBSITE ENTRY
        ================================================= */}

        <Route
          path="/"
          element={
            <WebsiteEntry />
          }
        />


        <Route
          path="/home"
          element={
            <Home />
          }
        />


        <Route
          path="/home-transition"
          element={
            <HomeTransition />
          }
        />


        {/* =================================================
            MAIN WEBSITE
        ================================================= */}

        <Route
          path="/about"
          element={
            <About />
          }
        />


        <Route
          path="/services"
          element={
            <Services />
          }
        />

        <Route
          path="/services/think"
          element={
            <ThinkPage />
          }
        />

        <Route
          path="/services/build"
          element={
            <BuildPage />
          }
        />

        <Route
          path="/services/solve"
          element={
            <SolvePage />
          }
        />


        <Route
          path="/industries"
          element={
            <Industries />
          }
        />


        {/* Home industry cards use this URL */}

        <Route
          path="/industries/:industryId"
          element={
            <Industries />
          }
        />


        <Route
          path="/technologies"
          element={
            <Technologies />
          }
        />


        <Route
          path="/careers"
          element={
            <Careers />
          }
        />


        <Route
          path="/insights"
          element={
            <Insights />
          }
        />


        <Route
          path="/contact"
          element={
            <Contact />
          }
        />


        <Route
          path="/portfolio"
          element={
            <Portfolio />
          }
        />

        <Route
          path="/crm"
          element={
            <CRM />
          }
        />

        <Route
          path="/products/crm"
          element={
            <CRM />
          }
        />

        <Route
          path="/hms"
          element={
            <HMS />
          }
        />

        <Route
          path="/products/hms"
          element={
            <HMS />
          }
        />


        <Route
          path="/case-study"
          element={
            <CaseStudy />
          }
        />


        <Route
          path="/case-studies"
          element={
            <CaseStudy />
          }
        />


        <Route
          path="/blog"
          element={
            <Blog />
          }
        />


        <Route
          path="/achievements"
          element={
            <Achievements />
          }
        />


        <Route
          path="/gallery"
          element={
            <Gallery />
          }
        />

        {/* =================================================
            LEGAL / TERMS OF USE
        ================================================= */}

        <Route
          path="/terms-of-use"
          element={
            <TermsOfUse />
          }
        />

        <Route
          path="/terms"
          element={
            <TermsOfUse />
          }
        />

        <Route
          path="/privacy-policy"
          element={
            <PrivacyPolicy />
          }
        />

        <Route
          path="/privacy"
          element={
            <PrivacyPolicy />
          }
        />


        {/* =================================================
            DGATE HOMES
        ================================================= */}

        <Route
          path="/Homes"
          element={
            <Homes />
          }
        />


        <Route
          path="/homes"
          element={
            <Homes />
          }
        />


        <Route
          path="/property/:type"
          element={
            <PropertyType />
          }
        />


        <Route
          path="/property-type"
          element={

            <Navigate
              to="/Homes"
              replace
            />

          }
        />


        {/* =================================================
            BRANDING DESIGN
        ================================================= */}

        <Route
          path="/BrandingDesign"
          element={
            <BrandingDesign />
          }
        />


        <Route
          path="/branding-design"
          element={
            <BrandingDesign />
          }
        />


        {/* =================================================
            DEVELOPMENT & ECOMMERCE
        ================================================= */}

        <Route
          path="/DevelopmentEcommerce"
          element={
            <DevelopmentEcommerce />
          }
        />


        <Route
          path="/development-ecommerce"
          element={
            <DevelopmentEcommerce />
          }
        />


        {/* =================================================
            TECH STACK
        ================================================= */}

        <Route
          path="/TechStackWeb"
          element={
            <TechStackWeb />
          }
        />


        <Route
          path="/tech-stack-web"
          element={
            <TechStackWeb />
          }
        />


        {/* =================================================
            DATA ANALYTICS
        ================================================= */}

        <Route
          path="/DataAnalyticsPerformance"
          element={
            <DataAnalyticsPerformance />
          }
        />


        <Route
          path="/data-analytics-performance"
          element={
            <DataAnalyticsPerformance />
          }
        />


        {/* =================================================
            AI AUTOMATION
        ================================================= */}

        <Route
          path="/SmartAIBusinessAutomation"
          element={
            <SmartAIBusinessAutomation />
          }
        />


        <Route
          path="/smart-ai-business-automation"
          element={
            <SmartAIBusinessAutomation />
          }
        />


        {/* =================================================
            DIGITAL MARKETING COURSE
        ================================================= */}

        <Route
          path="/DigitalMarketingCourse"
          element={
            <DigitalMarketingCourse />
          }
        />


        <Route
          path="/digital-marketing-course"
          element={
            <DigitalMarketingCourse />
          }
        />


        {/* =================================================
            DIGITAL MARKETING
        ================================================= */}

        <Route
          path="/DigitalMarketing"
          element={
            <DigitalMarketing />
          }
        />


        <Route
          path="/digital-marketing"
          element={
            <DigitalMarketing />
          }
        />


        {/* =================================================
            WEB DEVELOPMENT
        ================================================= */}

        <Route
          path="/web-development"
          element={
            <WebDevelopment />
          }
        />


        <Route
          path="/web-development.html"
          element={
            <WebDevelopment />
          }
        />


        {/* =================================================
            APP DEVELOPMENT
        ================================================= */}

        <Route
          path="/app-development"
          element={
            <AppDevelopment />
          }
        />


        <Route
          path="/app-development.html"
          element={
            <AppDevelopment />
          }
        />


        {/* =================================================
            BRANDING CREATIVE SOLUTIONS
        ================================================= */}

        <Route
          path="/branding-creative-solutions"
          element={
            <BrandingCreativeSolutions />
          }
        />


        <Route
          path="/branding-creative-solutions.html"
          element={
            <BrandingCreativeSolutions />
          }
        />


        {/* =================================================
            SOCIAL MEDIA
        ================================================= */}

        <Route
          path="/social-media-marketing"
          element={
            <SocialMediaMarketing />
          }
        />


        <Route
          path="/social-media-marketing.html"
          element={
            <SocialMediaMarketing />
          }
        />


        {/* =================================================
            WHATSAPP MARKETING
        ================================================= */}

        <Route
          path="/whatsapp-marketing"
          element={
            <WhatsAppMarketing />
          }
        />


        <Route
          path="/whatsapp-marketing.html"
          element={
            <WhatsAppMarketing />
          }
        />


        {/* =================================================
            EMAIL MARKETING
        ================================================= */}

        <Route
          path="/email-marketing"
          element={
            <EmailMarketing />
          }
        />


        <Route
          path="/email-marketing.html"
          element={
            <EmailMarketing />
          }
        />


        {/* =================================================
            PUSH NOTIFICATION
        ================================================= */}

        <Route
          path="/push-notification-marketing"
          element={
            <PushNotificationMarketing />
          }
        />


        <Route
          path="/push-notification-marketing.html"
          element={
            <PushNotificationMarketing />
          }
        />


        {/* =================================================
            DIGITAL PR
        ================================================= */}

        <Route
          path="/digital-pr"
          element={
            <DigitalPR />
          }
        />


        <Route
          path="/digital-pr.html"
          element={
            <DigitalPR />
          }
        />


        {/* =================================================
            TRADITIONAL MARKETING
        ================================================= */}

        <Route
          path="/traditional-marketing"
          element={
            <TraditionalMarketing />
          }
        />


        <Route
          path="/traditional-marketing.html"
          element={
            <TraditionalMarketing />
          }
        />


        {/* =================================================
            PERFORMANCE MARKETING
        ================================================= */}

        <Route
          path="/performance-marketing"
          element={
            <PerformanceMarketing />
          }
        />


        <Route
          path="/performance-marketing.html"
          element={
            <PerformanceMarketing />
          }
        />


        {/* =================================================
            SUCCESS STORIES

            Existing cards use:
            /success-stories/:slug
        ================================================= */}

        <Route
          path="/success-stories/:slug"
          element={
            <SuccessStoryDetails />
          }
        />


        {/* OLD URL SUPPORT */}

        <Route
          path="/success-story/:slug"
          element={
            <SuccessStoryDetails />
          }
        />


        {/* =================================================
            PRODUCTION

            DO NOT CHANGE EXISTING PAGE
        ================================================= */}

        <Route
          path="/production"
          element={
            <Production />
          }
        />


        {/* =================================================
            VISITOR DATA

            DO NOT CHANGE GOOGLE SHEET LOGIC
        ================================================= */}

        <Route
          path="/api/visiter_data"
          element={
            <Details />
          }
        />


        <Route
          path="/details"
          element={

            <Navigate
              to="/api/visiter_data"
              replace
            />

          }
        />


        {/* =================================================
            SERVER DOWN
        ================================================= */}

        <Route
          path="/server-down"
          element={
            <ServerDown />
          }
        />


        {/* =================================================
            INVALID URL
        ================================================= */}

        <Route
          path="*"
          element={

            <Navigate
              to="/"
              replace
            />

          }
        />
      </Routes>

      {/* ===================================================
          FLOATING CONTACT ACTIONS
      =================================================== */}
      {!hideFloatingActions && (
        <div className="floating-contact-actions">
          {/* LET'S CONNECT */}
          <button
            type="button"
            className="floating-connect"
            onClick={handleLetsConnect}
            aria-label="Let's Connect"
          >
            <span className="floating-connect__icon">
              <FaComments />
            </span>

            <span className="floating-connect__text">
              Let&apos;s Connect
            </span>
          </button>
        </div>
      )}

    </>
  );
}


export default App;