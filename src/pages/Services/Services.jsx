import Navbar from "../../components/Home/Navbar/Navbar";
import HomeServices from "../../components/Home/Services/Services";
import Footer from "../../components/Home/Footer/Footer";

function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        <HomeServices />
      </main>

      <Footer />
    </>
  );
}

export default ServicesPage;