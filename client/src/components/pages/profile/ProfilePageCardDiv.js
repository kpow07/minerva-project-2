import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//import "../../directories/BioDirectory.style.css"; //This is the styling for the div around the cards.  also used in other files
// import "../../bio-cards/portraitCard.style.css"; //this css is specific to landing page cards
import PortraitCardComponent from "../../bio-cards/PortraitCardComponent";
import HeartButton from "../../navigation/HeartButton";

//Need to render based on selected mentor from Mentor Gallery

const ProfilePageCardDiv = ({
  mentorId,
  onMentorSelected,
  buttonLink,
  userId,
  favoritesToggle,
  like,
  setLike,
  mentor,
  user,
  setUser,
  buttonValue,
}) => {
  // console.log(window.location.pathname);

  return (
    <div>
      <div className="directory-menu button-profile">
        <PortraitCardComponent
          className="card"
          firstName={mentor?.firstName}
          lastName={mentor?.lastName}
          imageURL={mentor?.avatar}
          description={mentor?.description}
          science={mentor?.science}
          technology={mentor?.technology}
          engineering={mentor?.engineering}
          mathematics={mentor?.mathematics}
          favoritesToggle={favoritesToggle}
          ////////////////////////////////
          mentorId={mentorId}
          mentor={mentor}
          userId={userId}
          like={like}
          setLike={setLike}
          user={user}
          setUser={setUser}
          isStatic={true}
        />
        {/* <Link to={buttonLink}>
          <button>EDIT</button>
        </Link> */}
      </div>
    </div>
  );
};
export default ProfilePageCardDiv;
