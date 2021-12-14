import React from "react";
import LandingPageCardDiv from "./LandingPageCardDiv";
import AboutComponent from "./AboutComponent";
import "./Landingstyles.css";

//import MessageBoard from "./klfnmkf"

function LandingPageComponent({ user, setUser }) {
  return (
    <div className="page-container">
      <div>placeholder for something</div>
      <LandingPageCardDiv className="card-div" user={user} setUser={setUser} />
      <AboutComponent className="about-component" />
    </div>
  );
}
export default LandingPageComponent;
