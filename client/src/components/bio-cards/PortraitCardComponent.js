import HeartButton from "../navigation/HeartButton";
import { useState, useEffect } from "react";
import "./portraitCard.style.css";

const PortraitCardComponent = ({ props }) => {
  const [like, setLike] = useState(false);
  const mentorId = props.mentor?._id;
  useEffect(() => {
    let doesLike = props.user?.favorites.includes(mentorId);
    setLike(doesLike);
  }, [mentorId, props.user?.favorites]);

  const favoritesToggle = () => {
    let index = props.user?.favorites.indexOf(mentorId);
    console.log("running toggle", index);
    let fave = [...props.user.favorites];
    if (index > -1) {
      fave.splice(index, 1);
    } else {
      fave.push(mentorId);
    }
    console.log("HELLO THERE THIS IS A BIG OL FAV", fave);
    const newUser = { ...props.user, favorites: fave };
    props.setUser(newUser);
    fetch(`/api/update-favorite`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
  };

  return (
    <div
      className="portrait-bio-card"
      onClick={!props.isStatic ? () => props.onMentorSelected() : null}
    >
      <div className="portrait-upper-container">
        <img
          className="portrait-portrait"
          src={props.imageURL}
          alt={props.firstName}
          width="210px"
        />
      </div>
      <div className="portrait-lower-container">
        <HeartButton
          className="fav-button"
          favoritesToggle={favoritesToggle}
          like={like}
          setLike={setLike}
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
        <div className="content-container">
          <h3>
            {props.firstName} {props.lastName}
          </h3>
          <div className="fields">
            {props.science ? (
              <h4
                className="portrait-lower-container"
                style={{ color: "orangeRed" }}
              >
                SCIENCE
              </h4>
            ) : null}{" "}
            {props.technology ? (
              <h4
                className="portrait-lower-container"
                style={{ color: "paleVioletRed" }}
              >
                TECHNOLOGY
              </h4>
            ) : null}{" "}
            {props.engineering ? (
              <h4
                className="portrait-lower-container"
                style={{ color: "darkBlue" }}
              >
                ENGINEERING
              </h4>
            ) : null}{" "}
            {props.mathematics ? (
              <h4
                className="portrait-lower-container"
                style={{ color: "gold" }}
              >
                MATH
              </h4>
            ) : null}{" "}
          </div>
          <p className="portrait-lower-container">{props.description}</p>
        </div>
      </div>
    </div>
  );
};
export default PortraitCardComponent;
