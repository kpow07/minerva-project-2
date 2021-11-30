import { useState } from "react";
import MathBioCardComponent from "../bio-cards/MathBioCardComponent";
import EngineeringBioCardComponent from "../bio-cards/EngineeringBioCardComponent";
import ScienceBioCardComponent from "../bio-cards/ScienceBioCardComponent";
import TechBioCardComponent from "../bio-cards/TechBioCardComponent";
//import Landingstyles from "/Landingpage.html";
//about us component

const About = (img, title, description) => {
  return (
    <>
      <h3>{title}</h3>;<p>{description}</p>
    </>
  );
};

const LandingPageBody = (props) => {
  return (
    <div id="body">
      <About
        className="section"
        img=".forms/mint.jpeg"
        title="About Us"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />
      <MathBioCardComponent />
      <ScienceBioCardComponent />
      <TechBioCardComponent />
      <EngineeringBioCardComponent />
    </div>
  );
};
//style card in grid
export default LandingPageBody;
