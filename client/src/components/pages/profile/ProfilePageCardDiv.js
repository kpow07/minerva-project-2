import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//import "../../directories/BioDirectory.style.css"; //This is the styling for the div around the cards.  also used in other files
// import "../../bio-cards/portraitCard.style.css"; //this css is specific to landing page cards
import PortraitCardComponent from "../../bio-cards/PortraitCardComponent";
import HeartButton from "../../navigation/HeartButton";

//Need to render based on selected mentor from Mentor Gallery

const ProfilePageCardDiv = ({ mentorId, onMentorSelected, buttonLink }) => {
  console.log(window.location.pathname);
  const [mentor, setMentor] = useState();
  let navigate = useNavigate();

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
      <div lassName="directory-menu" className="button">
        <HeartButton />
        <PortraitCardComponent
          className="card"
          firstName={mentor?.firstName}
          lastName={mentor?.lastName}
          imageURL={mentor?.image}
          description={mentor?.description}
          science={mentor?.science}
          technology={mentor?.technology}
          engineering={mentor?.engineering}
          mathematics={mentor?.mathematics}
          // onClick={() => onMentorSelected()}
        />
        {/* <Link to={buttonLink}>
          <button>EDIT</button>
        </Link> */}
      </div>
    </div>
  );
};
export default ProfilePageCardDiv;
