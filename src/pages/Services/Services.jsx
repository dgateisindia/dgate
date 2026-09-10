import Navbar from "../../components/Home/Navbar/Navbar";

import ServiceGrid from "../../components/ServicesPage/ServiceGrid/ServiceGrid";

import ServicesCTA from "../../components/ServicesPage/ServicesCTA/ServicesCTA";

import ServicesHero from "../../components/ServicesPage/ServicesHero/ServicesHero";

import WhyChoose from "../../components/ServicesPage/WhyChoose/WhyChoose";

import Footer from "../../components/Home/Footer/Footer";


function Services() {
  return (
    <>
      <Navbar />

      <ServicesHero />

      <ServiceGrid />

      <WhyChoose />

      <ServicesCTA />

      <Footer />
    </>
  );
}


export default Services;