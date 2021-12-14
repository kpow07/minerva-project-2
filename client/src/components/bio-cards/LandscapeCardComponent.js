import "./LandscapeBioCard.style.css";

const LandscapeCardComponent = ({
  firstName,
  lastName,
  description,
  imageURL,
  canadian,
  science,
  technology,
  engineering,
  mathematics,
  onBioSelected,
}) => {
  return (
    <div className="science-bio-card" onClick={() => onBioSelected()}>
      <div className="science-upper-container">
        <img
          className="science-portrait"
          src={"/images/" + imageURL}
          alt={firstName}
          height="230px"
          style={{ backgroundPosition: "center" }}
        />

        <div className="bio-logo-container">
          {science ? (
            <div className="image-container" id="science-image-container">
              <img
                id="science-landing-card"
                src="images/logos/beaker.png"
                alt="logo"
                style={{ width: "35px", height: "35px" }}
              />
            </div>
          ) : null}
          {technology ? (
            <div
              className="bio-image-container"
              id="technology-image-container"
            >
              <img
                id="technology-landing-card"
                src="images/logos/computer.png"
                alt="logo"
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
            </div>
          ) : null}
          {engineering ? (
            <div
              className="bio-image-container"
              id="engineering-image-container"
            >
              <img
                id="engineering-landing-card"
                src="images/logos/gears.png"
                alt="logo"
                style={{ width: "44px", height: "44px" }}
              />
            </div>
          ) : null}
          {mathematics ? (
            <div
              className="bio-image-container"
              id="mathematics-image-container"
            >
              <img
                id="mathematics-landing-card"
                src="images/logos/pi-symbol.png"
                alt="logo"
                style={{ width: "44px", height: "44px" }}
              />
            </div>
          ) : null}
        </div>
      </div>
      <div className="science-lower-container">
        <h3>
          {firstName} {lastName}{" "}
          {canadian ? (
            <img
              id="mini-flag"
              src="images/logos/flag.png"
              style={{
                height: "20px",
                width: "30px",
                alignContent: "center",
                verticalAlign: "sub",
              }}
              alt="mini canadian flag"
            />
          ) : null}
        </h3>
        <div className="fields">
          {science ? <h4 style={{ color: "orangeRed" }}>SCIENCE</h4> : null}{" "}
          {technology ? (
            <h4 style={{ color: "paleVioletRed" }}>TECHNOLOGY</h4>
          ) : null}{" "}
          {engineering ? (
            <h4 style={{ color: "darkBlue" }}>ENGINEERING</h4>
          ) : null}{" "}
          {mathematics ? <h4 style={{ color: "gold" }}>MATH</h4> : null}{" "}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default LandscapeCardComponent;
