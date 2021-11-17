import React from "react";
import "./App.css";

// import ScienceBioCardComponent from "./components/bio-cards/science-bio-card.component";
// import ScienceBioCardComponent from "./pages/bios-pages/page-card-mapping-trial";
import MathBioCardComponent from "./components/bio-cards/math-bio-card.component";
import EngineeringBioCardComponent from "./components/bio-cards/engineering-bio-card.component";
import TechBioCardComponent from "./components/bio-cards/tech-bio-card.component";
import SciencePageExample from "./components/directories/science-page-example";
import NavBarPlaceholder from "./components/directories/navplacelolder";

//

function App() {
  return (
    <div className="App">
      <NavBarPlaceholder />
      <SciencePageExample />
      {/* <div>
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
      </div> */}
    </div>
  );
}

export default App;
