import Navbar from "../../components/Home/Navbar/Navbar";
import Footer from "../../components/Home/Footer/Footer";

import CareersHero from "../../components/Careers/CareersHero/CareersHero";
import OpenPositions from "../../components/Careers/OpenPositions/OpenPositions";
import WhyWorkHere from "../../components/Careers/WhyWorkHere/WhyWorkHere";
import LifeAtDgate from "../../components/Careers/LifeAtDgate/LifeAtDgate";
import CareersCTA from "../../components/Careers/CareersCTA/CareersCTA";

function Careers() {
  return (
    <>
      <Navbar />

      <CareersHero />

      <OpenPositions />

      <WhyWorkHere />

      <LifeAtDgate />

      <CareersCTA />

      <Footer />
    </>
  );
}

export default Careers;