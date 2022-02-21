import React from "react";
import { useEffect, useState } from "react";
import "./BioDirectory.style.css";
import "../bio-cards/LandscapeBioCard.style.css";
import LandscapeCardComponent from "../bio-cards/LandscapeCardComponent";

const ScienceDirectoryComponent = ({ setSelectedBioId }) => {
  const [bios, setBios] = useState([]);
  //
  useEffect(() => {
    async function fetchData() {
      console.log("Fetching bios data");
      let fetchResult = await fetch("/api/get-bios");
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
      {bios.map((bio, index) => {
        return (
          <LandscapeCardComponent
            className="card"
            key={index}
            onBioSelected={() => selectBio(bio._id)}
            firstName={bio.firstName}
            lastName={bio.lastName}
            imageURL={bio.avatar}
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
export default ScienceDirectoryComponent;
