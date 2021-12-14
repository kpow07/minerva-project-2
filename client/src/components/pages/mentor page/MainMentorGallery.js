import { useNavigate } from "react-router-dom";
import MentorDirectoryComponent from "../../directories/MentorDirectoryComponent";

function MainMentorGallery({ mentors, user, setUser }) {
  const navigate = useNavigate();

  // console.log(`MENTORS FROM MAIN MENTOR GALLERY: ${mentors}`);

  function setSelectedMentorId(id) {
    navigate("/mentor-detail/" + id);
  }
  return (
    <div className="main-bio-list">
      <MentorDirectoryComponent
        title={"Mentors in STEM"}
        mentorsArray={mentors}
        setSelectedMentorId={setSelectedMentorId}
        user={user}
        setUser={setUser}
      />
    </div>
  );
}

export default MainMentorGallery;
