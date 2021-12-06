import React from "react";
import AboutMe from "./AboutMe";
import ProfilePageCardDiv from "./ProfilePageCardDiv";

// this will render the Mentor Card, About Me & Q&A and like button

function ProfilePageComponent() {
  return (
    <div className="page-container">
      <ProfilePageCardDiv className="card-div" />
    </div>
  );
}
export default ProfilePageComponent;
