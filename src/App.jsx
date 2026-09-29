import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  FaWhatsapp,
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

  const location =
    useLocation();

  const navigate =
    useNavigate();


  const currentPath =
    location.pathname.toLowerCase();


  /* =======================================================
     FIRST WEBSITE ANIMATION COMPLETE

     /
     ↓
     Animation
     ↓
     Production
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
     FLOATING WHATSAPP
  ======================================================= */

  const hideFloatingActions =

    currentPath === "/" ||

    currentPath === "/production" ||

    currentPath === "/api/visiter_data" ||

    currentPath === "/details" ||

    currentPath === "/server-down";


  /* =======================================================
     UI
  ======================================================= */

  return (

    <>

      <ScrollToAnchor />


      <Routes>


        {/* =================================================
            WEBSITE OPEN

            /
            ↓
            D-GATE ANIMATION
            ↓
            /production
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
            PRODUCTION FORM

            Form
            ↓
            Submit
            ↓
            Thank You
            ↓
            Cancel
            ↓
            Form
        ================================================= */}

        <Route
          path="/production"
          element={
            <Production />
          }
        />


        {/* =================================================
            DETAILS PAGE

            This page still exists,
            but Production does NOT
            automatically redirect here.
        ================================================= */}

        <Route
          path="/api/visiter_data"
          element={
            <Details />
          }
        />


        <Route
          path="/api/visiter_data"
          element={
            <Navigate
              to="/api/visiter_data"
              replace
            />
          }
        />


        {/* =================================================
            D-GATE WEBSITE
        ================================================= */}

        


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
          GLOBAL WHATSAPP
      =================================================== */}

      {!hideFloatingActions && (

        <div
          className="floating-contact-actions"
        >

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

      )}

    </>

  );

}


export default App;