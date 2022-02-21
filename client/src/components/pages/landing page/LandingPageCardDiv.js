import { useEffect, useState } from "react";
import "../../directories/BioDirectory.style.css"; //This is the styling for the div around the cards.  also used in other files
import "../../bio-cards/portraitCard.style.css"; //this css is specific to landing page cards
import PortraitCardComponent from "../../bio-cards/PortraitCardComponent";
import { useNavigate } from "react-router-dom";
import TitleComponent from "../../title/TitleComponent";
//
//
const LandingPageCardDiv = ({ user, setUser }) => {
  const [mentors, setMentors] = useState([]);
  let navigate = useNavigate();
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
  function selectMentor(id) {
    console.log("selectMentor called on id: ", id);
    setSelectedMentorId(id);
  }
  function setSelectedMentorId(id) {
    navigate("/mentor-detail/" + id);
  }

  return (
    <div>
      <TitleComponent title="Meet Our Mentors" />
      <div className="directory-menu">
        {mentors.map((mentor) => {
          return (
            <PortraitCardComponent
              className="card"
              key={mentor._id}
              onMentorSelected={() => selectMentor(mentor._id)}
              firstName={mentor.firstName}
              lastName={mentor.lastName}
              imageURL={mentor.avatar}
              description={mentor.description}
              canadian={mentor.canadian}
              science={mentor.science}
              technology={mentor.technology}
              engineering={mentor.engineering}
              mathematics={mentor.mathematics}
              user={user}
              setUser={setUser}
              mentor={mentor}
              // isStatic={true}
            />
          );
        })}
      </div>
    </div>
  );
};
export default LandingPageCardDiv;
