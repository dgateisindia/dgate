import "./AppDevelopment.css";

import {
  FaMobileAlt,
} from "react-icons/fa";

import ServicePageShell
  from "../../components/ServicesPage/ServicePageShell/ServicePageShell";


function AppDevelopment() {
  const services = [
    "Android App Development",
    "iOS App Development",
    "Hybrid App Development – Flutter & React Native",
    "Native Mobile Applications",
    "UI/UX for Apps",
    "App Testing & Quality Assurance",
    "App Maintenance & Updates",
    "Enterprise Mobility Solutions",
  ];


  return (
    <ServicePageShell
      pageClass="app-development-page"
      eyebrow="MOBILE EXPERIENCES"
      title="App Development"
      description="We design and develop reliable mobile applications that combine intuitive user experience, scalable architecture and strong business functionality."
      tagline="Turning ideas into seamless mobile experiences."
      services={services}
      icon={FaMobileAlt}
      slug="app-development"
      seoTitle="Mobile App Development Company Bangalore | DGATE IS"
      metaDescription="Android, iOS, Flutter, React Native and enterprise mobile app development services in Bangalore by DGATE Integrated Services."
    />
  );
}


export default AppDevelopment;