import Navbar from "../../components/Navbar/Navbar";
import AboutHero from "../../components/About/AboutHero/AboutHero";
import HeroTechIcons from "../../components/About/AboutHero/HeroTechIcons";
import AboutStats from "../../components/About/AboutStats/AboutStats";
import WhoWeAre from "../../components/About/WhoWeAre/WhoWeAre";
import VisionMission from "../../components/About/VisionMission/VisionMission";
import Journey from "../../components/About/Journey/Journey";



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
      
      
    </>
  );
}

export default About;