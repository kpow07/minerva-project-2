import React from "react";
import LandingPageCardDiv from "./LandingPageCardDiv";
import AboutComponent from "./AboutComponent";
import "./Landingstyles.css";
//import MessageBoard from "./klfnmkf"

function LandingPageComponent() {
  return (
    <div className="page-container">
      <div>placeholder for something</div>
      <LandingPageCardDiv className="card-div" />
      <AboutComponent className="about-component" />
    </div>
  );
}
export default LandingPageComponent;
