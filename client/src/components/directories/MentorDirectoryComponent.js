import React from "react";
import "./BioDirectory.style.css";
import "../bio-cards/portraitCard.style.css";
import PortraitCardComponent from "../bio-cards/PortraitCardComponent";
//
//
const MentorDirectoryComponent = ({
  setSelectedMentorId,
  mentorsArray,
  title,
}) => {
  console.log(typeof mentorsArray);
  console.log(mentorsArray);
  function selectMentor(id) {
    console.log("selectMentor called on id: ", id);
    setSelectedMentorId(id);
  }

  return (
    <>
      <h1>{title}</h1>
      <div className="directory-menu">
        {mentorsArray &&
          mentorsArray.map((mentor, index) => {
            return (
              <PortraitCardComponent
                className="card"
                key={index}
                onMentorSelected={() => selectMentor(mentor._id)}
                firstName={mentor.firstName}
                lastName={mentor.lastName}
                imageURL={mentor.image}
                description={mentor.description}
                city={mentor.city}
                science={mentor.science}
                technology={mentor.technology}
                engineering={mentor.engineering}
                mathematics={mentor.mathematics}
              />
            );
          })}
      </div>
    </>
  );
};
export default MentorDirectoryComponent;
