import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FavCard from "./FavCard";
import "./menteeFavPage.css";
import "../../directories/BioDirectory.style.css"; //This is the styling for the div around the cards.  also used in other files
import "../../bio-cards/portraitCard.style.css"; //this css is specific to landing page cards
import TitleComponent from "../../title/TitleComponent";

// this will render the Mentee favs in a gallery

function MenteeFavPage({ user, setUser }) {
  let params = useParams();
  let navigate = useNavigate();
  const [favList, setFavList] = useState([]);
  console.log(favList);
  useEffect(() => {
    const fetchMenteeFavs = async () => {
      const response = await fetch("/api/get-favs");
      const favs = await response.json();
      setFavList(favs);
    };
    fetchMenteeFavs();
  }, []);

  function setSelectedMentorId(id) {
    navigate("/mentor-detail/" + id);
  }
  // async function deleteMentee(id) {
  //   console.log("FROM DELETE MENTEE FAV PAGE FUNCTION");
  //   await fetch(`/api/delete-mentee/` + id, {
  //     method: "DELETE",
  //   });
  //   console.log("Are you sure you want to DELETE Mentee?", menteeId);
  //   navigate("/");
  // };
  return (
    <div>
      <TitleComponent title="Mentee Profile Page" />
      {/* <Link to={buttonLink}> */}
      {/* <button onClick={() => deleteMentee(menteeId)}>Delete Profile</button> */}
      {/* </Link> */}
      <div className="directory-menu">
        {favList.map((fav) => (
          <FavCard
            mentorId={fav}
            user={user}
            setUser={setUser}
            setSelectedMentorId={setSelectedMentorId}
          />
        ))}
      </div>
    </div>
  );
}
export default MenteeFavPage;
