import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import PortraitCardComponent from "../../bio-cards/PortraitCardComponent";
import "./menteeFavPage.css";
// import MainMentorGallery from "../mentor page/MainMentorGallery";

// this will render the Mentee favs in a gallery

function FavCard({ mentorId, user, setUser }) {
  const [mentor, setMentor] = useState();

  useEffect(() => {
    const fetchMenteeFavs = async () => {
      const response = await fetch("/api/get-mentor/" + mentorId);
      const fetchedMentor = await response.json();
      setMentor(fetchedMentor);
    };
    fetchMenteeFavs();
  }, []);

  return (
    <div>
      {mentor && (
        <PortraitCardComponent
          className="card"
          // onMentorSelected={() => selectMentor(mentor._id)}
          firstName={mentor.firstName}
          lastName={mentor.lastName}
          imageURL={mentor.avatar}
          description={mentor.description}
          city={mentor.city}
          science={mentor.science}
          technology={mentor.technology}
          engineering={mentor.engineering}
          mathematics={mentor.mathematics}
          mentor={mentor}
          user={user}
          setUser={setUser}
        />
      )}
    </div>
  );
}
export default FavCard;


