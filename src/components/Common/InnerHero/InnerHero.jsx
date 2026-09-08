import "./InnerHero.css";

function InnerHero({
  eyebrow,
  title,
  highlight,
  description,
  image,
  imageAlt,
  badgeTitle,
  badgeText,
}) {
  return (
    <section className="dgate-inner-hero">
      <div className="dgate-container">

        <div className="dgate-inner-hero__layout">

          {/* LEFT CONTENT */}
          <div className="dgate-inner-hero__content">

            <div className="dgate-eyebrow">
              <span className="dgate-eyebrow__dot" />
              {eyebrow}
            </div>

            <h1>
              {title}{" "}
              <span>{highlight}</span>
            </h1>

            <p>
              {description}
            </p>

          </div>


          {/* RIGHT IMAGE */}
          <div className="dgate-inner-hero__visual">

            <div className="dgate-inner-hero__image-wrap">
              <img
                src={image}
                alt={imageAlt}
                className="dgate-inner-hero__image"
              />
            </div>

            <div className="dgate-inner-hero__badge">
              <strong>
                {badgeTitle}
              </strong>

              <span>
                {badgeText}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default InnerHero;