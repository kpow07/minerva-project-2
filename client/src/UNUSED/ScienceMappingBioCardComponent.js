import React, { useState } from "react";
import "./ScienceBioCard.style1.css";

const ScienceMappingBioCardComponent = ({
  name,
  id,
  description,
  imageURL,
}) => {
  const [area] = useState("SCIENCE");

  // );
  return (
    <div className="science-bio-card">
      <div className="science-upper-container">
        <img
          className="science-portrait"
          src={`${imageURL}`}
          alt={name}
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
        <h4>{area}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ScienceMappingBioCardComponent;
