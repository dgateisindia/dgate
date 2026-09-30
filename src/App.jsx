// import {
//   Routes,
//   Route,
//   Navigate,
//   useNavigate,
// } from "react-router-dom";

// import PageTransition from "./components/PageTransition/PageTransition.jsx";

// import Production from "./pages/Production/Production.jsx";
// import Details from "./pages/Details/Details.jsx";


// /* =========================================================
//    OPENING ANIMATION
// ========================================================= */

// function OpeningAnimation() {

//   const navigate =
//     useNavigate();


//   const handleAnimationComplete =
//     () => {

//       navigate(
//         "/production",
//         {
//           replace: true,
//         }
//       );

//     };


//   return (
//     <PageTransition
//       onComplete={
//         handleAnimationComplete
//       }
//     />
//   );
// }


// /* =========================================================
//    APP
// ========================================================= */

// function App() {

//   return (

//     <Routes>

//       {/* ===============================================
//           WEBSITE OPEN
//           ANIMATION -> PRODUCTION
//       =============================================== */}

//       <Route
//         path="/"
//         element={
//           <OpeningAnimation />
//         }
//       />


//       {/* ===============================================
//           PRODUCTION FORM
//       =============================================== */}

//       <Route
//         path="/production"
//         element={
//           <Production />
//         }
//       />


//       {/* ===============================================
//           VISITOR DATA
//       =============================================== */}

//       <Route
//         path="/api/visiter_data"
//         element={
//           <Details />
//         }
//       />


//       {/* ===============================================
//           INVALID ROUTE
//       =============================================== */}

//       <Route
//         path="*"
//         element={
//           <Navigate
//             to="/"
//             replace
//           />
//         }
//       />

//     </Routes>

//   );

// }


// export default App;






import {
  useState,
} from "react";

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


/* =========================================================
   REAL ESTATE / HOMES
========================================================= */

import Homes
  from "./pages/Homes/Homes.jsx";

import PropertyType
  from "./pages/PropertyType/PropertyType.jsx";


/* =========================================================
   MAIN SERVICE DETAIL PAGES
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
   OTHER SERVICE PAGES
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
   SUCCESS STORIES
========================================================= */

import SuccessStoryDetails
  from "./pages/SuccessStoryDetails/SuccessStoryDetails.jsx";


/* =========================================================
   FIRST WEBSITE OPEN

   /
   ↓
   D-GATE ANIMATION
   ↓
   HOME PAGE

   URL remains /
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

   Used when navbar HOME is clicked.

   /home-transition
        ↓
   animation
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

  const location =
    useLocation();


  const currentPath =
    location.pathname
      .toLowerCase();


  /* =======================================================
     HIDE WHATSAPP ONLY ON SPECIAL PAGES
  ======================================================= */

  const hideFloatingActions =

    currentPath ===
      "/home-transition" ||

    currentPath ===
      "/production" ||

    currentPath ===
      "/api/visiter_data" ||

    currentPath ===
      "/details" ||

    currentPath ===
      "/server-down";


  return (

    <>

      <ScrollToAnchor />


      <Routes>


        {/* =================================================
            WEBSITE OPEN

            dgateis.com
                ↓
            D-GATE animation
                ↓
            HOME PAGE
        ================================================= */}

        <Route
          path="/"
          element={
            <WebsiteEntry />
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


        {/* HOME WITH ANIMATION */}

        <Route
          path="/home-transition"
          element={
            <HomeTransition />
          }
        />


        {/* =================================================
            PRODUCTION PAGE

            KEEP EXISTING PAGE UNCHANGED
        ================================================= */}

        <Route
          path="/production"
          element={
            <Production />
          }
        />


        {/* =================================================
            VISITOR DATA

            KEEP EXISTING GOOGLE SHEET PAGE UNCHANGED
        ================================================= */}

        <Route
          path="/api/visiter_data"
          element={
            <Details />
          }
        />


        {/* OLD DETAILS URL → NEW VISITOR URL */}

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
            NORMAL WEBSITE PAGES
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
          path="/industries"
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
            HOMES / REAL ESTATE
        ================================================= */}

        <Route
          path="/Homes"
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


        {/* =================================================
            MAIN SERVICE DETAIL PAGES
        ================================================= */}

        <Route
          path="/BrandingDesign"
          element={
            <BrandingDesign />
          }
        />


        <Route
          path="/DevelopmentEcommerce"
          element={
            <DevelopmentEcommerce />
          }
        />


        <Route
          path="/TechStackWeb"
          element={
            <TechStackWeb />
          }
        />


        <Route
          path="/DataAnalyticsPerformance"
          element={
            <DataAnalyticsPerformance />
          }
        />


        <Route
          path="/SmartAIBusinessAutomation"
          element={
            <SmartAIBusinessAutomation />
          }
        />


        <Route
          path="/DigitalMarketingCourse"
          element={
            <DigitalMarketingCourse />
          }
        />


        <Route
          path="/DigitalMarketing"
          element={
            <DigitalMarketing />
          }
        />


        {/* =================================================
            ADDITIONAL SERVICE PAGES
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
            SUCCESS STORY DETAILS
        ================================================= */}

        <Route
          path="/success-stories/:slug"
          element={
            <SuccessStoryDetails />
          }
        />


        {/* =================================================
            FALLBACK

            INVALID URL → WEBSITE HOME
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
          GLOBAL WHATSAPP BUTTON
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