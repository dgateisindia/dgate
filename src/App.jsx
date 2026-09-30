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
  from "./pages/ServerDown/ServerDown";


/* =========================================================
   D-GATE WEBSITE PAGES
========================================================= */

import Home
  from "./pages/Home/Home.jsx";

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
  from "./pages/Portfolio/Portfolio";

import Blog
  from "./pages/Blog/Blog";

import Achievements
  from "./pages/Achievements/Achievements";

import Gallery
  from "./pages/Gallery/Gallery";

import PropertyType
  from "./pages/PropertyType/PropertyType.jsx";


/* =========================================================
   SERVICE DETAIL PAGES
========================================================= */

import BrandingDesign
  from "./pages/BrandingDesign/BrandingDesign";

import DevelopmentEcommerce
  from "./pages/DevelopmentEcommerce/DevelopmentEcommerce";

import TechStackWeb
  from "./pages/TechStackWeb/TechStackWeb";

import DataAnalyticsPerformance
  from "./pages/DataAnalyticsPerformance/DataAnalyticsPerformance";

import SmartAIBusinessAutomation
  from "./pages/SmartAIBusinessAutomation/SmartAIBusinessAutomation";

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
     INITIAL ANIMATION COMPLETE

     /
     ↓
     animation
     ↓
     /home
  ======================================================= */

  const handleInitialAnimationComplete =
    () => {

      navigate(
        "/home",
        {
          replace: true,
        }
      );

    };


  /* =======================================================
     LET'S CONNECT CLICK
  ======================================================= */

  const handleLetsConnect =
    () => {

      navigate("/contact");

    };


  /* =======================================================
     UI
  ======================================================= */

  return (

    <>

      <ScrollToAnchor />


      <Routes>


        {/* =================================================
            INITIAL ANIMATION
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
            HOME
        ================================================= */}

        <Route
          path="/home"
          element={
            <Home />
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
            SERVICES
        ================================================= */}

        <Route
          path="/services"
          element={
            <Services />
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
            GALLERY
        ================================================= */}

        <Route
          path="/gallery"
          element={
            <Gallery />
          }
        />


        {/* =================================================
            PROPERTY TYPE
        ================================================= */}

        <Route
          path="/property-type"
          element={
            <PropertyType />
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


        {/* =================================================
            DEVELOPMENT & ECOMMERCE
        ================================================= */}

        <Route
          path="/development-ecommerce"
          element={
            <DevelopmentEcommerce />
          }
        />


        {/* =================================================
            TECH STACK WEB
        ================================================= */}

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
          path="/data-analytics-performance"
          element={
            <DataAnalyticsPerformance />
          }
        />


        {/* =================================================
            SMART AI BUSINESS AUTOMATION
        ================================================= */}

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
          path="/digital-marketing-course"
          element={
            <DigitalMarketingCourse />
          }
        />


        {/* =================================================
            SUCCESS STORY
        ================================================= */}

        <Route
          path="/success-story/:id"
          element={
            <SuccessStoryDetails />
          }
        />


        {/* =================================================
            PRODUCTION FORM
        ================================================= */}

        <Route
          path="/production"
          element={
            <Production />
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
            OLD DETAILS URL
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
            FALLBACK
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
          GLOBAL FLOATING ACTIONS

          IMPORTANT:
          This is OUTSIDE Routes,
          therefore visible on EVERY page.
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
            LET'S CONNECT
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