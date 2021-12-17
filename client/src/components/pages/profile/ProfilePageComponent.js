import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AboutMe from "./AboutMe";
import ProfilePageCardDiv from "./ProfilePageCardDiv";
import "./ProfilePage.css";
import { useNavigate } from "react-router"; //add this
import TitleComponent from "../../title/TitleComponent";
import CommentComponent from "../comments/CommentComponent";

// this will render the Mentor Card, About Me & Q&A and like button

function ProfilePageComponent({ user, setUser }) {
  const [buttonValue, setButtonValue] = useState("");
  const [like, setLike] = useState(false);
  const [mentor, setMentor] = useState();
  let userId = user?._id;
  let params = useParams();
  let mentorId = params.id;
  const navigate = useNavigate();

  console.log("user favorites", user?.favorites);

  useEffect(() => {
    const fetchMentor = async () => {
      let fetchResult = await fetch("/api/get-mentor/" + mentorId);
      let fetchedMentor = await fetchResult.json();
      setMentor(fetchedMentor);
    };
    if (mentorId) {
      fetchMentor();
    }
  }, [mentorId]);

  async function deleteMentor(id) {
    console.log("FROM DELETE MENTOR FUNCTION");
    await fetch(`/api/delete-mentor/` + id, {
      method: "DELETE",
    });
    console.log("Are you sure you want to DELETE Mentor?", mentorId);
    navigate("/mentor-gallery");
  }
  return (
    <div>
      <TitleComponent title="Mentor Profile Page" />
      <div className="profile-page-wrapper">
        <div className="michelle">
          <ProfilePageCardDiv
            mentor={mentor}
            mentorId={mentorId}
            userId={userId}
            user={user}
            setUser={setUser}
            buttonValue={buttonValue}
          />
          <AboutMe
            user={user}
            mentorId={params.id}
            buttonLink={"/mentor-edit/" + mentorId}
            // existingValues={existingValues}
            buttonDelete={"/mentor-delete/" + mentorId}
            deleteMentor={() => deleteMentor(mentorId)}
          />
        </div>
      </div>
      <CommentComponent mentorId={params.id} user={user} />
    </div>
  );
}
export default ProfilePageComponent;
