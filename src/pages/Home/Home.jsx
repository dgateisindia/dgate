import Navbar from "../../components/Home/Navbar/Navbar";
import Hero from "../../components/Home/Hero/Hero";
import Stats from "../../components/Home/Stats/Stata";
import Services from "../../components/Home/Services/Services";
import Industries from "../../components/Home/Industries/Industries";
import Technologies from "../../components/Home/Technologies/Technologies";
import Clients from "../../components/Home/Clients/Clients";
import CTA from "../../components/Home/CTA/CTA";
import Footer from "../../components/Home/Footer/Footer";
import BannerPopup from "../../components/Home/Popup/BannerPopup";


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