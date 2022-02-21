import HeartButton from "../navigation/HeartButton";
import "./portraitCard.style.css";

const PortraitCardComponentStatic = ({ props }) => {
  return (
    <div className="portrait-bio-card">
      <div className="portrait-upper-container">
        <img
          className="portrait-portrait"
          src={"/images/" + props.imageURL}
          alt={props.firstName}
          width="210px"
        />
      </div>
      <div className="portrait-lower-container">
        <HeartButton
          className="fav-button"
          favoritesToggle={props.favoritesToggle}
          like={props.like}
          setLike={props.setLike}
          buttonValue={props.buttonValue}
        />
        <div className="portrait-logo-container">
          {props.science ? (
            <div
              className="portrait-image-container"
              id="science-image-container"
            >
              <img
                id="science-landing-card"
                src="/images/logos/beaker.png"
                alt="logo"
                style={{ width: "35px", height: "35px" }}
              />
            </div>
          ) : null}
          {props.technology ? (
            <div
              className="portrait-image-container"
              id="technology-image-container"
            >
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
            <div
              className="portrait-image-container"
              id="engineering-image-container"
            >
              <img
                id="engineering-landing-card"
                src="/images/logos/gears.png"
                alt="logo"
                style={{ width: "44px", height: "44px" }}
              />
            </div>
          ) : null}
          {props.mathematics ? (
            <div
              className="portrait-image-container"
              id="mathematics-image-container"
            >
              <img
                id="mathematics-landing-card"
                src="/images/logos/pi-symbol.png"
                alt="logo"
                style={{ width: "44px", height: "44px" }}
              />
            </div>
          ) : null}
        </div>
        <h3 style={{ textAlign: "center" }}>
          {props.firstName} {props.lastName}
          {/* {canadian ? (
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
          ) : null} */}
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
export default PortraitCardComponentStatic;
