import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import LandscapeCardComponent from "../../bio-cards/LandscapeCardComponent";

const BioPageCardDiv = ({ bioId, userId, bio, user, setUser }) => {
  // console.log(window.location.pathname);

  return (
    <div>
      <div className="directory-menu button-profile">
        <LandscapeCardComponent
          className="card"
          firstName={bio?.firstName}
          lastName={bio?.lastName}
          imageURL={bio?.avatar}
          description={bio?.description}
          science={bio?.science}
          technology={bio?.technology}
          engineering={bio?.engineering}
          mathematics={bio?.mathematics}
          ////////////////////////////////
          bioId={bioId}
          bio={bio}
          userId={userId}
          user={user}
          setUser={setUser}
          isStatic={true}
        />
      </div>
    </div>
  );
};
export default BioPageCardDiv;
