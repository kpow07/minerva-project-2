import React from "react";
import LandingPageCardDiv from "./LandingPageCardDiv";
import AboutComponent from "./AboutComponent";
//import MessageBoard from "./klfnmkf"

function LandingPageComponent() {
  return (
    <div className="page-container">
      <div className="about-card-container">
        <LandingPageCardDiv className="card-div" />
        <AboutComponent className="about-component" />
      </div>
    </div>
  );
}
export default LandingPageComponent;
