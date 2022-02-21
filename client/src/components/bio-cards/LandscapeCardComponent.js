import "./LandscapeBioCard.style.css";

const LandscapeCardComponent = ({ props }) => {
  return (
    <div className="science-bio-card" onClick={() => props.onBioSelected()}>
      <div className="science-upper-container">
        <img
          className="science-portrait"
          src={props.imageURL}
          alt={props.firstName}
          height="230px"
          style={{ backgroundPosition: "center" }}
        />

        <div className="bio-logo-container">
          {props.science ? (
            <div className="image-container" id="science-image-container">
              <img
                id="science-landing-card"
                src="/images/logos/beaker.png"
                alt="logo"
                style={{ width: "35px", height: "35px" }}
              />
            </div>
          ) : null}
          {props.technology ? (
            <div className="image-container" id="technology-image-container">
              <img
                id="technology-landing-card"
                src="/images/logos/computer.png"
                alt="logo"
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
            </div>
          ) : null}
          {props.engineering ? (
            <div className="image-container" id="engineering-image-container">
              <img
                id="engineering-landing-card"
                src="/images/logos/gears.png"
                alt="logo"
                style={{ width: "44px", height: "44px" }}
              />
            </div>
          ) : null}
          {props.mathematics ? (
            <div className="image-container" id="mathematics-image-container">
              <img
                id="mathematics-landing-card"
                src="/images/logos/pi-symbol.png"
                alt="logo"
                style={{ width: "44px", height: "44px" }}
              />
            </div>
          ) : null}
        </div>
      </div>
      <div className="science-lower-container">
        <h3>
          {props.firstName} {props.lastName}{" "}
          {props.canadian ? (
            <img
              id="mini-flag"
              src="/images/logos/flag.png"
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
          {props.science ? (
            <h4 style={{ color: "orangeRed" }}>SCIENCE</h4>
          ) : null}{" "}
          {props.technology ? (
            <h4 style={{ color: "paleVioletRed" }}>TECHNOLOGY</h4>
          ) : null}{" "}
          {props.engineering ? (
            <h4 style={{ color: "darkBlue" }}>ENGINEERING</h4>
          ) : null}{" "}
          {props.mathematics ? <h4 style={{ color: "gold" }}>MATH</h4> : null}{" "}
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
export default LandscapeCardComponent;
