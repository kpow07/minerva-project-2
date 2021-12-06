import React from "react";
import "./BioDirectory.style.css";
import "../bio-cards/LandscapeBioCard.style.css";
import LandscapeCardComponent from "../bio-cards/LandscapeCardComponent";

const BioDirectoryComponent2 = ({ setSelectedBioId, biosArray }) => {
  // console.log(biosArray);
  // const [bios, setBios] = useState([]);
  // useEffect(() => {
  //   function setArray(biosArray) {
  //     setBios(biosArray);
  //   }
  //   setArray();
  // }, []);

  function selectBio(id) {
    console.log("selectBio called on id: ", id);
    setSelectedBioId(id);
  }

  return (
    <div className="directory-menu">
      {biosArray.map((bio, index) => {
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
export default BioDirectoryComponent2;
