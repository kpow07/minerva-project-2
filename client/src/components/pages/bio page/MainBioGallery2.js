import { useState } from "react";
import BioDirectoryComponent2 from "../../directories/BioDirectoryComponent2";
import AnyoneDetail from "../../bio-cards/AnyoneDetail";
import BioForm from "../../forms/forms/BioForm";

function MainBioGallery2({ bios }) {
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
          <BioDirectoryComponent2
            biosArray={bios}
            setSelectedBioId={setSelectedBioId}
          />
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
export default MainBioGallery2;
