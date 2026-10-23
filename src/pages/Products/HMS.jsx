import { useEffect } from "react";
import Navbar from "../../components/Home/Navbar/Navbar";
import Footer from "../../components/Home/Footer/Footer";
import "./Products.css";

function HMS() {
  useEffect(() => {
    document.title = "HMS | DGATE Integrated Services";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="product-page">
      <Navbar />
      <main className="product-page__main">
        <div className="product-page__container">
          <div className="product-page__empty-card">
            <span className="product-page__badge">Product</span>
            <h1 className="product-page__title">HMS</h1>
            <p className="product-page__desc">Hospital Management System solution.</p>
            <div className="product-page__note">
              <span>This page is currently empty and ready for content.</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HMS;
