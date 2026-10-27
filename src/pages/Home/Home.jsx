import Navbar from "../../components/Home/Navbar/Navbar";

import Hero from "../../components/Home/Hero/Hero";
import WhoWeAreHome from "../../components/Home/WhoWeAreHome/WhoWeAreHome";
import Stats from "../../components/Home/Stats/Stata";
import Services from "../../components/Home/Services/Services";
import DgateProcess from "../../components/Home/DgateProcess/DgateProcess";
import SuccessStories from "../../components/Home/SuccessStories/SuccessStories";
import Clients from "../../components/Home/Clients/Clients";
import Testimonials from "../../components/Home/Testimonials/Testimonials";

import Footer from "../../components/Home/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />



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

        {/* 6. THE D-GATE PROCESS */}
        <DgateProcess />
       
        {/* 7. TECHNOLOGIES 
        <Technologies />*/}

        {/* 8. DIGITAL SUCCESS STORIES */}
        <SuccessStories />

        {/* SECTION 06 — HOW WE WORK (Combined into The D-GATE Process diagram above)
        <HowWeWork /> */}

        {/* 9. TRUSTED CLIENTS */}
        <Clients />

        {/* 10. TESTIMONIALS */}
        <Testimonials />


      </main>

      <Footer />
    </>
  );
}

export default Home;