import { useState } from "react";
import BioDetail from "../directories/usingDB/BioDetail";
import ScienceDirectoryFetchComponent from "../directories/usingDB/ScienceDirectoryFetchComponent";

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
        <ScienceDirectoryFetchComponent setSelectedBioId={setSelectedBioId} />
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
