import React from "react";
import LandingPageCardDiv from "./LandingPageCardDiv";
import AboutComponent from "./AboutComponent";
import CommentComponentLanding from "../comments/CommentComponentLanding";
import "./Landingstyles.css";
import TitleComponent from "../../title/TitleComponent";

//import MessageBoard from "./klfnmkf"

function LandingPageComponent({ user, setUser }) {
  return (
    <div className="page-container">
      <AboutComponent className="about-component" />
      <LandingPageCardDiv className="card-div" user={user} setUser={setUser} />
      <div>
        <TitleComponent title="MESSAGES" />
        <CommentComponentLanding
          user={user}
          mentorId="61a297d5611071030427a57b"
        />
      </div>
    </div>
  );
}
export default LandingPageComponent;
