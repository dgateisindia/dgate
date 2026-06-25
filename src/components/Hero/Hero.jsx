import "./Hero.css";
import heroDesktop from "../../assets/images/hero-bg.png";
import heroMobile from "../../assets/images/hero-mobile.png";

function Hero() {
  return (
    <section className="hero">

      <picture>
        <source media="(max-width:768px)" srcSet={heroMobile} />
        <img src={heroDesktop} alt="Hero" className="hero-bg" />
      </picture>

      <div className="hero-content">
        <h1>
          Engineering Solutions
          <br />
          That Drive
          <span> Innovation</span>
        </h1>

        <p>
          DGATE is a trusted engineering services company delivering
          software, product engineering and technology solutions that
          help businesses transform and grow.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            EXPLORE SERVICES →
          </button>

          <button className="secondary-btn">
            ABOUT US →
          </button>
        </div>
      </div>

    </section>
  );
}

export default Hero;