import { useState } from "react";
import BioDetail from "../BioDetail";
import BioListComponent from "./BioListComponent";

//replaces the App.js made in class
function MainBioList() {
  const [selectedBioId, setSelectedBioId] = useState();

  return (
    <div className="main-bio-list">
      {/* { selectedBioId ? 
          <div>
            <button onClick={() => setSelectedBioId(undefined)}>Go Back</button>
            <BioDetail  BioId={selectedBioId}/> 
          </div>
        : 
        <BioListComponent setSelectedBioId={setSelectedBioId} />  
      } */}

      {!selectedBioId && (
        <BioListComponent setSelectedBioId={setSelectedBioId} />
      )}
      {selectedBioId && (
        <div>
          <button onClick={() => setSelectedBioId(undefined)}>Go Back</button>
          <BioDetail bioId={selectedBioId} />
        </div>
      )}
    </div>
  );
}

export default MainBioList;
