import Navbar from "../../components/Home/Navbar/Navbar";
import ContactHero from "../../components/ContactPage/ContactHero/ContactHero";
import Footer from "../../components/Home/Footer/Footer";
import ContactForm from "../../components/ContactPage/ContactForm/ContactForm";
import ContactInfo from "../../components/ContactPage/ContactInfo/ContactInfo";

function Contact() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactForm/>
      <ContactInfo/>
      <Footer />
    </>
  );
}

export default Contact;