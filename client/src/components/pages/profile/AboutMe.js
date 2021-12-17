import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router"; //add this

import "./AboutMe.css";
import userEvent from "@testing-library/user-event";

// click on bio card to render profile  w/ About Me component
const AboutMe = ({
  mentorId,
  user,
  existingValues,
  editButtonLink,
  deleteButtonLink,
  deleteMentor,
  buttonLink,
}) => {
  const [mentor, setMentor] = useState();

  useEffect(() => {
    const fetchMentor = async () => {
      let fetchResult = await fetch("/api/get-mentor/" + mentorId);
      // console.log("This is the mentor ID", mentorId);
      let fetchedMentor = await fetchResult.json();
      // console.log("this is the fetched mentor from about me", fetchedMentor);

      setMentor(fetchedMentor);
    };
    fetchMentor();
  }, [mentorId]);

  return (
    <div className="about-rendered-bio">
      <h1 className="about-field-title">
        {" "}
        Hi, I'm {mentor?.firstName}, a {mentor?.description}!
      </h1>

      <div className="about-field-title">
        I am a mentor in:
        {mentor?.science ? (
          <h2 className="about-field-title" style={{ color: "orangeRed" }}>
            SCIENCE
          </h2>
        ) : null}{" "}
        {mentor?.technology ? (
          <h2 className="about-field-title" style={{ color: "paleVioletRed" }}>
            TECHNOLOGY
          </h2>
        ) : null}{" "}
        {mentor?.engineering ? (
          <h2 className="about-field-title" style={{ color: "darkBlue" }}>
            ENGINEERING
          </h2>
        ) : null}{" "}
        {mentor?.mathematics ? (
          <h2 className="about-field-title" style={{ color: "gold" }}>
            MATH
          </h2>
        ) : null}{" "}
      </div>
      <h2 className="about-field-title"> About Me: </h2>
      <p className="about-field-value">{mentor?.bio}</p>
      <h2 className="about-field-title"> Here are some resources: </h2>
      <p className="about-field-value">{mentor?.otherResources}</p>
      <br />
      {user?.firstName === mentor?.firstName &&
      user?.lastName === mentor?.lastName ? (
        <div>
          <Link to={buttonLink}>
            <button className="button-edit-delete">EDIT PROFILE</button>
          </Link>
          <button className="button-edit-delete" onClick={() => deleteMentor()}>
            DELETE PROFILE
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default AboutMe;
