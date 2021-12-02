import { useState } from "react";
import BioDetail from "../directories/usingDB/BioDetail";
import ScienceDirectoryFetchComponent from "../directories/usingDB/ScienceDirectoryFetchComponent";

import LibraryBioForm from "../forms/LibraryBioForm";

//replaces the App.js made in class
function MainBioGallery() {
  const [selectedBioId, setSelectedBioId] = useState();

  // async function updateBio(newBio) {
  //   await fetch("api/update-bio", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/JSON" },
  //     body: JSON.stringify(newBio),
  //   });
  // }

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
        <div>
          <ScienceDirectoryFetchComponent setSelectedBioId={setSelectedBioId} />
          <LibraryBioForm />
        </div>
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
