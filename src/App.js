import React from "react";
import "./App.css";
// import "./components/bio-cards/engineering-bio-card.component.css";
// import "./components/bio-cards/science-bio-card.component.css";
// import "./components/bio-cards/math-bio-card.component.css";
// import "./components/bio-cards/tech-bio-card.component.css";
import ScienceBioCardComponent from "./components/bio-cards/science-bio-card.component";
import MathBioCardComponent from "./components/bio-cards/math-bio-card.component";
import EngineeringBioCardComponent from "./components/bio-cards/engineering-bio-card.component";
import TechBioCardComponent from "./components/bio-cards/tech-bio-card.component";

function App() {
  return (
    <div className="App">
      <div>
        <EngineeringBioCardComponent />
      </div>
      <div>
        <MathBioCardComponent />
      </div>
      <div>
        <ScienceBioCardComponent />
      </div>
      <div>
        <TechBioCardComponent />
      </div>
    </div>
  );
}

export default App;
