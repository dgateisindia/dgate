import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stata";
import Services from "../components/Services/Services";
import Industries from "../components/Industries/Industries";
import Technologies from "../components/Technologies/Technologies";
import Clients from "../components/Clients/Clients";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";
import BannerPopup from "../components/Popup/BannerPopup";


function Home() {
  return (
    <>
      <Navbar />
      <BannerPopup/>
      <Hero />
      <Stats/>
      <Services/>
      <Industries/>
      <Technologies/>
      <Clients/>
      <CTA/>
      <Footer/>
      
    </>
  );
}

export default Home;