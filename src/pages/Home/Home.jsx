import Navbar from "../../components/Home/Navbar/Navbar";
import BannerPopup from "../../components/Home/Popup/BannerPopup";
import Hero from "../../components/Home/Hero/Hero";
import WhoWeAreHome from "../../components/Home/WhoWeAreHome/WhoWeAreHome";
import Stats from "../../components/Home/Stats/Stata";
import StrategicExpertise from "../../components/Home/StrategicExpertise/StrategicExpertise";
import Services from "../../components/Home/Services/Services";
import Industries from "../../components/Home/Industries/Industries";
{/* import Technologies from "../../components/Home/Technologies/Technologies"; */}
import SuccessStories from "../../components/Home/SuccessStories/SuccessStories";
import Clients from "../../components/Home/Clients/Clients";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import TrustProof from "../../components/Home/TrustProof/TrustProof";
{/* import ProvenImpact from "../../components/Home/ProvenImpact/ProvenImpact";
 import HomeAchievements from "../../components/Home/HomeAchievements/HomeAchievements";  
import CTA from "../../components/Home/CTA/CTA"; */}
import Footer from "../../components/Home/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <BannerPopup />

      <main className="home-page">
        {/* 1. HERO */}
        <Hero />

        {/* 2. WHO WE ARE */}
        <WhoWeAreHome />

        {/* 3. COMPANY STATS */}
        <Stats />

        {/* 4. STRATEGIC EXPERTISE 
        <StrategicExpertise />      */}

        {/* 5. SERVICES */}
        <Services />

        {/* 6. INDUSTRIES */}
        <Industries />
       
        {/* 7. TECHNOLOGIES 
        <Technologies />*/}

        {/* 8. DIGITAL SUCCESS STORIES */}
        <SuccessStories />

        {/* 9. TRUSTED CLIENTS */}
        <Clients />

        {/* 10. TESTIMONIALS */}
        <Testimonials />

        {/* 11. TRUST PROOF 
        <TrustProof /> */}

        {/* 12. PROVEN IMPACT 
        <ProvenImpact /> */}

        {/* 13. ACHIEVEMENTS 
        <HomeAchievements />    */}

        {/* 14. CTA 
        <CTA /> */}
      </main>

      <Footer />
    </>
  );
}

export default Home;