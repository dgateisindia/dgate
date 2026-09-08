import AboutHero from "../../components/About/AboutHero/AboutHero.jsx";
import WhoWeAre from "../../components/About/WhoWeAre/WhoWeAre.jsx";
import AboutExperience from "../../components/About/AboutExperience/AboutExperience.jsx";
import FounderMessage from "../../components/About/FounderMessage/FounderMessage.jsx";
import Leadership from "../../components/About/Leadership/Leadership.jsx";
import TrustedBrands from "../../components/About/TrustedBrands/TrustedBrands.jsx";
import VisionMission from "../../components/About/VisionMission/VisionMission.jsx";
import Journey from "../../components/About/Journey/Journey.jsx";
import AboutStats from "../../components/About/AboutStats/AboutStats.jsx";
import ClientStories from "../../components/About/ClientStories/ClientStories.jsx";
import AboutCTA from "../../components/About/AboutCTA/AboutCTA.jsx";


function About() {
  return (
    <main className="about-page">

      {/* =====================================================
          1. ABOUT HERO
      ===================================================== */}
      <AboutHero />


      {/* =====================================================
          2. WHO WE ARE
      ===================================================== */}
      <WhoWeAre />


      {/* =====================================================
          3. 20+ YEARS / COMPANY EXPERIENCE
      ===================================================== */}
      <AboutExperience />


      {/* =====================================================
          4. FOUNDER'S MESSAGE
      ===================================================== */}
      <FounderMessage />


      {/* =====================================================
          5. LEADERSHIP / TEAM
      ===================================================== */}
      <Leadership />


      {/* =====================================================
          6. 250+ TRUSTED BRANDS
      ===================================================== */}
      <TrustedBrands />


      {/* =====================================================
          7. MISSION / VISION / VALUES
      ===================================================== */}
      <VisionMission />


      {/* =====================================================
          8. COMPANY JOURNEY
      ===================================================== */}
      <Journey />


      {/* =====================================================
          9. COMPANY STATS
      ===================================================== */}
      <AboutStats />


      {/* =====================================================
          10. CLIENT STORIES / TESTIMONIALS
      ===================================================== */}
      <ClientStories />


      {/* =====================================================
          11. ABOUT CTA
      ===================================================== */}
      <AboutCTA />

    </main>
  );
}


export default About;