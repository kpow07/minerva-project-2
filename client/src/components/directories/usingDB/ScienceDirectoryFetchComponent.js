import React from "react";
import { useEffect, useState } from "react";
import "./ScienceDirectory.style.css";
// import ScienceMappingBioCardComponent from "./ScienceMappingBioCardComponent.js";
import "../../bio-cards/ScienceBioCard.style.css";

const ScienceMappingBioCardComponent = ({
  firstName,
  lastName,
  description,
  imageURL,
  canadian,
  science,
  technology,
  engineering,
  mathematics,
  onBioSelected,
}) => {
  return (
    <div className="science-bio-card" onClick={() => onBioSelected()}>
      <div className="science-upper-container">
        <img
          className="science-portrait"
          src={"/images/" + imageURL}
          alt={firstName}
          height="230px"
          style={{ backgroundPosition: "center" }}
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
          {firstName} {lastName}{" "}
          {canadian ? (
            <img
              id="mini-flag"
              src="images/logos/flag.png"
              style={{
                height: "20px",
                width: "30px",
                alignContent: "center",
                verticalAlign: "sub",
              }}
              alt="mini canadian flag"
            />
          ) : null}
        </h3>
        <div className="fields">
          {science ? <h4 style={{ color: "orangeRed" }}>SCIENCE</h4> : null}{" "}
          {technology ? <h4 style={{ color: "green" }}>TECHNOLOGY</h4> : null}{" "}
          {engineering ? <h4 style={{ color: "blue" }}>ENGINEERING</h4> : null}{" "}
          {mathematics ? <h4 style={{ color: "purple" }}>MATH</h4> : null}{" "}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

const ScienceDirectoryFetchComponent = ({ setSelectedBioId }) => {
  const [bios, setBios] = useState([]);
  useEffect(() => {
    async function fetchData() {
      console.log("Fetching bios data");
      let fetchResult = await fetch("/api/get-bio");
      let bioList = await fetchResult.json();
      console.log(bioList);
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
      {bios.map((bio, index) => {
        return (
          <ScienceMappingBioCardComponent
            className="card"
            key={index}
            onBioSelected={() => selectBio(bio._id)}
            firstName={bio.firstName}
            lastName={bio.lastName}
            imageURL={bio.imageURL}
            description={bio.description}
            canadian={bio.canadian}
            science={bio.science}
            technology={bio.technology}
            engineering={bio.engineering}
            mathematics={bio.mathematics}
          />
        );
      })}
    </div>
  );
};
export default ScienceDirectoryFetchComponent;
