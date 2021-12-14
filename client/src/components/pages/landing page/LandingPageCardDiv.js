import { useEffect, useState } from "react";
import "../../directories/BioDirectory.style.css"; //This is the styling for the div around the cards.  also used in other files
import "../../bio-cards/portraitCard.style.css"; //this css is specific to landing page cards
import PortraitCardComponent from "../../bio-cards/PortraitCardComponent";
//
//
const LandingPageCardDiv = ({ setSelectedBioId }) => {
  const [mentors, setMentors] = useState([]);
  const generateRandomIndex = (array) =>
    Math.floor(Math.random() * array.length);
  //
  useEffect(() => {
    const fetchMentor = async function (field) {
      console.log("Fetching mentor's data");
      let fetchResult = await fetch(`/api/filter-mentors-field?field=${field}`);
      let mentorArray = await fetchResult.json();
      let randomIndex = generateRandomIndex(mentorArray);
      return mentorArray[randomIndex];
    };
    async function fetchFourMentorsData() {
      console.log("Fetching data for 4 cards on landing page");
      let scienceMentor = await fetchMentor("science");
      let technologyMentor = await fetchMentor("technology");
      let engineeringMentor = await fetchMentor("engineering");
      let mathematicsMentor = await fetchMentor("mathematics");
      let fourMentorsArray = [
        scienceMentor,
        technologyMentor,
        engineeringMentor,
        mathematicsMentor,
      ];

      setMentors(fourMentorsArray);
    }

    fetchFourMentorsData();
  }, []);
  //replace this later with link to mentorgallery
  // function selectBio(id) {
  //   console.log("selectBio called on id: ", id);
  //   setSelectedBioId(id);s
  // }

  return (
    <div>
      <div className="directory-menu">
        <div id="card-div-title" className="menu-title">
          <h1>Meet Our Mentors!</h1>
        </div>
        {mentors.map((mentor, index) => {
          return (
            <PortraitCardComponent
              className="card"
              key={index}
              firstName={mentor.firstName}
              lastName={mentor.lastName}
              imageURL={mentor.avatar}
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
    </div>
  );
};
export default LandingPageCardDiv;
