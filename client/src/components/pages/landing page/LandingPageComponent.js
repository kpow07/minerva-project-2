import React from "react";
import LandingPageCardDiv from "./LandingPageCardDiv";
import AboutComponent from "./AboutComponent";
import CommentComponentLanding from "../comments/CommentComponentLanding";
import "./Landingstyles.css";

//import MessageBoard from "./klfnmkf"

function LandingPageComponent({ user, setUser }) {
  return (
    <div className="page-container">
      <CommentComponentLanding mentorId="61a297d5611071030427a57b" />
      <LandingPageCardDiv className="card-div" user={user} setUser={setUser} />
      <AboutComponent className="about-component" />
    </div>
  );
}
export default LandingPageComponent;
