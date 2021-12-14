import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router"; //add this

import "./AboutMe.css";

// click on bio card to render profile  w/ About Me component
const AboutMe = ({
  mentorId,
  existingValues,
  editButtonLink,
  deleteButtonLink,
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
    <div className="rendered-bio">
      <h1 className="field-title">
        {" "}
        Hi, I'm {mentor?.firstName}, a {mentor?.description}!
      </h1>

      <div className="field-title">
        I am a mentor in:
        {mentor?.science ? (
          <h2 style={{ color: "orangeRed" }}>SCIENCE</h2>
        ) : null}{" "}
        {mentor?.technology ? (
          <h2 style={{ color: "paleVioletRed" }}>TECHNOLOGY</h2>
        ) : null}{" "}
        {mentor?.engineering ? (
          <h2 style={{ color: "darkBlue" }}>ENGINEERING</h2>
        ) : null}{" "}
        {mentor?.mathematics ? <h2 style={{ color: "gold" }}>MATH</h2> : null}{" "}
      </div>
      <h2 className="field-title"> About Me: </h2>
      <p className="field-value">{mentor?.bio}</p>
      <h2 className="field-title"> Here are some resources: </h2>
      <p className="field-value">{mentor?.otherResources}</p>
      <br />
      {/* <Link to={}>
        <button>EDIT</button>
      </Link> */}

      {/* <Link to={deleteButtonLink}>
        <button>DELETE</button>
      </Link> */}
    </div>
  );
};

export default AboutMe;

// comment
