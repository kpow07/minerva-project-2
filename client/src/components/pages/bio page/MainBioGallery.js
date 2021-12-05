import { useState } from "react";
import ScienceDirectoryFetchComponent from "../../directories/BioDirectoryComponent";
import AnyoneDetail from "../../bio-cards/AnyoneDetail";
import LibraryBioForm from "../../forms/forms/LibraryBioForm";

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
          <AnyoneDetail bioId={selectedBioId} />
        </div>
      )}
    </div>
  );
}
export default MainBioGallery;
