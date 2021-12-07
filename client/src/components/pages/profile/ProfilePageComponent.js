import React from "react";
import AboutMe from "./AboutMe";
import ProfilePageCardDiv from "./ProfilePageCardDiv";

// this will render the Mentor Card, About Me & Q&A and like button

function ProfilePageComponent() {
  return (
    <div className="page-container">
      <ProfilePageCardDiv
        className="card-div"
        mentorId="61a297d5611071030427a57b"
      />
    </div>
  );
}
export default ProfilePageComponent;
//fetch to take ID from URL , if the user wants to comment they need to pull it out of the URL and it pulls the name out of it
