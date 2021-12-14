import React from "react";
import "./BioDirectory.style.css";
import "../bio-cards/LandscapeBioCard.style.css";
import LandscapeCardComponent from "../bio-cards/LandscapeCardComponent";

const BioDirectoryComponent2 = ({ setSelectedBioId, biosArray, title }) => {
  function selectBio(id) {
    console.log("selectBio called on id: ", id);
    setSelectedBioId(id);
  }

  return (
    <>
      <h1>{title}</h1>
      <div className="directory-menu">
        {biosArray &&
          biosArray.map((bio, index) => {
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
    </>
  );
};
export default BioDirectoryComponent2;
