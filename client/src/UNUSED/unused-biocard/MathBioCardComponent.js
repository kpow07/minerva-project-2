import React, { useState } from "react";
import "./MathBioCard.styles.css";

function MathBioCardComponent() {
  const [name, setName] = useState("KATHERINE JOHNSON");
  const [job, setJob] = useState("MATH");
  const [description, setDescription] = useState(
    "Mathematician, computer at NASA, 'Hidden Figure' "
  );

  return (
    <div className="math-bio-card">
      <div className="math-upper-container">
        <img
          className="math-portrait"
          src="stempics/katherine-johnson-colour.webp"
          alt="Katherine Johnson"
          height="230px"
          styles={{ backgroundPosition: "center" }}
        />
        <div className="math-image-container">
          <img
            src="images/logos/pi-symbol.png"
            alt="logo"
            width="25px"
            height="25px"
          />
        </div>
      </div>
      <div className="math-lower-container">
        <h3>{name}</h3>
        <h4>{job}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default MathBioCardComponent;
