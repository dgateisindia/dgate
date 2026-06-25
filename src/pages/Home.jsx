import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stata";
import Services from "../components/Services/Services";
import Industries from "../components/Industries/Industries";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats/>
      <Services/>
      <Industries/>
      
    </>
  );
}

export default Home;