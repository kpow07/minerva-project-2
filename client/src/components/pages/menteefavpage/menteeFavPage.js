import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import FavCard from "./FavCard";
import "./menteeFavPage.css"

// this will render the Mentee favs in a gallery

function MenteeFavPage({user,setUser}) {
  let params = useParams(); 
  const [favList, setFavList] = useState([])
  console.log(favList)
  useEffect(() => {
    const fetchMenteeFavs = async () => {
      const response=await fetch ("/api/get-favs")
      const favs=await response.json ()
      setFavList (favs)
    }
    fetchMenteeFavs ()
  }, [])

  return (
    <div className="wrapper">
      <div id="card-div-title" className="header">
        <h1>Mentee Profile Page</h1>
        <h2>Below are your favorite mentors you have selected from the Mentor Biography gallery</h2>
      </div>
       {favList.map((fav)=><FavCard mentorId={fav} user={user} setUser={setUser} />
       )}
    </div>
  );
}
export default MenteeFavPage;