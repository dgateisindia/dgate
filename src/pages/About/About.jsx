import Navbar from "../../components/Home/Navbar/Navbar";
import AboutHero from "../../components/About/AboutHero/AboutHero";
import HeroTechIcons from "../../components/About/AboutHero/HeroTechIcons";
import AboutStats from "../../components/About/AboutStats/AboutStats";
import WhoWeAre from "../../components/About/WhoWeAre/WhoWeAre";
import VisionMission from "../../components/About/VisionMission/VisionMission";
import Journey from "../../components/About/Journey/Journey";
import Leadership from "../../components/About/Leadership/Leadership";
import AboutCTA from "../../components/About/AboutCTA/AboutCTA";
import Footer from "../../components/Home/Footer/Footer";


function About() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <HeroTechIcons/>
      <AboutStats/>
      <WhoWeAre/>
      <VisionMission/>
      <Journey/>
      <Leadership/>
      <AboutCTA/>
      <Footer/>
      
      
    </>
  );
}

export default About;