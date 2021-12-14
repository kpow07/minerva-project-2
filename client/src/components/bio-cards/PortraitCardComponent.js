import Button from "@restart/ui/esm/Button";
import HeartButton from "../navigation/HeartButton";
import "./portraitCard.style.css";

const PortraitCardComponent = ({
  firstName,
  lastName,
  description,
  imageURL,
  science,
  technology,
  mathematics,
  engineering,
  onMentorSelected,
  favoritesToggle,
  //////////////
  mentorId,
  userId,
  like,
  setLike,
  user,
  buttonValue,
}) => {
  return (
    <div className="portrait-bio-card" onClick={() => onMentorSelected()}>
      <div className="portrait-upper-container">
        <img
          className="portrait-portrait"
          src={"/images/" + imageURL}
          alt={firstName}
          width="210px"
        />
      </div>
      <div className="portrait-lower-container">
        <HeartButton
          className="fav-button"
          favoritesToggle={favoritesToggle}
          like={like}
          setLike={setLike}
          buttonValue={buttonValue}
        />
        <div className="portrait-logo-container">
          {science ? (
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
          {technology ? (
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
          {engineering ? (
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
          {mathematics ? (
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
          {firstName} {lastName}
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
export default PortraitCardComponent;
