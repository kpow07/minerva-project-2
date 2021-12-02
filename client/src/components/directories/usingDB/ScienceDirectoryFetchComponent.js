import React from "react";
import { useEffect, useState } from "react";
import "./ScienceDirectory.style.css";
// import ScienceMappingBioCardComponent from "./ScienceMappingBioCardComponent.js";
import "./BioGalleryPageCard.style.css";

const LandscapeCardComponent = ({
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

        <div className="logo-container">
          {science ? (
            <div className="image-container" id="science-image-container">
              <img
                id="science-landing-card"
                src="images/logos/beaker.png"
                alt="logo"
                style={{ width: "35px", height: "35px" }}
              />
            </div>
          ) : null}
          {technology ? (
            <div className="image-container" id="technology-image-container">
              <img
                id="technology-landing-card"
                src="images/logos/computer.png"
                alt="logo"
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
            </div>
          ) : null}
          {engineering ? (
            <div className="image-container" id="engineering-image-container">
              <img
                id="engineering-landing-card"
                src="images/logos/gears.png"
                alt="logo"
                style={{ width: "44px", height: "44px" }}
              />
            </div>
          ) : null}
          {mathematics ? (
            <div className="image-container" id="mathematics-image-container">
              <img
                id="mathematics-landing-card"
                src="images/logos/pi-symbol.png"
                alt="logo"
                style={{ width: "44px", height: "44px" }}
              />
            </div>
          ) : null}
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
          {technology ? (
            <h4 style={{ color: "paleVioletRed" }}>TECHNOLOGY</h4>
          ) : null}{" "}
          {engineering ? (
            <h4 style={{ color: "darkBlue" }}>ENGINEERING</h4>
          ) : null}{" "}
          {mathematics ? (
            <h4 style={{ color: "darkGoldenrod" }}>MATH</h4>
          ) : null}{" "}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};
/* orangeRed
paleVioletRed
darkBlue
darkGoldenrod */

const ScienceDirectoryFetchComponent = ({ setSelectedBioId }) => {
  const [bios, setBios] = useState([]);
  useEffect(() => {
    async function fetchData() {
      console.log("Fetching bios data");
      let fetchResult = await fetch("/api/get-bios");
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
          <LandscapeCardComponent
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
