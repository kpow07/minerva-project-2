import React, { useState } from "react";
import "./science-bio-card.component.css";

function ScienceBioCardComponent() {
  const [name, setName] = useState("MARIE CURIE");
  const [job, setJob] = useState("SCIENCE");
  const [description, setDescription] = useState(
    "This is a brief description about so and so "
  );

  return (
    <div className="science-bio-card">
      <div className="science-upper-container">
        <img
          className="science-portrait"
          src="stempics/Marie-Curie-1-CROPPED.jpg"
          alt="marie curie"
          height="230px"
          styles={{ backgroundPosition: "center" }}
        />
        <div className="science-image-container">
          <img
            src="images/logos/beaker.png"
            alt="logo"
            width="25px"
            height="25px"
          />
        </div>
      </div>
      <div className="science-lower-container">
        <h3>{name}</h3>
        <h4>{job}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ScienceBioCardComponent;
