import {
  Routes,
  Route,
} from "react-router-dom";

import { FaWhatsapp } from "react-icons/fa";
import "./App.css";

import ScrollToAnchor from "./components/ScrollToAnchor.jsx";

import Portfolio from "./pages/Portfolio/Portfolio";
import Blog from "./pages/Blog/Blog";
import Achievements from "./pages/Achievements/Achievements";
import Gallery from "./pages/Gallery/Gallery";


import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Services from "./pages/Services/Services.jsx";
import Industries from "./pages/Industries/Industries.jsx";
import Technologies from "./pages/Technologies/Technologies.jsx";
import Careers from "./pages/Careers/Careers.jsx";
import Insights from "./pages/Insights/Insights.jsx";
import Contact from "./pages/Contact/Contact.jsx";

import BrandingDesign from "./pages/BrandingDesign/BrandingDesign";
import DevelopmentEcommerce from "./pages/DevelopmentEcommerce/DevelopmentEcommerce";
import TechStackWeb from "./pages/TechStackWeb/TechStackWeb";
import DataAnalyticsPerformance from "./pages/DataAnalyticsPerformance/DataAnalyticsPerformance";
import SocialMediaMarketing from "./pages/SocialMediaMarketing/SocialMediaMarketing";
import SmartAIBusinessAutomation from "./pages/SmartAIBusinessAutomation/SmartAIBusinessAutomation";



function App() {
  return (
    <>
      <ScrollToAnchor />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/industries"
          element={<Industries />}
        />

        <Route
          path="/technologies"
          element={<Technologies />}
        />

        <Route
          path="/careers"
          element={<Careers />}
        />

        <Route
          path="/insights"
          element={<Insights />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/portfolio"
          element={<Portfolio />}
        />

        <Route
          path="/blog"
          element={<Blog />}
        />

        <Route
          path="/achievements"
          element={<Achievements />}
        />

        <Route
          path="/gallery"
          element={<Gallery />}
        />

        <Route
          path="/BrandingDesign.jsx"
          element={<BrandingDesign />}
        />

        <Route
          path="/DevelopmentEcommerce.jsx"
          element={<DevelopmentEcommerce />}
        />

        <Route
          path="/TechStackWeb.jsx"
          element={<TechStackWeb />}
        />

        <Route
          path="/DataAnalyticsPerformance.jsx"
          element={<DataAnalyticsPerformance />}
        />

        <Route
          path="/SocialMediaMarketing.jsx"
          element={<SocialMediaMarketing />}
        />

        <Route
          path="/SmartAIBusinessAutomation.jsx"
          element={<SmartAIBusinessAutomation />}
        />



      </Routes>
      {/* =====================================================
    FLOATING WHATSAPP BUTTON
===================================================== */}

    <a
      href="https://wa.me/91XXXXXXXXXX?text=Hello%20DGATE%20Integrated%20Services%2C%20I%20would%20like%20to%20discuss%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat with DGATE on WhatsApp"
    >
      <FaWhatsapp />
      
      <span className="floating-whatsapp__tooltip">
        Chat with us
      </span>
    </a>
    </>
  );
}


export default App;