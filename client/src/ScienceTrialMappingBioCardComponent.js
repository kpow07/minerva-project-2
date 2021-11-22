import React, { useState } from "react";
import "./ScienceBioCard.style.css";

const ScienceTrialMappingBioCardComponent = ({
  name,
  id,
  area,
  description,
  imageUrl,
}) => {
  return (
    <div className="science-bio-card" onClick={() => onBioSelected()}>
      <div className="science-upper-container">
        <img
          className="science-portrait"
          src={imageUrl}
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

export default ScienceTrialMappingBioCardComponent;
