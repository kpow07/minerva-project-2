import React from "react";
import { useEffect, useState } from "react";
import "./ScienceDirectory.style.css";
// import ScienceMappingBioCardComponent from "./ScienceMappingBioCardComponent.js";
import "../../bio-cards/ScienceBioCard.style.css";
import BioDetail from "./BioDetail";

const ScienceMappingBioCardComponent = ({
  firstName,
  lastName,
  description,
  imageUrl,
  onBioSelected,
}) => {
  return (
    <div className="science-bio-card" onClick={() => onBioSelected()}>
      <div className="science-upper-container">
        <img
          className="science-portrait"
          src={`'{imageUrl}'`}
          alt={firstName}
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
        <h3>
          {firstName} {lastName}
        </h3>
        <h4>SCIENCE</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

const ScienceDirectoryFetch = ({ setSelectedBioId }) => {
  const [bios, setBios] = useState([]);
  useEffect(() => {
    async function fetchData() {
      console.log("Fetching bios data");
      let fetchResult = await fetch("/api/get-bio");
      let bioList = await fetchResult.json();

      setBios(bioList);
    }
    fetchData();
  }, []);

  function selectBio(id) {
    console.log("selectBio called on id: ", id);
    setSelectedBioId(id);
  }

  return (
    <div className="directory-menu">
      {bios.map((bios, index) => {
        return (
          <ScienceMappingBioCardComponent
            className="card"
            key={index}
            onBioSelected={() => selectBio(bios._id)}
            firstName={bios.firstName}
            lastName={bios.lastName}
            imageUrl={bios.imageUrl}
            description={bios.description}
            canadian={bios.canadian}
          />
        );
      })}
    </div>
  );
};
export default ScienceDirectoryFetch;
