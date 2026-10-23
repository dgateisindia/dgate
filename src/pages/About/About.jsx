import Navbar from "../../components/Home/Navbar/Navbar";
import Footer from "../../components/Home/Footer/Footer";

import AboutHero from "../../components/About/AboutHero/AboutHero.jsx";
import AboutPointOfView from "../../components/About/AboutPointOfView/AboutPointOfView.jsx";
import AboutPartnership from "../../components/About/AboutPartnership/AboutPartnership.jsx";
import FounderMessage from "../../components/About/FounderMessage/FounderMessage.jsx";
// import Leadership from "../../components/About/Leadership/Leadership.jsx";
import VisionMission from "../../components/About/VisionMission/VisionMission.jsx";


function About() {
  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <Navbar />


      {/* =====================================================
          ABOUT PAGE
      ===================================================== */}
      <main className="about-page">

        {/* =====================================================
            1. ABOUT HERO
        ===================================================== */}
        <AboutHero />

        {/* =====================================================
            2. OUR POINT OF VIEW & HOW WE THINK
        ===================================================== */}
        <AboutPointOfView />


        {/* =====================================================
            3. PARTNERSHIP
        ===================================================== */}
        <AboutPartnership />





        {/* =====================================================
            5. FOUNDER'S MESSAGE
        ===================================================== */}
        <FounderMessage />


        {/* =====================================================
            6. LEADERSHIP / TEAM (Temporarily hidden - preserved for future use)
        ===================================================== */}
        {/* <Leadership /> */}


        {/* =====================================================
            7. MISSION / VISION / VALUES
        ===================================================== */}
        <VisionMission />




      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}
      <Footer />
    </>
  );
}


export default About;