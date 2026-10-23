import { useEffect } from "react";
import Navbar from "../../components/Home/Navbar/Navbar";
import Footer from "../../components/Home/Footer/Footer";
import CaseStudySection from "../../components/CaseStudy/CaseStudySection";
import "./CaseStudy.css";

function CaseStudy() {
  /* Scroll to top & set document title */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title = "Case Study Framework | DGATE Integrated Services";
  }, []);

  return (
    <div className="case-study-page">
      {/* =====================================================
          GLOBAL NAVBAR
      ===================================================== */}
      <Navbar />

      <main>
        <CaseStudySection />
      </main>

      {/* =====================================================
          GLOBAL FOOTER
      ===================================================== */}
      <Footer />
    </div>
  );
}

export default CaseStudy;
