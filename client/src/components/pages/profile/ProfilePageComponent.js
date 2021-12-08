import React from "react";
import { useNavigate, useParams } from "react-router";
import AboutMe from "./AboutMe";
import ProfilePageCardDiv from "./ProfilePageCardDiv";

// this will render the Mentor Card, About Me & Q&A and like button

function ProfilePageComponent() {
  let navigate = useNavigate();
  let params = useParams();

  return (
    <div className="page-container">
      <ProfilePageCardDiv mentorId={params.id} />
    </div>
  );
}
export default ProfilePageComponent;
//fetch to take ID from URL , if the user wants to comment they need to pull it out of the URL and it pulls the name out of it
