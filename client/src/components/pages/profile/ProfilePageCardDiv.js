import { useEffect, useState } from "react";
//import "../../directories/BioDirectory.style.css"; //This is the styling for the div around the cards.  also used in other files
// import "../../bio-cards/portraitCard.style.css"; //this css is specific to landing page cards
import PortraitCardComponent from "../../bio-cards/PortraitCardComponent";
import HeartButton from "../../navigation/HeartButton";
import AboutMe from "./AboutMe";

//Need to render based on selected mentor from Mentor Gallery

const ProfilePageCardDiv = ({ mentorId }) => {
  console.log(window.location.pathname) 
 const [mentor, setMentor] = useState([]);

  useEffect(() => {
    const fetchMentor = async () => {
      let fetchResult = await fetch("/api/get-mentor/" + mentorId);
      let fetchedMentor = await fetchResult.json();
      setMentor(fetchedMentor);
    };
    fetchMentor();
  }, [mentorId]);

  return (
    <div>
      <div className="directory-menu">
        <div>
          <HeartButton />
          <PortraitCardComponent
            className="card"
            firstName={mentor.firstName}
            lastName={mentor.lastName}
            imageURL={mentor.imageURL}
            description={mentor.description}
            S
            canadian={mentor.canadian}
            science={mentor.science}
            technology={mentor.technology}
            engineering={mentor.engineering}
            mathematics={mentor.mathematics}
          />
        </div>
        {/* <div className="content">
        <AboutMe mentorId={mentorId}
        />
        </div> */}
      </div>
    </div>
  );
};
export default ProfilePageCardDiv;
