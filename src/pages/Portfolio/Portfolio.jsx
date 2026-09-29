import Navbar
  from "../../components/Home/Navbar/Navbar";

import SuccessStories
  from "../../components/Home/SuccessStories/SuccessStories";

import Footer
  from "../../components/Home/Footer/Footer";


function Portfolio() {
  return (
    <>
      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <Navbar />


      {/* =====================================================
          SUCCESS STORIES
      ===================================================== */}

      <main>
        <SuccessStories />
      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />
    </>
  );
}


export default Portfolio;