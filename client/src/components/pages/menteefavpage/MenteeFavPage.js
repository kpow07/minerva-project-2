import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import FavCard from "./FavCard";
import "./menteeFavPage.css";
import "../../directories/BioDirectory.style.css"; //This is the styling for the div around the cards.  also used in other files
import "../../bio-cards/portraitCard.style.css"; //this css is specific to landing page cards
import TitleComponent from "../../title/TitleComponent";

// this will render the Mentee favs in a gallery

function MenteeFavPage({ user, setUser }) {
  let params = useParams();
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

  return (
    <div>
      <TitleComponent title="Mentee Profile Page" />
      <div className="directory-menu">
        {favList.map((fav) => (
          <FavCard mentorId={fav} user={user} setUser={setUser} />
        ))}
      </div>
    </div>
  );
}
export default MenteeFavPage;
