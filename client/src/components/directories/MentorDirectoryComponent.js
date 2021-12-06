import React from "react";
import { useEffect, useState } from "react";
import "./BioDirectory.style.css";
import "../bio-cards/portraitCard.style.css";
import PortraitCardComponent from "../bio-cards/PortraitCardComponent";

const MentorDirectoryComponent = ({ setSelectedMentorId }) => {
  const [mentors, setMentors] = useState([]);
  useEffect(() => {
    async function fetchData() {
      console.log("Fetching mentors data");
      let fetchResult = await fetch("/api/get-mentors");
      let mentorList = await fetchResult.json();
      console.log(mentorList);
      setMentors(mentorList);
    }
    fetchData();
  }, []);

  function selectMentor(id) {
    console.log("selectMentor called on id: ", id);
    setSelectedMentorId(id);
  }

  return (
    <div className="directory-menu">
      {mentors.map((mentor, index) => {
        return (
          <PortraitCardComponent
            className="card"
            key={index}
            onMentorSelected={() => selectMentor(mentor._id)}
            firstName={mentor.firstName}
            lastName={mentor.lastName}
            // imageURL={mentor.imageURL}
            description={mentor.description}
            canadian={mentor.canadian}
            science={mentor.science}
            technology={mentor.technology}
            engineering={mentor.engineering}
            mathematics={mentor.mathematics}
          />
        );
      })}
    </div>
  );
};
export default MentorDirectoryComponent;
