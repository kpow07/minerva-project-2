import { useState } from "react";
import BioDetail from "./BioDetail";
import ScienceDirectoryFetch from "./ScienceDirectoryFetch";

//replaces the App.js made in class
function MainBioGallery() {
  const [selectedBioId, setSelectedBioId] = useState();

  return (
    <div className="main-bio-list">
      {/* { selectedBioId ? 
          <div>
            <button onClick={() => setSelectedBioId(undefined)}>Go Back</button>
            <BioDetail  BioId={selectedBioId}/> 
          </div>
        : 
        <ScienceDirectoryFetch setSelectedBioId={setSelectedBioId} />  
      } */}

      {!selectedBioId && (
        <ScienceDirectoryFetch setSelectedBioId={setSelectedBioId} />
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

export default MainBioGallery;
