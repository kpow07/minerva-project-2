import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AboutMe from "./AboutMe";
import ProfilePageCardDiv from "./ProfilePageCardDiv";
import "./ProfilePage.css";

// this will render the Mentor Card, About Me & Q&A and like button

function ProfilePageComponent({ user }) {
  const [like, setLike] = useState(false);
  const [buttonValue, setButtonValue] = useState("");
  const [favoritesToggle, setFavoritesToggle] = useState(false);
  const [mentor, setMentor] = useState();
  let userId = user?._id;
  let params = useParams();
  let mentorId = params.id;

  // console.log("user favorites", user?.favorites);
  // useEffect(() => {
  //   let doesLike = user?.favorites.includes(mentorId);
  //   setLike(doesLike);
  // }, [mentorId, user.favorites]);

  // useEffect(() => {
  //   const fetchMentor = async () => {
  //     let fetchResult = await fetch("/api/get-mentor/" + mentorId);
  //     let fetchedMentor = await fetchResult.json();
  //     setMentor(fetchedMentor);
  //   };
  //   fetchMentor();
  // }, [mentorId]);

  useEffect(() => {
    let doesLike = user?.favorites.includes(mentorId);
    setLike(doesLike);

    const fetchMentor = async () => {
      let fetchResult = await fetch("/api/get-mentor/" + mentorId);
      let fetchedMentor = await fetchResult.json();
      setMentor(fetchedMentor);
    };
    fetchMentor();

    const addToFavorites = async function () {
      await fetch(`/api/add-favorite?mentorId=${mentorId}&id=${userId}`);
    };
    const removeFromFavorites = async function () {
      await fetch(`/api/remove-favorite?mentorId=${mentorId}&id=${userId}`);
    };
    if (like) {
      setFavoritesToggle(removeFromFavorites);
      setButtonValue("🤍");
    } else {
      setFavoritesToggle(addToFavorites);
      setButtonValue("❤️");
    }
  }, [like, userId, mentorId, user.favorites]);

  return (
    <div className="profile-page-wrapper">
      <div id="card-div-title" className="header">
        <h1>Mentor Profile Page</h1>
      </div>

      <div className="sidebar">
        <ProfilePageCardDiv
          mentor={mentor}
          mentorId={mentorId}
          userId={userId}
          favoritesToggle={favoritesToggle}
          like={like}
          setLike={setLike}
          user={user}
          buttonValue={buttonValue}
          //  buttonLink={"/mentor-edit/" + params.id}
          // existingValues={existingValues}
        />
      </div>
      <div className="content">
        <AboutMe
          mentorId={params.id}
          buttonLink={"/mentor-edit/" + mentorId}
          // existingValues={existingValues}
          buttonLink={"/mentor-delete/" + mentorId}
        />
      </div>

      {/* <div>
       <MessageBoard className="footer"/>
     </div> */}
    </div>
  );
}
export default ProfilePageComponent;
