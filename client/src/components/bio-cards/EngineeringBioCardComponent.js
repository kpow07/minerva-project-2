import React, { useState } from "react";
import "./EngineeringBioCard.styles.css";

function EngineeringBioCardComponent() {
  const [name, setName] = useState("ELIZABETH CANNON");
  const [job, setJob] = useState("ENGINEERING");
  const [description, setDescription] = useState(
    "This is a brief description about so and so "
  );

  return (
    <div className="eng-bio-card">
      <div className="eng-upper-container">
        <img
          className="eng-portrait"
          src="stempics/eliz-can.webp"
          alt="Elizabeth Cannon"
          height="230px"
          styles={{ backgroundPosition: "center" }}
        />
        <div className="eng-image-container">
          <img
            src="images/logos/gears.png"
            alt="logo"
            width="25px"
            height="25px"
          />
        </div>
      </div>
      <div className="eng-lower-container">
        <h3>{name}</h3>
        <h4>{job}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default EngineeringBioCardComponent;
