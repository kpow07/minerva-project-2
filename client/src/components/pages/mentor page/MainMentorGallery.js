import { useState } from "react";
import MentorDetail from "../directories/usingDB/MentorDetail";
import MentorDirectoryFetchComponent from "../../directories/usingDB/MentorDirectoryFetchComponent";

//replaces the App.js made in class
function MainMentorGallery() {
  const [selectedMentorId, setSelectedMentorId] = useState();

  return (
    <div className="main-bio-list">
      {/* { selectedMentorId ? 
          <div>
            <button onClick={() => setSelectedMentorId(undefined)}>Go Back</button>
            <MentorDetail  mentorId={selectedMentorId}/> 
          </div>
        : 
        <ScienceDirectoryFetch setSelectedMentorId={setSelectedMentorId} />  
      } */}

      {!selectedMentorId && (
        <MentorDirectoryFetchComponent
          setSelectedMentorId={setSelectedMentorId}
        />
      )}
      {selectedMentorId && (
        <div>
          <button onClick={() => setSelectedMentorId(undefined)}>
            Go Back
          </button>
          <MentorDetail mentorId={selectedMentorId} />
        </div>
      )}
    </div>
  );
}

export default MainMentorGallery;
