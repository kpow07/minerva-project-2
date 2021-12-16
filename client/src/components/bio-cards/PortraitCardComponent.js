import Button from "@restart/ui/esm/Button";
import HeartButton from "../navigation/HeartButton";
import { useState, useEffect } from "react";
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
  user,
  setUser,
  buttonValue,
  mentor,
  isStatic,
}) => {
  const [like, setLike] = useState(false);
  const mentorId = mentor?._id;
  console.log("THIS IS THE USER", user);
  useEffect(() => {
    let doesLike = user?.favorites.includes(mentorId);
    setLike(doesLike);
    console.log("value of button", doesLike);
  }, [mentorId, user?.favorites]);

  const favoritesToggle = () => {
    let index = user?.favorites.indexOf(mentorId);
    console.log("running toggle", index);
    let fave = [...user.favorites];
    if (index > -1) {
      fave.splice(index, 1);
    } else {
      fave.push(mentorId);
    }
    console.log("HELLO THERE THIS IS A BIG OL FAV", fave);
    const newUser = { ...user, favorites: fave };
    setUser(newUser);
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
      onClick={!isStatic ? () => onMentorSelected() : null}
    >
      <div className="portrait-upper-container">
        <img
          className="portrait-portrait"
          src={imageURL}
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
        <div className="content-container">
          <h3>
            {firstName} {lastName}
          </h3>
          <div className="fields">
            {science ? (
              <h4
                className="portrait-lower-container"
                style={{ color: "orangeRed" }}
              >
                SCIENCE
              </h4>
            ) : null}{" "}
            {technology ? (
              <h4
                className="portrait-lower-container"
                style={{ color: "paleVioletRed" }}
              >
                TECHNOLOGY
              </h4>
            ) : null}{" "}
            {engineering ? (
              <h4
                className="portrait-lower-container"
                style={{ color: "darkBlue" }}
              >
                ENGINEERING
              </h4>
            ) : null}{" "}
            {mathematics ? (
              <h4
                className="portrait-lower-container"
                style={{ color: "gold" }}
              >
                MATH
              </h4>
            ) : null}{" "}
          </div>
          <p className="portrait-lower-container">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default PortraitCardComponent;
