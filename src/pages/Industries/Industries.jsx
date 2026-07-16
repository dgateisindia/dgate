import Navbar from "../../components/Home/Navbar/Navbar";
import IndustriesCTA from "../../components/IndustriesPage/IndustriesCTA/IndustriesCTA";

import IndustriesHero from "../../components/IndustriesPage/IndustriesHero/IndustriesHero";
import IndustryGrid from "../../components/IndustriesPage/IndustryGrid/IndustryGrid";
import Footer from "../../components/Home/Footer/Footer";
function Industries() {

  return (

    <>

      <Navbar />

      <IndustriesHero />
      <IndustryGrid/>
      <IndustriesCTA/>
      <Footer/>
      
    </>

  );

}

export default Industries;