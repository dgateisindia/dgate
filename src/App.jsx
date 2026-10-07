import {
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import {
  FaWhatsapp,
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

import Homes
  from "./pages/Homes/Homes.jsx";

import About
  from "./pages/About/About.jsx";

import Services
  from "./pages/Services/Services.jsx";

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

import Blog
  from "./pages/Blog/Blog.jsx";

import Achievements
  from "./pages/Achievements/Achievements.jsx";

import Gallery
  from "./pages/Gallery/Gallery.jsx";

import PropertyType
  from "./pages/PropertyType/PropertyType.jsx";


/* =========================================================
   SERVICE DETAIL PAGES
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


/* =========================================================
   SUCCESS STORY
========================================================= */

import SuccessStoryDetails
  from "./pages/SuccessStoryDetails/SuccessStoryDetails.jsx";


/* =========================================================
   APP
========================================================= */

function App() {

  const navigate =
    useNavigate();


  /* =======================================================
     INITIAL ANIMATION

     /
        ↓
     PageTransition
        ↓
     /production
  ======================================================= */

  const handleInitialAnimationComplete =
    () => {

      navigate(
        "/production",
        {
          replace: true,
        }
      );

    };


  /* =======================================================
     LET'S CONNECT
  ======================================================= */

  const handleLetsConnect =
    () => {

      navigate(
        "/contact"
      );

    };


  /* =======================================================
     UI
  ======================================================= */

  return (

    <>

      <ScrollToAnchor />


      <Routes>


        {/* =================================================
            FIRST WEBSITE VISIT

            /
              ↓
            ANIMATION
              ↓
            PRODUCTION FORM
        ================================================= */}

        <Route
          path="/"
          element={
            <PageTransition
              onComplete={
                handleInitialAnimationComplete
              }
            />
          }
        />


        {/* =================================================
            HOME ALIAS
        ================================================= */}

        <Route
          path="/home"
          element={
            <Home />
          }
        />


        {/* =================================================
            OPTIONAL INTRO / TRANSITION
        ================================================= */}

        <Route
          path="/intro"
          element={
            <PageTransition
              onComplete={
                handleInitialAnimationComplete
              }
            />
          }
        />


        {/* =================================================
            PRODUCTION
        ================================================= */}

        <Route
          path="/production"
          element={
            <Production />
          }
        />


        {/* =================================================
            OLD PRODUCTION URL
        ================================================= */}

        <Route
          path="/Production"
          element={
            <Navigate
              to="/production"
              replace
            />
          }
        />


        {/* =================================================
            VISITOR DATA
        ================================================= */}

        <Route
          path="/api/visiter_data"
          element={
            <Details />
          }
        />


        {/* =================================================
            OLD DETAILS URLS
        ================================================= */}

        <Route
          path="/details"
          element={
            <Navigate
              to="/api/visiter_data"
              replace
            />
          }
        />


        <Route
          path="/Details"
          element={
            <Navigate
              to="/api/visiter_data"
              replace
            />
          }
        />


        {/* =================================================
            ABOUT
        ================================================= */}

        <Route
          path="/about"
          element={
            <About />
          }
        />


        {/* =================================================
            HOMES
        ================================================= */}

        <Route
          path="/homes"
          element={
            <Homes />
          }
        />


        {/* =================================================
            PROPERTY CATEGORY

            Example:
            /property/apartments
            /property/villas
            /property/plots
        ================================================= */}

        <Route
          path="/property/:type"
          element={
            <PropertyType />
          }
        />


        {/* =================================================
            OLD PROPERTY TYPE URL
        ================================================= */}

        <Route
          path="/property-type"
          element={
            <Navigate
              to="/homes"
              replace
            />
          }
        />


        {/* =================================================
            OLD DYNAMIC PROPERTY URL SUPPORT
        ================================================= */}

        <Route
          path="/property-type/:type"
          element={
            <PropertyType />
          }
        />


        {/* =================================================
            SERVICES
        ================================================= */}

        <Route
          path="/services"
          element={
            <Services />
          }
        />


        {/* =================================================
            OLD SERVICES URL
        ================================================= */}

        <Route
          path="/Home/Services"
          element={
            <Navigate
              to="/services"
              replace
            />
          }
        />


        {/* =================================================
            INDUSTRIES
        ================================================= */}

        <Route
          path="/industries"
          element={
            <Industries />
          }
        />


        {/* =================================================
            TECHNOLOGIES
        ================================================= */}

        <Route
          path="/technologies"
          element={
            <Technologies />
          }
        />


        {/* =================================================
            CAREERS
        ================================================= */}

        <Route
          path="/careers"
          element={
            <Careers />
          }
        />


        {/* =================================================
            INSIGHTS
        ================================================= */}

        <Route
          path="/insights"
          element={
            <Insights />
          }
        />


        {/* =================================================
            CONTACT
        ================================================= */}

        <Route
          path="/contact"
          element={
            <Contact />
          }
        />


        {/* =================================================
            PORTFOLIO
        ================================================= */}

        <Route
          path="/portfolio"
          element={
            <Portfolio />
          }
        />


        {/* =================================================
            BLOG
        ================================================= */}

        <Route
          path="/blog"
          element={
            <Blog />
          }
        />


        {/* =================================================
            ACHIEVEMENTS
        ================================================= */}

        <Route
          path="/achievements"
          element={
            <Achievements />
          }
        />


        {/* =================================================
            CERTIFICATES ALIAS
        ================================================= */}

        <Route
          path="/certificates"
          element={
            <Achievements />
          }
        />


        {/* =================================================
            GALLERY
        ================================================= */}

        <Route
          path="/gallery"
          element={
            <Gallery />
          }
        />


        {/* =================================================
            BRANDING & DESIGN
        ================================================= */}

        <Route
          path="/branding-design"
          element={
            <BrandingDesign />
          }
        />


        {/* OLD URL */}

        <Route
          path="/BrandingDesign"
          element={
            <Navigate
              to="/branding-design"
              replace
            />
          }
        />


        {/* =================================================
            DEVELOPMENT & E-COMMERCE
        ================================================= */}

        <Route
          path="/development-ecommerce"
          element={
            <DevelopmentEcommerce />
          }
        />


        {/* OLD URL */}

        <Route
          path="/DevelopmentEcommerce"
          element={
            <Navigate
              to="/development-ecommerce"
              replace
            />
          }
        />


        {/* =================================================
            TECHNOLOGY STACK & WEB
        ================================================= */}

        <Route
          path="/tech-stack-web"
          element={
            <TechStackWeb />
          }
        />


        {/* OLD URL */}

        <Route
          path="/TechStackWeb"
          element={
            <Navigate
              to="/tech-stack-web"
              replace
            />
          }
        />


        {/* =================================================
            DATA ANALYTICS
        ================================================= */}

        <Route
          path="/data-analytics-performance"
          element={
            <DataAnalyticsPerformance />
          }
        />


        {/* OLD URL */}

        <Route
          path="/DataAnalyticsPerformance"
          element={
            <Navigate
              to="/data-analytics-performance"
              replace
            />
          }
        />


        {/* =================================================
            SMART AI
        ================================================= */}

        <Route
          path="/smart-ai-business-automation"
          element={
            <SmartAIBusinessAutomation />
          }
        />


        {/* OLD URL */}

        <Route
          path="/SmartAIBusinessAutomation"
          element={
            <Navigate
              to="/smart-ai-business-automation"
              replace
            />
          }
        />


        {/* =================================================
            DIGITAL MARKETING COURSE
        ================================================= */}

        <Route
          path="/digital-marketing-course"
          element={
            <DigitalMarketingCourse />
          }
        />


        {/* OLD URL */}

        <Route
          path="/DigitalMarketingCourse"
          element={
            <Navigate
              to="/digital-marketing-course"
              replace
            />
          }
        />


        {/* =================================================
            SUCCESS STORY DETAILS

            Current format:
            /success-stories/project-slug
        ================================================= */}

        <Route
          path="/success-stories/:slug"
          element={
            <SuccessStoryDetails />
          }
        />


        {/* =================================================
            OLD SUCCESS STORY URL
        ================================================= */}

        <Route
          path="/success-story/:slug"
          element={
            <SuccessStoryDetails />
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


        {/* OLD URL */}

        <Route
          path="/ServerDown"
          element={
            <Navigate
              to="/server-down"
              replace
            />
          }
        />


        {/* =================================================
            FALLBACK

            Any bad/old URL returns to Home.
        ================================================= */}

        <Route
          path="*"
          element={
            <Navigate
              to="/home"
              replace
            />
          }
        />


      </Routes>


      {/* ===================================================
          GLOBAL FLOATING BUTTONS
      =================================================== */}

      <div
        className="floating-contact-actions"
      >


        {/* =================================================
            LET'S CONNECT
        ================================================= */}

        <button
          type="button"
          className="floating-connect"
          onClick={
            handleLetsConnect
          }
          aria-label="Let's Connect"
        >

          <span
            className="floating-connect__icon"
          >
            <FaComments />
          </span>


          <span
            className="floating-connect__text"
          >
            LET&apos;S CONNECT
          </span>

        </button>


        {/* =================================================
            WHATSAPP
        ================================================= */}

        <a
          href="https://wa.me/919538562600?text=Hello%20DGATE%20Integrated%20Services%2C%20I%20would%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp"
          aria-label="Chat with DGATE on WhatsApp"
        >

          <FaWhatsapp />

        </a>


      </div>


    </>

  );

}


export default App;