import React, { useState } from "react";
import "./bio-rem.css";

function BioCardComponent() {
  const [name, setName] = useState("MARIE CURIE");
  const [job, setJob] = useState("SCIENTIST");
  const [description, setDescription] = useState(
    "This is a brief description about so and so "
  );

  return (
    <div className="bio-card">
      <div className="upper-container">
        <img
          className="portrait"
          src="stempics/Marie-Curie-1-CROPPED.jpg"
          alt="marie curie"
          height="230px"
          styles={{ backgroundPosition: "center" }}
        />
        <div className="image-container">
          <img
            src="images/logos/beaker.png"
            alt="logo"
            width="25px"
            height="25px"
          />
        </div>
      </div>
      <div className="lower-container">
        <h3>{name}</h3>
        <h4>{job}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default BioCardComponent;
