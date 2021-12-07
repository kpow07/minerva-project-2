import { useState } from "react";
import BioDirectoryComponent from "../components/directories/BioDirectoryComponent";
import AnyoneDetail from "../components/bio-cards/AnyoneDetail";
import BioForm from "../components/forms/forms/BioForm";

//replaces the App.js made in class

function MainBioGallery() {
  const [selectedBioId, setSelectedBioId] = useState();

  const createBio = async function (newBio) {
    console.log(`adding bio with id: ${newBio.id}`);
    await fetch("/api/add-bio", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBio),
    });
  };

  return (
    <div className="main-bio-list">
      {!selectedBioId && (
        <div>
          <BioDirectoryComponent setSelectedBioId={setSelectedBioId} />
          <BioForm
            buttonValue={"SUBMIT BIO"}
            onSave={createBio}
            titleValue={"Add a New STEM Bio"}
          />
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
